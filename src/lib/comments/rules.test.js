// COMMENTS_PLAN.md A2: the comment rules (firestore.rules) against the emulator. Anyone signed in, the anonymous account
// included, adds a comment as themselves with their counter; only the admin (the translator's owner) reads, lists,
// marks done or deletes one. Like src/lib/translator/rules.test.js it talks to the emulator's REST API with unsigned
// tokens and loads the rules itself, so it needs only a running emulator:
//
//   npx firebase-tools@13 emulators:exec --only firestore --project demo-translator "bun test src/lib/comments/rules.test.js"
//
// Without FIRESTORE_EMULATOR_HOST (emulators:exec sets it) every test is skipped. It needs Java, hence on request only.

import { beforeAll, beforeEach, describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

const HOST = process.env.FIRESTORE_EMULATOR_HOST;
const PROJECT = 'demo-translator';
const DOCS = `projects/${PROJECT}/databases/(default)/documents`;
const BASE = `http://${HOST}/v1/${DOCS}`;

const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
const tokenOf = ({ uid, email, verified = true, anonymous = false }) => {
  const now = Math.floor(Date.now() / 1000);
  const claims = { iss: `https://securetoken.google.com/${PROJECT}`, aud: PROJECT, sub: uid, user_id: uid, iat: now, exp: now + 3600, auth_time: now };
  if (anonymous) claims.firebase = { sign_in_provider: 'anonymous', identities: {} };
  else Object.assign(claims, { email, email_verified: verified, firebase: { sign_in_provider: 'google.com', identities: {} } });
  return `${b64({ alg: 'none', typ: 'JWT' })}.${b64(claims)}.`;
};

const ADMIN = { admin: true }; // the Admin SDK: no rules
const anon = (uid) => ({ uid, anonymous: true });
const ANN = { uid: 'ann', email: 'ann@example.com' }; // signed in with Google, not on the list
const BEN = { uid: 'ben', email: 'ben@example.com' }; // on the list, not the owner
const DAN = { uid: 'dan', email: 'dan@example.com', verified: false }; // the owner's entry, email not verified
const OWN = { uid: 'own', email: 'Owner@Example.com' }; // the owner: the admin

const value = (v) => {
  if (typeof v === 'string') return { stringValue: v };
  if (typeof v === 'boolean') return { booleanValue: v };
  if (typeof v === 'number') return { integerValue: String(v) };
  if (v instanceof Date) return { timestampValue: v.toISOString() };
  throw new Error(`no Firestore value for ${v}`);
};
const fieldsOf = (doc) => Object.fromEntries(Object.entries(doc).map(([k, v]) => [k, value(v)]));

async function call(who, method, path, body) {
  const headers = { 'Content-Type': 'application/json' };
  if (who === ADMIN) headers.Authorization = 'Bearer owner';
  else if (who) headers.Authorization = `Bearer ${tokenOf(who)}`;
  const res = await fetch(path.startsWith('http') ? path : `${BASE}/${path}`, { method, headers, ...(body && { body: JSON.stringify(body) }) });
  return { status: res.status, body: await res.json().catch(() => null) };
}

const get = (who, path) => call(who, 'GET', path);
const put = (who, path, doc) => call(who, 'PATCH', path, { fields: fieldsOf(doc) });
const del = (who, path) => call(who, 'DELETE', path);
const commit = (who, writes) => call(who, 'POST', `${BASE}:commit`, { writes });
const listComments = (who) => call(who, 'POST', `${BASE}:runQuery`, { structuredQuery: { from: [{ collectionId: 'comments' }] } });

// the server's time for these fields, as the page's serverTimestamp() sends it
const serverTime = (...paths) => paths.map((fieldPath) => ({ fieldPath, setToServerValue: 'REQUEST_TIME' }));

// a comment as the page sends it: the reader's counter and the comment in one batch. `counter` is the counter's next
// values ({ since: 'now' | a Date, count, total }); `id`, `over` and `clientTime` bend the comment, `noCounter` and
// `noComment` leave one write out
function commentWrites(who, { counter = { since: 'now', count: 1, total: 1 }, id, over = {}, clientTime = false, noCounter = false, noComment = false } = {}) {
  const writes = [];
  if (!noCounter) {
    const fields = { count: counter.count, total: counter.total, ...(counter.since !== 'now' && { since: counter.since }) };
    writes.push({ update: { name: `${DOCS}/commentLimits/${who.uid}`, fields: fieldsOf(fields) }, updateTransforms: serverTime('last', ...(counter.since === 'now' ? ['since'] : [])) });
  }
  if (!noComment) {
    const doc = { text: 'The second example has a typo.', page: 'also-and-all', part: 'also-do.example2', quote: 'Wǒ yě chī. — I also eat.', lang: 'eng', version: '0.0.1+abc1234', uid: who.uid, signedIn: !who.anonymous, ...over };
    for (const [k, v] of Object.entries(doc)) if (v === undefined) delete doc[k];
    // a minute off: "now" from this clock can land on the server's own millisecond, as Windows' clocks tick coarsely
    const write = { update: { name: `${DOCS}/comments/${id ?? `${who.uid}-${counter.total}`}`, fields: fieldsOf(clientTime ? { ...doc, createdAt: new Date(Date.now() - 60_000) } : doc) }, currentDocument: { exists: false } };
    if (!clientTime) write.updateTransforms = serverTime('createdAt');
    writes.push(write);
  }
  return writes;
}

const send = (who, opts) => commit(who, commentWrites(who, opts));

const MIN = 60_000;
const HOUR = 60 * MIN;
let fresh = 0;
const someone = () => anon(`anon${++fresh}`); // a reader with no counter yet

const run = HOST ? describe : describe.skip;

run('the comment rules (emulator)', () => {
  beforeAll(async () => {
    const rules = readFileSync(new URL('../../../firestore.rules', import.meta.url), 'utf8');
    const r = await fetch(`http://${HOST}/emulator/v1/projects/${PROJECT}:securityRules`, { method: 'PUT', body: JSON.stringify({ rules: { files: [{ name: 'firestore.rules', content: rules }] } }) });
    if (!r.ok) throw new Error(`the emulator refused the rules: ${await r.text()}`);
  });

  beforeEach(async () => {
    await fetch(`http://${HOST}/emulator/v1/projects/${PROJECT}/databases/(default)/documents`, { method: 'DELETE' });
    for (const [email, extra] of [['ben@example.com', {}], ['dan@example.com', { owner: true }], ['owner@example.com', { owner: true }]]) {
      expect((await put(ADMIN, `allowed/${email}`, { note: 'test', ...extra })).status).toBe(200);
    }
  });

  test('signed out: no comment, no reading', async () => {
    expect((await commit(null, commentWrites({ uid: 'x', anonymous: true }))).status).toBe(403);
    expect((await listComments(null)).status).toBe(403);
  });

  test('an anonymous reader adds a comment with its counter; signedIn says false', async () => {
    const a = someone();
    expect((await send(a)).status).toBe(200);
    const saved = await get(OWN, `comments/${a.uid}-1`);
    expect(saved.status).toBe(200);
    expect(saved.body.fields.signedIn).toEqual({ booleanValue: false });
    expect(saved.body.fields.createdAt.timestampValue).toBeTruthy();
    expect((await send(someone(), { over: { signedIn: true } })).status).toBe(403);
  });

  test('a signed-in reader adds one as themselves; signedIn says true', async () => {
    expect((await send(ANN)).status).toBe(200);
    expect((await send(BEN, { over: { signedIn: false } })).status).toBe(403);
    expect((await send(BEN, { over: { uid: 'ann' } })).status).toBe(403);
  });

  test('a comment goes with its counter, under the id <uid>-<total>', async () => {
    expect((await send(someone(), { noCounter: true })).status).toBe(403);
    expect((await send(someone(), { noComment: true })).status).toBe(403);
    const a = someone();
    expect((await send(a, { id: `${a.uid}-2` })).status).toBe(403);
    expect((await send(a, { id: `ann-1` })).status).toBe(403);
    expect((await send(a, { counter: { since: 'now', count: 1, total: 2 } })).status).toBe(403);
    expect((await send(a)).status).toBe(200);
  });

  test('only the page\'s fields, each within its size, and the server\'s time', async () => {
    const refused = [
      { over: { extra: 'x' } },
      { over: { quote: undefined } },
      { over: { text: '' } },
      { over: { text: 'x'.repeat(1001) } },
      { over: { page: 'p'.repeat(81) } },
      { over: { page: '' } },
      { over: { part: 'p'.repeat(81) } },
      { over: { quote: 'q'.repeat(301) } },
      { over: { lang: 'fr' } },
      { over: { version: 'v'.repeat(41) } },
      { over: { text: 5 } },
      { clientTime: true },
    ];
    for (const opts of refused) expect({ opts, status: (await send(someone(), opts)).status }).toEqual({ opts, status: 403 });
    const taken = [
      { over: { text: 'x'.repeat(1000), quote: '', part: 'page' } },
      { over: { text: 'я'.repeat(1000), lang: 'rus' } },
      { over: { text: '好'.repeat(1000), lang: 'zh', quote: '好'.repeat(300) } },
    ];
    for (const opts of taken) expect({ opts, status: (await send(someone(), opts)).status }).toEqual({ opts, status: 200 });
  });

  test('at least 15 seconds between two comments', async () => {
    const since = new Date(Date.now() - HOUR);
    const b = someone();
    expect((await put(ADMIN, `commentLimits/${b.uid}`, { last: new Date(Date.now() - 5_000), since, count: 1, total: 1 })).status).toBe(200);
    expect((await send(b, { counter: { since, count: 2, total: 2 } })).status).toBe(403);
    const c = someone();
    expect((await put(ADMIN, `commentLimits/${c.uid}`, { last: new Date(Date.now() - 16_000), since, count: 1, total: 1 })).status).toBe(200);
    expect((await send(c, { counter: { since, count: 2, total: 2 } })).status).toBe(200);
  });

  test('a comment the admin deleted cannot be sent again without its counter', async () => {
    const a = someone();
    expect((await send(a)).status).toBe(200);
    expect((await del(OWN, `comments/${a.uid}-1`)).status).toBe(200);
    expect((await send(a, { noCounter: true })).status).toBe(403);
  });

  test('at most 30 in a day; a new day starts the count again', async () => {
    const a = someone();
    const since = new Date(Date.now() - HOUR);
    expect((await put(ADMIN, `commentLimits/${a.uid}`, { last: new Date(Date.now() - MIN), since, count: 29, total: 29 })).status).toBe(200);
    expect((await send(a, { counter: { since, count: 30, total: 30 } })).status).toBe(200);
    const b = someone();
    expect((await put(ADMIN, `commentLimits/${b.uid}`, { last: new Date(Date.now() - MIN), since, count: 30, total: 30 })).status).toBe(200);
    expect((await send(b, { counter: { since, count: 31, total: 31 } })).status).toBe(403);
    expect((await send(b, { counter: { since: 'now', count: 1, total: 31 } })).status).toBe(403);
    const c = someone();
    const yesterday = new Date(Date.now() - 25 * HOUR);
    expect((await put(ADMIN, `commentLimits/${c.uid}`, { last: new Date(Date.now() - MIN), since: yesterday, count: 30, total: 30 })).status).toBe(200);
    expect((await send(c, { counter: { since: yesterday, count: 31, total: 31 } })).status).toBe(403);
    expect((await send(c, { counter: { since: 'now', count: 1, total: 31 } })).status).toBe(200);
  });

  test('the counter cannot be bent', async () => {
    const a = someone();
    const since = new Date(Date.now() - HOUR);
    expect((await put(ADMIN, `commentLimits/${a.uid}`, { last: new Date(Date.now() - MIN), since, count: 3, total: 9 })).status).toBe(200);
    expect((await send(a, { counter: { since, count: 4, total: 11 } })).status).toBe(403); // the total jumps
    expect((await send(a, { counter: { since, count: 3, total: 10 } })).status).toBe(403); // the count stays
    expect((await send(a, { counter: { since: 'now', count: 1, total: 10 } })).status).toBe(403); // a new day too early
    expect((await send(a, { counter: { since: new Date(), count: 4, total: 10 } })).status).toBe(403); // since moved
    const extra = commentWrites(a, { counter: { since, count: 4, total: 10 } });
    extra[0].update.fields.note = value('x');
    expect((await commit(a, extra)).status).toBe(403);
    const b = someone();
    expect((await commit(b, commentWrites(a, { counter: { since, count: 4, total: 10 } }))).status).toBe(403); // someone else's counter
    expect((await del(a, `commentLimits/${a.uid}`)).status).toBe(403);
    expect((await send(a, { counter: { since, count: 4, total: 10 } })).status).toBe(200);
  });

  test('two comments in one batch on one count: refused', async () => {
    const a = someone();
    const writes = commentWrites(a);
    const second = commentWrites(a, { id: `${a.uid}-1x` })[1];
    expect((await commit(a, [...writes, second])).status).toBe(403);
    expect((await commit(a, [...writes, writes[1]])).status).not.toBe(200);
  });

  test('a reader reads its own counter and nothing else, and changes no comment', async () => {
    const a = someone();
    expect((await send(a)).status).toBe(200);
    expect((await get(a, `commentLimits/${a.uid}`)).status).toBe(200);
    expect((await get(someone(), `commentLimits/${a.uid}`)).status).toBe(403);
    expect((await get(a, `comments/${a.uid}-1`)).status).toBe(403);
    expect((await listComments(a)).status).toBe(403);
    expect((await listComments(ANN)).status).toBe(403);
    expect((await put(a, `comments/${a.uid}-1?updateMask.fieldPaths=text`, { text: 'changed' })).status).toBe(403);
    expect((await put(a, `comments/${a.uid}-1?updateMask.fieldPaths=done`, { done: true })).status).toBe(403);
    expect((await del(a, `comments/${a.uid}-1`)).status).toBe(403);
  });

  test('the admin reads and lists every comment, marks one done and deletes one; no one else does', async () => {
    const a = someone();
    expect((await send(a)).status).toBe(200);
    expect((await send(ANN)).status).toBe(200);
    expect((await get(OWN, `comments/${a.uid}-1`)).status).toBe(200);
    const list = await listComments(OWN);
    expect(list.status).toBe(200);
    expect(list.body.filter((r) => r.document).length).toBe(2);
    for (const who of [BEN, DAN, ANN]) {
      expect((await get(who, `comments/${a.uid}-1`)).status).toBe(403);
      expect((await listComments(who)).status).toBe(403);
      expect((await del(who, `comments/${a.uid}-1`)).status).toBe(403);
    }
    expect((await put(OWN, `comments/${a.uid}-1?updateMask.fieldPaths=done`, { done: true })).status).toBe(200);
    expect((await put(OWN, `comments/${a.uid}-1?updateMask.fieldPaths=done`, { done: false })).status).toBe(200);
    expect((await put(OWN, `comments/${a.uid}-1?updateMask.fieldPaths=done`, { done: 'yes' })).status).toBe(403);
    expect((await put(OWN, `comments/${a.uid}-1?updateMask.fieldPaths=text`, { text: 'edited' })).status).toBe(403);
    expect((await del(OWN, `comments/${a.uid}-1`)).status).toBe(200);
    expect((await get(OWN, `comments/${a.uid}-1`)).status).toBe(404);
    expect((await get(OWN, `commentLimits/${a.uid}`)).status).toBe(403);
  });
});
