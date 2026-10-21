// The translator daemon's logic (TRANSLATOR_PLAN.md S4): it takes the requests people add in Firestore one at a time, oldest
// first, and runs one Claude session for each. It marks a request "working" and answers at once ("Starting Claude for your
// text"), hands the text to the session unchanged, and writes back the result or a plain-language error. A person's 21st
// text of the day and any text over 2,000 characters fail at once, before a session starts. It also tells the page it is
// alive (presence/daemon). It knows nothing of Firestore or of the claude program: both are handed in, so tests use an
// in-memory store (memory-store.js), a fake clock and a fake session.
//
// The text is data. The daemon counts its characters and passes it on; it never reads it as an instruction. The page writes
// uid, email, text, lesson and createdAt (ms since 1970); the daemon only adds status, step, startedAt, endedAt, result and
// error, so a request goes: (nothing) -> queued -> working -> done or failed.
//
//   const daemon = createDaemon({ store, runSession });   daemon.start();   await daemon.stop();
//
// runSession(request, { onStep, signal }) -> Promise<result>
//   request = { id, uid, email, text, lesson, createdAt }. onStep('one line') says what the session is doing. When the
//   signal aborts (a timeout, or the daemon stopping) the session must stop. A thrown error becomes a plain failure; an
//   error with a plain-language `userMessage` has that shown to the person, the rest is only logged.
//
// The store (Firestore in S5, memory-store.js in tests). Any call may fail: the daemon tries a few times, then logs.
//   watchRequests(onDocs, onError) -> unsubscribe   onDocs([{ id, doc }]): first every request that is not finished (no
//                                                   status, queued or working), then each one added or changed
//   updateRequest(id, fields)                       merge fields into the request (only the daemon's six)
//   setPresence(name, doc)                          write presence/<name>; the daemon writes 'daemon'
//   countRequests({ uid, from, to }) -> number      that person's requests with from <= createdAt < to, whatever their status
//
// Options (all but store and runSession are optional):
//   maxPerDay 20, maxChars 2000      the limits per person (Q14); a text over either fails at once
//   timeoutMs 10 min                 a session that takes longer is stopped and the request fails
//   abortGraceMs 10 s                how long a stopped session gets to end before the next request starts anyway
//   heartbeatMs 30 s                 how often presence is written (it is also written on every change)
//   dayOffsetMinutes 0               the daily count restarts at midnight UTC plus this (480 = midnight in UTC+8)
//   requeueWithinMs 30 min           after a restart, a request left "working" starts again if it is younger than this
//   writeTries 3, writeRetryMs 5 s   how often a failing store call is tried
//   clock, log                       { now, setTimeout, clearTimeout, setInterval, clearInterval } and a function for log lines

const DAY_MS = 86_400_000;
const PRESENCE = 'daemon';
const MAX_STEP_CHARS = 200;

// Everything the daemon says to a person, in one place. The page shows these as they are.
export const TEXT = {
  starting: 'Starting Claude for your text',
  waiting: 'Waiting for your turn',
  restarted: 'The translator restarted, so your text will start again soon',
  stopping: 'The translator is restarting, so your text will start again soon',
  malformed: 'This request is missing something the translator needs, so it was not started.',
  empty: 'There is no text to translate.',
  tooLong: (n, max) => `Your text is ${n} characters long. One text can be at most ${max} characters. Please cut it into shorter parts and send them one at a time.`,
  tooMany: (max, resetsAt) => `You have already sent ${count(max, 'text')} today, which is the most one person can send in a day. You can send more after ${new Date(resetsAt).toISOString().slice(11, 16)} UTC.`,
  timeout: (ms) => `The translation took longer than ${howLong(ms)}, so it was stopped. Try a shorter text, or try again later.`,
  failed: 'Something went wrong while translating your text. Please try again.',
  nothing: 'The translation came back empty. Please try again.',
  notSaved: 'The translation was made, but it could not be saved. Please try again.',
  tooOld: 'The translator restarted while it was working on your text, and too much time has passed to start over. Please send it again.',
};

