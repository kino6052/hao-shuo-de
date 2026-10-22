// TRANSLATOR_PLAN.md S3, S5: the Firestore store against a fake db (the real one is the emulator's, rules.test.js), and the
// translator's home folder (home.js): where the key and the token live, and the check that keeps them out of the repo.

import { describe, expect, test } from 'bun:test';
import { mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createFirestoreStore, normalEmail } from './firestore-store.js';
import { homeFile, isInside, parseClaudeToken, readClaudeToken, translatorHome, writeClaudeToken } from './home.js';

// Just enough of the Admin SDK's Firestore for the store: collections of docs, where/orderBy/count, onSnapshot.
function fakeDb() {
  const data = new Map(); // 'col/id' -> doc
  const calls = [];
  const docRef = (col, id) => ({
    id,
    async set(doc) {
      data.set(`${col}/${id}`, { ...doc });
    },
    async update(fields) {
      if (!data.has(`${col}/${id}`)) throw new Error('no such document');
      data.set(`${col}/${id}`, { ...data.get(`${col}/${id}`), ...fields });
    },
    async get() {
      const doc = data.get(`${col}/${id}`);
      return { exists: Boolean(doc), id, data: () => doc };
    },
    async delete() {
      data.delete(`${col}/${id}`);
    },
    onSnapshot(onNext) {
      onNext({ data: () => data.get(`${col}/${id}`) });
      return () => calls.push(['unwatch', col, id]);
    },
  });
  const docsOf = (col) => [...data].filter(([k]) => k.startsWith(`${col}/`)).map(([k, doc]) => ({ id: k.slice(col.length + 1), data: () => doc }));
  const queryOf = (col, filters = []) => ({
    where: (field, op, v) => queryOf(col, [...filters, [field, op, v]]),
    orderBy: () => queryOf(col, filters),
    count: () => ({
      get: async () => {
        calls.push(['count', col, filters]);
        const ok = (doc) => filters.every(([f, op, v]) => (op === '==' ? doc[f] === v : op === '>=' ? doc[f] >= v : doc[f] < v));
        return { data: () => ({ count: docsOf(col).filter((d) => ok(d.data())).length }) };
      },
    }),
    onSnapshot(onNext, onError) {
      calls.push(['listen', col, filters]);
      this.fire = (changes) => onNext({ docChanges: () => changes });
      db.listeners.push({ onNext, onError, filters });
      return () => calls.push(['unlisten', col]);
    },
    get: async () => ({ docs: docsOf(col) }),
  });
  const db = { data, calls, listeners: [], collection: (col) => ({ ...queryOf(col), doc: (id = `auto-${data.size + 1}`) => docRef(col, id) }) };
  return db;
}

