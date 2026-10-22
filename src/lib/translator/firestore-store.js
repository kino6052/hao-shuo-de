// The translator's store in Firestore (TRANSLATOR_PLAN.md S3, S5), through the Firebase Admin SDK and the service-account
// key in %USERPROFILE%\.haoshuode-translator (home.js). The Admin SDK passes the security rules: the rules keep pages out
// of what only the daemon may write, and this file is the daemon's side. The same calls as memory-store.js (the store
// interface at the top of daemon.js), plus the list of people for `npm run translator -- allow | remove | list` and a
// request sent from the command line for `npm run translator -- online` (addRequest, watchRequest, getPresence).
//
//   connectFirestore({ serviceAccountPath, name }) -> store (+ close())
//   createFirestoreStore(db, { watchDays, retryMs, log }) -> store
//
// The data (§3a): requests/{id} { uid, email, text, lesson?, createdAt (the server's time) } plus the daemon's status, step,
// startedAt, endedAt, result, error; allowed/{email} { note, owner?, addedAt }; presence/daemon { lastSeen, state, queue }.
//
// watchRequests listens to the requests of the last `watchDays` days (a request with no status has nothing to filter on,
// so the daemon filters); when the listener fails it is opened again after retryMs, and the daemon's own memory of what
// it took up keeps a request from running twice.

import { readFileSync } from 'node:fs';

const DAY_MS = 86_400_000;

export const normalEmail = (email) => String(email ?? '').trim().toLowerCase();

const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export function createFirestoreStore(db, { watchDays = 7, retryMs = 30_000, log = () => {}, now = () => Date.now(), Timestamp, FieldValue } = {}) {
  const requests = db.collection('requests');
  const ms = (t) => (Timestamp ? Timestamp.fromMillis(t) : new Date(t));
  return {
    watchRequests(onDocs, onError) {
      let unsubscribe = () => {};
      let stopped = false;
      let retry;
      const open = () => {
        if (stopped) return;
        const query = requests.where('createdAt', '>=', ms(now() - watchDays * DAY_MS)).orderBy('createdAt');
        unsubscribe = query.onSnapshot(
          (snap) => onDocs(snap.docChanges().filter((c) => c.type !== 'removed').map((c) => ({ id: c.doc.id, doc: c.doc.data() }))),
          (e) => {
            onError(e);
            if (stopped) return;
            log(`translator: listening again in ${Math.round(retryMs / 1000)} s`);
            retry = setTimeout(open, retryMs);
          },
        );
      };
      open();
      return () => {
        stopped = true;
        clearTimeout(retry);
        unsubscribe();
      };
    },

    updateRequest: (id, fields) => requests.doc(id).update(fields),

    setPresence: (name, doc) => db.collection('presence').doc(name).set(doc),

    async countRequests({ uid, from, to }) {
      const snap = await requests.where('uid', '==', uid).where('createdAt', '>=', ms(from)).where('createdAt', '<', ms(to)).count().get();
      return snap.data().count;
    },

    // ---- the command line's request (`npm run translator -- online`): written as the page writes one, then watched ----

    async addRequest({ uid, email, text, lesson }) {
      const ref = requests.doc();
      await ref.set({ uid, email, text, ...(lesson && { lesson }), createdAt: FieldValue ? FieldValue.serverTimestamp() : ms(now()) });
      return ref.id;
    },

    watchRequest: (id, onDoc, onError) => requests.doc(id).onSnapshot((d) => onDoc(d.data() ?? null), onError),

    getPresence: async (name) => (await db.collection('presence').doc(name).get()).data() ?? null,

    // ---- the list (S3) ----

    async allow(email, { note = '', owner = false } = {}) {
      const key = normalEmail(email);
      if (!isEmail(key)) throw new Error(`"${email}" is not an email address`);
      await db.collection('allowed').doc(key).set({ note: String(note), owner: !!owner, addedAt: FieldValue ? FieldValue.serverTimestamp() : new Date(now()) });
      return key;
    },

    async remove(email) {
      const ref = db.collection('allowed').doc(normalEmail(email));
      const was = (await ref.get()).exists;
      if (was) await ref.delete();
      return was;
    },

    async listAllowed() {
      const snap = await db.collection('allowed').get();
      return snap.docs.map((d) => ({ email: d.id, ...d.data() })).sort((a, b) => a.email.localeCompare(b.email));
    },

    // a smoke test for the setup script: write, read back and delete one throwaway document
    async smokeTest() {
      const ref = db.collection('setup-check').doc(`check-${now()}`);
      await ref.set({ at: now() });
      const ok = (await ref.get()).exists;
      await ref.delete();
      return ok;
    },
  };
}

export async function connectFirestore({ serviceAccountPath, name = `translator-${Date.now()}`, ...opts }) {
  const { initializeApp, cert, deleteApp } = await import('firebase-admin/app');
  const { getFirestore, Timestamp, FieldValue } = await import('firebase-admin/firestore');
  let key;
  try {
    key = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
  } catch (e) {
    throw new Error(`cannot read the service-account key at ${serviceAccountPath} (${e.message}); run scripts/translator-setup.js first`);
  }
  const app = initializeApp({ credential: cert(key), projectId: key.project_id }, name);
  const db = getFirestore(app);
  db.settings({ ignoreUndefinedProperties: true });
  const store = createFirestoreStore(db, { Timestamp, FieldValue, ...opts });
  store.projectId = key.project_id;
  store.close = () => deleteApp(app);
  return store;
}