function count(n, noun) {
  return `${n} ${noun}${n === 1 ? '' : 's'}`;
}

function howLong(ms) {
  return ms < 120_000 ? count(Math.round(ms / 1000), 'second') : count(Math.round(ms / 60_000), 'minute');
}

const realClock = {
  now: () => Date.now(),
  setTimeout: (fn, ms) => setTimeout(fn, ms),
  clearTimeout: (handle) => clearTimeout(handle),
  setInterval: (fn, ms) => setInterval(fn, ms),
  clearInterval: (handle) => clearInterval(handle),
};

// The request time in ms, whether it comes as a number, a Date or a Firestore Timestamp; NaN when it is none of them.
const asMs = (v) => (typeof v === 'number' ? v : v instanceof Date ? v.getTime() : typeof v?.toMillis === 'function' ? v.toMillis() : NaN);

const oldestFirst = (a, b) => a.createdAt - b.createdAt || (a.id < b.id ? -1 : 1); // NaN falls through to the id

const oneLine = (text) => String(text ?? '').replace(/\s+/g, ' ').trim().slice(0, MAX_STEP_CHARS);

const why = (e) => e?.message ?? String(e);

export function createDaemon({
  store,
  runSession,
  maxPerDay = 20,
  maxChars = 2000,
  timeoutMs = 10 * 60_000,
  abortGraceMs = 10_000,
  heartbeatMs = 30_000,
  dayOffsetMinutes = 0,
  requeueWithinMs = 30 * 60_000,
  writeTries = 3,
  writeRetryMs = 5_000,
  clock = realClock,
  log = (line) => console.error(line),
} = {}) {
  if (!store) throw new Error('store is required');
  if (typeof runSession !== 'function') throw new Error('runSession is required');

  const now = () => clock.now();
  const waiting = []; // queued and not started: { id, createdAt, request }
  const known = new Set(); // every request this daemon has taken up, so the echo of its own writes is ignored
  let current; // the running session: { id, controller, interrupt }
  let stopped = true;
  let heartbeat;
  let unwatch;
  let intake = Promise.resolve(); // hearing requests, one update after the other
  let loop = Promise.resolve(); // the run loop
  let draining = false;
  let presence = Promise.resolve();
  let beatPending = false;

  // ---- the store, with a few tries -------------------------------------------------------------------------

  const after = (ms) => {
    let handle;
    const promise = new Promise((done) => (handle = clock.setTimeout(done, ms)));
    return { promise, cancel: () => clock.clearTimeout(handle) };
  };

  async function retrying(what, fn) {
    for (let i = 1; ; i++) {
      try {
        return await fn();
      } catch (e) {
        log(`translator: ${what} failed (try ${i} of ${writeTries}): ${why(e)}`);
        if (i >= writeTries) throw e;
        await after(writeRetryMs).promise;
      }
    }
  }

  // true when the update is in, false when the store kept failing (it is logged)
  const put = (id, fields) => retrying(`updating request ${id}`, () => store.updateRequest(id, fields)).then(() => true, () => false);

  const fail = (id, error) => put(id, { status: 'failed', endedAt: now(), error, step: null });

  // Fails a request that cannot be run; when even that cannot be written, the request is left for the next start.
  async function reject(id, error) {
    if (!(await fail(id, error))) untake(id);
  }

  // ---- presence ----------------------------------------------------------------------------------------------

  // Presence is written with what is true when the write happens, and changes that come together make one write.
  function beat() {
    if (beatPending) return;
    beatPending = true;
    presence = presence
      .then(() => {
        beatPending = false;
        return store.setPresence(PRESENCE, { lastSeen: now(), state: current ? 'working' : 'idle', queue: waiting.length });
      })
      .catch((e) => log(`translator: could not write presence: ${why(e)}`));
  }

  function tick() {
    beat();
    return presence;
  }

  // ---- hearing requests --------------------------------------------------------------------------------------

  function feed(docs) {
    intake = intake.then(() => hear(docs)).catch((e) => log(`translator: ${why(e)}`));
  }

  async function hear(docs) {
    const open = docs
      .filter(({ id, doc }) => doc && doc.status !== 'done' && doc.status !== 'failed' && !known.has(id))
      .map(({ id, doc }) => ({ id, doc, createdAt: asMs(doc.createdAt) }))
      .sort(oldestFirst);
    for (const { id, doc } of open) {
      if (stopped) return;
      if (known.has(id)) continue;
      known.add(id);
      try {
        if (doc.status === 'working') await recover(id, doc);
        else if (doc.status === 'queued') await adopt(id, doc);
        else await admit(id, doc);
      } catch (e) {
        known.delete(id); // not taken up: a later start finds it again
        log(`translator: could not take up request ${id}, it stays as it is: ${why(e)}`);
      }
    }
  }

  // The request as the session gets it (only the page's own fields), or why it cannot be run.
  function entryOf(id, doc) {
    const createdAt = asMs(doc.createdAt);
    const { uid, email, text, lesson } = doc;
    if (typeof uid !== 'string' || !uid || typeof text !== 'string' || !Number.isFinite(createdAt)) return { problem: TEXT.malformed };
    return { id, createdAt, request: { id, uid, email, text, lesson, createdAt } };
  }

  // The UTC day (or the day at dayOffsetMinutes from it) that a moment falls in: [from, to).
  function dayOf(ms) {
    const shift = dayOffsetMinutes * 60_000;
    const from = Math.floor((ms + shift) / DAY_MS) * DAY_MS - shift;
    return { from, to: from + DAY_MS };
  }

  // A new request: refused at once when it breaks a limit (however busy the daemon is), else queued. The count is of the
  // person's requests up to and including this one, by their own times, so the answer does not depend on when it is asked.
  async function admit(id, doc) {
    const entry = entryOf(id, doc);
    if (entry.problem) return reject(id, entry.problem);
    const { uid, text, createdAt } = entry.request;
    const chars = [...text].length;
    if (!text.trim()) return reject(id, TEXT.empty);
    if (chars > maxChars) return reject(id, TEXT.tooLong(chars, maxChars));
    const day = dayOf(createdAt);
    const sent = await retrying(`counting the texts of ${id}`, () => store.countRequests({ uid, from: day.from, to: createdAt + 1 }));
    if (sent > maxPerDay) return reject(id, TEXT.tooMany(maxPerDay, day.to));
    if (await put(id, { status: 'queued', step: TEXT.waiting })) lineUp(entry);
    else untake(id);
  }

  // A request an earlier run left queued.
  async function adopt(id, doc) {
    const entry = entryOf(id, doc);
    if (entry.problem) return reject(id, entry.problem);
    lineUp(entry);
  }

  // The daemon stopped without finishing a request. Its session is gone and its result with it, so the request starts
  // again (nothing was the person's fault, and sending it again would use up one of their texts of the day), unless it is
  // old: then it fails. Its own time, which never changes, bounds this, so a request that keeps stopping the daemon cannot
  // be started over for ever.
  async function recover(id, doc) {
    const entry = entryOf(id, doc);
    if (entry.problem) return reject(id, entry.problem);
    if (now() - entry.createdAt > requeueWithinMs) return reject(id, TEXT.tooOld);
    if (await put(id, { status: 'queued', step: TEXT.restarted })) lineUp(entry);
    else untake(id);
  }

  function untake(id) {
    known.delete(id);
    log(`translator: request ${id} could not be updated, it stays as it is until the next start`);
  }

  function lineUp(entry) {
    waiting.push(entry);
    beat();
    pump();
  }

  // ---- running sessions, one at a time -----------------------------------------------------------------------

  function pump() {
    if (draining || stopped) return;
    draining = true;
    loop = drain();
  }

  async function drain() {
    try {
      while (!stopped && waiting.length) {
        waiting.sort(oldestFirst);
        await runOne(waiting.shift());
      }
    } finally {
      draining = false;
      beat();
    }
  }

  async function runOne(entry) {
    const run = { id: entry.id, controller: new AbortController(), interrupt: () => {} };
    current = run;
    beat();
    try {
      await work(entry, run);
    } catch (e) {
      log(`translator: request ${entry.id}: ${why(e)}`);
    } finally {
      current = undefined;
      beat();
    }
  }

  async function work({ id, request }, run) {
    if (!(await put(id, { status: 'working', startedAt: now(), step: TEXT.starting }))) {
      return untake(id);
    }
    if (stopped) return void (await put(id, { status: 'queued', step: TEXT.stopping }));

    let live = true;
    let lastStep = TEXT.starting;
    let steps = Promise.resolve();
    const onStep = (text) => {
      const step = oneLine(text);
      if (!live || !step || step === lastStep) return;
      lastStep = step;
      steps = steps.then(() => store.updateRequest(id, { step })).catch((e) => log(`translator: could not write the step of ${id}: ${why(e)}`));
    };

    const deadline = after(timeoutMs);
    const interrupted = new Promise((done) => (run.interrupt = () => done({ interrupted: true })));
    const session = Promise.resolve()
      .then(() => runSession(request, { onStep, signal: run.controller.signal }))
      .then((result) => ({ result }), (error) => ({ error }));
    const outcome = await Promise.race([session, deadline.promise.then(() => ({ late: true })), interrupted]);
    deadline.cancel();
    live = false;
    const stopIt = outcome.late || outcome.interrupted;
    if (stopIt) run.controller.abort();
    await steps; // the steps first, so none of them lands after the end

    if ('result' in outcome) {
      if (outcome.result == null) {
        await fail(id, TEXT.nothing);
      } else if (!(await put(id, { status: 'done', endedAt: now(), result: outcome.result, step: null }))) {
        await fail(id, TEXT.notSaved);
      }
    } else if (outcome.late) {
      log(`translator: request ${id} took longer than ${howLong(timeoutMs)}, stopping it`);
      await fail(id, TEXT.timeout(timeoutMs));
    } else if (outcome.interrupted) {
      await put(id, { status: 'queued', step: TEXT.stopping });
    } else {
      log(`translator: request ${id}: the session failed: ${why(outcome.error)}`);
      const plain = outcome.error?.userMessage;
      await fail(id, typeof plain === 'string' && plain.trim() ? plain.trim() : TEXT.failed);
    }

    // A session that was told to stop gets a moment to end, so two never run together.
    if (stopIt) {
      const grace = after(abortGraceMs);
      await Promise.race([session, grace.promise]);
      grace.cancel();
    }
  }

  // ---- start and stop ----------------------------------------------------------------------------------------

  function start() {
    if (!stopped) return;
    stopped = false;
    known.clear();
    waiting.length = 0;
    beat();
    heartbeat = clock.setInterval(() => void tick(), heartbeatMs);
    unwatch = store.watchRequests(feed, (e) => log(`translator: the request listener failed: ${why(e)}`));
  }

  // Stops listening. A running session is told to stop and its request goes back to queued, so the next start runs it.
  async function stop() {
    if (stopped) return;
    stopped = true;
    clock.clearInterval(heartbeat);
    unwatch?.();
    unwatch = undefined;
    current?.interrupt();
    await intake;
    await loop;
    await presence;
  }

  return {
    start,
    stop,
    tick,
    get state() {
      return current ? 'working' : 'idle';
    },
    get queue() {
      return waiting.length;
    },
  };
}