describe('the store', () => {
  test("the command line's request: written as the page writes one (no lesson when empty), watched; the daemon's presence", async () => {
    const db = fakeDb();
    const store = createFirestoreStore(db, { now: () => 5_000 });
    const id = await store.addRequest({ uid: 'cli', email: 'command line', text: 'I eat.', lesson: '' });
    expect(db.data.get(`requests/${id}`)).toEqual({ uid: 'cli', email: 'command line', text: 'I eat.', createdAt: new Date(5_000) });
    const seen = [];
    store.watchRequest(id, (d) => seen.push(d), () => {})();
    expect(seen).toEqual([db.data.get(`requests/${id}`)]);
    expect(db.calls).toContainEqual(['unwatch', 'requests', id]);
    expect(await store.getPresence('daemon')).toBeNull();
    await db.collection('presence').doc('daemon').set({ lastSeen: 4_000 });
    expect(await store.getPresence('daemon')).toEqual({ lastSeen: 4_000 });
  });

  test('requests: watched from a week back, updated, counted per person and day', async () => {
    const db = fakeDb();
    const store = createFirestoreStore(db, { now: () => 10 * 86_400_000 });
    const seen = [];
    const stop = store.watchRequests((docs) => seen.push(...docs), () => {});
    expect(db.calls[0]).toEqual(['listen', 'requests', [['createdAt', '>=', new Date(3 * 86_400_000)]]]);
    db.listeners[0].onNext({ docChanges: () => [{ type: 'added', doc: { id: 'r1', data: () => ({ text: 'hi' }) } }, { type: 'removed', doc: { id: 'r0', data: () => ({}) } }] });
    expect(seen).toEqual([{ id: 'r1', doc: { text: 'hi' } }]);
    stop();
    expect(db.calls.at(-1)).toEqual(['unlisten', 'requests']);

    await db.collection('requests').doc('r1').set({ uid: 'ann', createdAt: 5 });
    await db.collection('requests').doc('r2').set({ uid: 'ann', createdAt: 50 });
    await store.updateRequest('r1', { status: 'working' });
    expect(db.data.get('requests/r1')).toEqual({ uid: 'ann', createdAt: 5, status: 'working' });
    expect(await store.countRequests({ uid: 'ann', from: 0, to: 10 })).toBe(1);
  });

  test('a listener that fails is opened again after retryMs, and not after it is stopped', async () => {
    const db = fakeDb();
    const errors = [];
    const store = createFirestoreStore(db, { retryMs: 5, now: () => 0 });
    const stop = store.watchRequests(() => {}, (e) => errors.push(e.message));
    db.listeners[0].onError(new Error('unavailable'));
    await new Promise((r) => setTimeout(r, 20));
    expect(errors).toEqual(['unavailable']);
    expect(db.listeners).toHaveLength(2);
    stop();
    db.listeners[1].onError(new Error('again'));
    await new Promise((r) => setTimeout(r, 20));
    expect(db.listeners).toHaveLength(2);
  });

  test('the list: emails are kept lowercase, a bad one is refused, remove says whether it was there', async () => {
    const db = fakeDb();
    const store = createFirestoreStore(db, { now: () => 0 });
    expect(await store.allow(' Ann@Example.com ', { note: 'a friend' })).toBe('ann@example.com');
    await store.allow('owner@example.com', { owner: true });
    await expect(store.allow('not an email')).rejects.toThrow('not an email address');
    expect(await store.listAllowed()).toEqual([
      { email: 'ann@example.com', note: 'a friend', owner: false, addedAt: new Date(0) },
      { email: 'owner@example.com', note: '', owner: true, addedAt: new Date(0) },
    ]);
    expect(await store.remove('ANN@example.com')).toBe(true);
    expect(await store.remove('ann@example.com')).toBe(false);
    expect(normalEmail(' X@Y.Z ')).toBe('x@y.z');
  });

  test('presence and the smoke test', async () => {
    const db = fakeDb();
    const store = createFirestoreStore(db, { now: () => 7 });
    await store.setPresence('daemon', { lastSeen: 7, state: 'idle', queue: 0 });
    expect(db.data.get('presence/daemon')).toEqual({ lastSeen: 7, state: 'idle', queue: 0 });
    expect(await store.smokeTest()).toBe(true);
    expect([...db.data.keys()].filter((k) => k.startsWith('setup-check/'))).toEqual([]);
  });
});

describe('the home folder', () => {
  test('HAOSHUODE_TRANSLATOR_HOME moves it; the token is saved and read back, a bad one is not used', () => {
    const env = { HAOSHUODE_TRANSLATOR_HOME: mkdtempSync(join(tmpdir(), 'translator-home-')) };
    expect(translatorHome(env)).toBe(env.HAOSHUODE_TRANSLATOR_HOME);
    expect(homeFile('serviceAccount', env)).toBe(join(env.HAOSHUODE_TRANSLATOR_HOME, 'service-account.json'));
    expect(readClaudeToken(env)).toBeUndefined();
    writeClaudeToken('sk-ant-oat01-test', env);
    expect(readFileSync(homeFile('token', env), 'utf8')).toBe('sk-ant-oat01-test\n');
    expect(readClaudeToken(env)).toBe('sk-ant-oat01-test');
    expect(parseClaudeToken(' "sk-ant-x" ')).toEqual({ ok: true, token: 'sk-ant-x' });
    expect(parseClaudeToken('sk-ant-a b').ok).toBe(false);
    expect(parseClaudeToken('hello').reason).toContain('not a Claude token');
  });

  test('isInside: a path in the repo, the repo itself, and one beside it', () => {
    expect(isInside('/repo/src/key.json', '/repo')).toBe(true);
    expect(isInside('/repo', '/repo')).toBe(true);
    expect(isInside('/repo-other/key.json', '/repo')).toBe(false);
    expect(isInside('/home/me/.haoshuode-translator/key.json', '/repo')).toBe(false);
  });
});
