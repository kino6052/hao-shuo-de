// TRANSLATOR_PLAN.md S1, S2: the Firestore rules (firestore.rules) against the emulator, as §3a says them: signed out,
// signed in but not on the list, on the list, someone else's request, the owner. It talks to the emulator's REST API with
// unsigned tokens (the emulator takes them) and loads the rules itself, so it needs only a running emulator:
//
//   npx firebase-tools@13 emulators:exec --only firestore --project demo-translator "bun test src/lib/translator/rules.test.js"
//
// Without FIRESTORE_EMULATOR_HOST (emulators:exec sets it) every test is skipped. It needs Java, hence on request only.

import { beforeAll, beforeEach, describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

const HOST = process.env.FIRESTORE_EMULATOR_HOST;
const PROJECT = 'demo-translator';
const BASE = `http://${HOST}/v1/projects/${PROJECT}/databases/(default)/documents`;

const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
const tokenOf = ({ uid, email, verified = true }) => {
  const now = Math.floor(Date.now() / 1000);
  const claims = { iss: `https://securetoken.google.com/${PROJECT}`, aud: PROJECT, sub: uid, user_id: uid, iat: now, exp: now + 3600, auth_time: now, email, email_verified: verified, firebase: { sign_in_provider: 'google.com', identities: {} } };
  return `${b64({ alg: 'none', typ: 'JWT' })}.${b64(claims)}.`;
};

const ADMIN = { admin: true };
const ANN = { uid: 'ann', email: 'Ann@Example.com' }; // on the list as ann@example.com: the email's case does not matter
const BEN = { uid: 'ben', email: 'ben@example.com' }; // on the list
const CAT = { uid: 'cat', email: 'cat@example.com' }; // signed in, not on the list
const DAN = { uid: 'dan', email: 'dan@example.com', verified: false }; // on the list, email not verified
const OWN = { uid: 'own', email: 'owner@example.com' }; // on the list as the owner

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

// a request as the page adds it: createdAt is the server's time (REQUEST_TIME), unless `clientTime` says otherwise
async function addRequest(who, id, doc, { clientTime = false } = {}) {
  const write = { update: { name: `projects/${PROJECT}/databases/(default)/documents/requests/${id}`, fields: fieldsOf(clientTime ? { ...doc, createdAt: new Date() } : doc) }, currentDocument: { exists: false } };
  if (!clientTime) write.updateTransforms = [{ fieldPath: 'createdAt', setToServerValue: 'REQUEST_TIME' }];
  return call(who, 'POST', `${BASE}:commit`, { writes: [write] });
}

const query = (who, where) =>
  call(who, 'POST', `${BASE}:runQuery`, {
    structuredQuery: { from: [{ collectionId: 'requests' }], ...(where && { where: { fieldFilter: { field: { fieldPath: where[0] }, op: 'EQUAL', value: value(where[1]) } } }) },
  });

const run = HOST ? describe : describe.skip;

run('the translator rules (emulator)', () => {
  beforeAll(async () => {
    const rules = readFileSync(new URL('../../../firestore.rules', import.meta.url), 'utf8');
    const r = await fetch(`http://${HOST}/emulator/v1/projects/${PROJECT}:securityRules`, { method: 'PUT', body: JSON.stringify({ rules: { files: [{ name: 'firestore.rules', content: rules }] } }) });
    if (!r.ok) throw new Error(`the emulator refused the rules: ${await r.text()}`);
  });

  beforeEach(async () => {
    await fetch(`http://${HOST}/emulator/v1/projects/${PROJECT}/databases/(default)/documents`, { method: 'DELETE' });
    for (const [email, extra] of [['ann@example.com', {}], ['ben@example.com', {}], ['dan@example.com', {}], ['owner@example.com', { owner: true }]]) {
      expect((await put(ADMIN, `allowed/${email}`, { note: 'test', ...extra })).status).toBe(200);
    }
    expect((await put(ADMIN, 'presence/daemon', { lastSeen: Date.now(), state: 'idle', queue: 0 })).status).toBe(200);
    expect((await addRequest(ADMIN, 'ben-1', { uid: 'ben', email: 'ben@example.com', text: 'Hello.' })).status).toBe(200);
  });

  const mine = (who, over = {}) => ({ uid: who.uid, email: who.email, text: 'I forgot my umbrella.', lesson: '11', ...over });

  test('signed out: nothing', async () => {
    expect((await get(null, 'allowed/ann@example.com')).status).toBe(403);
    expect((await get(null, 'presence/daemon')).status).toBe(403);
    expect((await get(null, 'requests/ben-1')).status).toBe(403);
    expect((await addRequest(null, 'x', mine(ANN))).status).toBe(403);
  });

  test('signed in but not on the list: may look up its own entry (there is none), and nothing else', async () => {
    expect((await get(CAT, 'allowed/cat@example.com')).status).toBe(404);
    expect((await get(CAT, 'allowed/ann@example.com')).status).toBe(403);
    expect((await get(CAT, 'presence/daemon')).status).toBe(403);
    expect((await addRequest(CAT, 'cat-1', mine(CAT))).status).toBe(403);
    expect((await query(CAT, ['uid', 'cat'])).status).toBe(403);
  });

  test('on the list but the email is not verified: not on the list', async () => {
    expect((await get(DAN, 'allowed/dan@example.com')).status).toBe(403);
    expect((await addRequest(DAN, 'dan-1', mine(DAN))).status).toBe(403);
  });

  test('on the list: reads its own entry and the presence; adds a request as itself', async () => {
    expect((await get(ANN, 'allowed/ann@example.com')).status).toBe(200);
    expect((await get(ANN, 'presence/daemon')).status).toBe(200);
    expect((await addRequest(ANN, 'ann-1', mine(ANN))).status).toBe(200);
    expect((await addRequest(ANN, 'ann-2', { uid: 'ann', email: ANN.email, text: 'No lesson.' })).status).toBe(200);
  });

  test('a request must be its own, with only the page\'s fields, a text of 1 to 2,000 characters and the server\'s time', async () => {
    expect((await addRequest(ANN, 'a', mine(ANN, { uid: 'ben' }))).status).toBe(403);
    expect((await addRequest(ANN, 'b', mine(ANN, { email: 'ben@example.com' }))).status).toBe(403);
    expect((await addRequest(ANN, 'c', mine(ANN, { status: 'done' }))).status).toBe(403);
    expect((await addRequest(ANN, 'd', mine(ANN, { text: '' }))).status).toBe(403);
    expect((await addRequest(ANN, 'e', mine(ANN, { text: 'x'.repeat(2001) }))).status).toBe(403);
    expect((await addRequest(ANN, 'f', mine(ANN, { text: 'x'.repeat(2000) }))).status).toBe(200);
    expect((await addRequest(ANN, 'g', mine(ANN, { lesson: 'x'.repeat(41) }))).status).toBe(403);
    expect((await addRequest(ANN, 'h', mine(ANN), { clientTime: true })).status).toBe(403);
  });

  test("a person reads only their own requests; the owner reads everyone's", async () => {
    expect((await get(BEN, 'requests/ben-1')).status).toBe(200);
    expect((await get(ANN, 'requests/ben-1')).status).toBe(403);
    expect((await get(OWN, 'requests/ben-1')).status).toBe(200);
    expect((await query(BEN, ['uid', 'ben'])).status).toBe(200);
    expect((await query(BEN)).status).toBe(403);
    expect((await query(OWN)).status).toBe(200);
  });

  test('no page changes or deletes a request, the list or the presence', async () => {
    expect((await put(BEN, 'requests/ben-1?updateMask.fieldPaths=status', { status: 'done' })).status).toBe(403);
    expect((await del(BEN, 'requests/ben-1')).status).toBe(403);
    expect((await put(CAT, 'allowed/cat@example.com', { note: 'me' })).status).toBe(403);
    expect((await put(OWN, 'allowed/cat@example.com', { note: 'by the owner' })).status).toBe(403);
    expect((await put(ANN, 'presence/daemon', { state: 'idle' })).status).toBe(403);
    expect((await get(OWN, 'setup-check/x')).status).toBe(403);
  });
});
