// The quick translator kept running (OPTIMIZATIONS.md: load once, keep in memory). The KB stays open and a session waits,
// started ahead, so a translation costs the model's answer and a few milliseconds of pieces, not the 8 s of opening the
// KB beside a session that is starting (measured 2026-10-23: 5.3 s for the KB and 3.3 s for the first pieces while
// claude started, then 2.1 s for the answer). `npm run translator -- translate` asks it first; when none runs, the
// command translates on its own and starts one after printing. It stops after IDLE_MS with no request, on
// `npm run translator -- stop`, or when the translator's code changes under it (codeStamp).
//
// One request per connection, as lines of JSON over a local pipe named after the checkout (a named pipe on Windows, a
// socket file elsewhere), so two checkouts never share a server. The request: { code, text, lesson, repairs, verbose,
// withCost, model, effort }. The answer: { step } lines while it works, then { result }, { error } or { stale }.
//
//   pipePath(root) -> the pipe
//   codeStamp(root) -> a number that changes when the code a translation runs changes (src/lib and the two scripts)
//   askServer(request, { root, onStep, connectMs }) -> Promise<result | null>   null: no server, or a stale one (stopping)
//   stopServer({ root }) -> Promise<boolean>   whether one was running
//   serve({ root, code, openKb, startSession, model, effort, idleMs, log }) -> Promise, settled when it stops

import { createHash } from 'node:crypto';
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import net from 'node:net';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { sessionPool } from './claude.js';
import { piecesOf, quickTranslate } from './quick.js';

export const IDLE_MS = 30 * 60 * 1000;

export function pipePath(root) {
  const id = createHash('sha1').update(resolve(root).toLowerCase()).digest('hex').slice(0, 12);
  return process.platform === 'win32' ? `\\\\.\\pipe\\haoshuode-translator-${id}` : join(tmpdir(), `haoshuode-translator-${id}.sock`);
}

export function codeStamp(root) {
  let sum = 0;
  const add = (p) => {
    const s = statSync(p);
    if (s.isDirectory()) for (const name of readdirSync(p)) add(join(p, name));
    else sum += s.mtimeMs + s.size;
  };
  for (const p of ['src/lib', 'scripts/translator.js', 'scripts/kb.js']) {
    try {
      add(resolve(root, p));
    } catch {}
  }
  return sum;
}

// lines of JSON from a socket, each to `hear`
function readLines(socket, hear) {
  let buffer = '';
  socket.on('data', (chunk) => {
    buffer += chunk.toString('utf8');
    let at;
    while ((at = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, at).trim();
      buffer = buffer.slice(at + 1);
      if (!line) continue;
      try {
        hear(JSON.parse(line));
      } catch {}
    }
  });
}

const send = (socket, message) => socket.writable && socket.write(`${JSON.stringify(message)}\n`);

export function askServer(request, { root, onStep = () => {}, connectMs = 300 } = {}) {
  return new Promise((done, failed) => {
    let connected = false;
    let settled = false;
    const settle = (fn, value) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      socket.destroy();
      fn(value);
    };
    const socket = net.connect(pipePath(root));
    const timer = setTimeout(() => !connected && settle(done, null), connectMs);
    socket.on('connect', () => {
      connected = true;
      clearTimeout(timer);
      send(socket, request);
    });
    readLines(socket, (m) => {
      if (m.step) onStep(m.step);
      else if (m.result) settle(done, m.result);
      else if (m.stale) settle(done, null);
      else if (m.error) settle(failed, Object.assign(new Error(m.error.message), m.error, { fromServer: true }));
    });
    // no server: the pipe is not there. A server that dies mid-request fails the request, which the caller retries alone.
    socket.on('error', (e) => settle(connected ? failed : done, connected ? e : null));
    socket.on('close', () => settle(connected ? failed : done, connected ? new Error('the translator server closed the connection') : null));
  });
}

export function stopServer({ root } = {}) {
  return new Promise((done) => {
    const socket = net.connect(pipePath(root));
    socket.on('connect', () => send(socket, { stop: true }));
    readLines(socket, () => {
      socket.destroy();
      done(true);
    });
    socket.on('error', () => done(false));
  });
}

export async function serve({ root, code, openKb, startSession, model, effort, idleMs = IDLE_MS, log = () => {} }) {
  const sessions = sessionPool(startSession);
  const path = pipePath(root);
  // a socket file left by a server that crashed would refuse the listen; one that answers belongs to a live server
  if (process.platform !== 'win32') {
    await new Promise((ok) => {
      const probe = net.connect(path);
      probe.on('connect', () => (probe.destroy(), ok()));
      probe.on('error', () => {
        try {
          unlinkSync(path);
        } catch {}
        ok();
      });
    });
  }
  // a session waiting, and the KB's lazy parts (the English index, the composites' descriptions, the pool) built now,
  // not on the first request, which waits for them if it comes first
  sessions.refill(model, effort);
  const ready = openKb({ memo: true }).then((kb) => {
    piecesOf(kb, 'Warm up the dictionary.');
    log(`ready on ${path}`);
  });
  ready.catch((err) => log(`warm-up failed: ${err.stack ?? err}`));

  return new Promise((stopped) => {
    let idle;
    const stop = () => {
      clearTimeout(idle);
      sessions.close();
      server.close();
      log('stopped');
      stopped();
    };
    const rest = () => {
      clearTimeout(idle);
      idle = setTimeout(stop, idleMs);
      idle.unref?.();
    };
    const server = net.createServer((socket) => {
      socket.on('error', () => {});
      readLines(socket, async (request) => {
        rest();
        if (request.stop) {
          send(socket, { stopped: true });
          socket.end();
          return stop();
        }
        if (request.code !== code) {
          send(socket, { stale: true });
          socket.end();
          return stop();
        }
        const m = request.model ?? model;
        const e = request.effort ?? effort;
        const session = sessions.take(m, e);
        try {
          await ready;
          // openKb gives the KB it holds unless the data changed (its stamp walks the data folders: about 0.3 s)
          const kb = await openKb({ memo: true });
          const result = await quickTranslate(request, {
            kb,
            checkKb: request.verbose ? () => openKb() : kb,
            session,
            onStep: (step) => send(socket, { step }),
            repairs: request.repairs ?? 1,
            model: m,
            withCost: Boolean(request.withCost),
          });
          send(socket, { result });
        } catch (err) {
          log(`failed: ${err.stack ?? err}`);
          send(socket, { error: { message: err.message, userMessage: err.userMessage, login: err.login } });
        } finally {
          session.close();
          sessions.refill(m, e);
          socket.end();
        }
      });
    });
    server.on('error', (err) => {
      // another server took the pipe first: that one serves
      log(`cannot listen: ${err.message}`);
      stop();
    });
    server.listen(path, rest);
  });
}
