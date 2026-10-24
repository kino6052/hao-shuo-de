// The translator page's side of Firestore (TRANSLATOR_PLAN.md §3a, S8), as the signed-in person: the rules
// (firestore.rules) decide what each call may do. Loaded in its own chunk with the Firestore SDK.
//
//   watchAllowed(user, onEntry, onError) -> stop     is this email on the list (allowed/<email, lowercase>): { owner } or null
//   watchPresence(onPresence) -> stop                presence/daemon: { lastSeen, state, queue }
//   watchRequests(user, { owner }, onRequests) -> stop   their own requests, newest first (the owner: everyone's)
//   sendRequest(user, { text, lesson, mode }) -> id     mode 'tree': with meaning trees (BROWSER_TRANSLATOR_PLAN.md B5);
//                                                       'full': slow and careful (the full pipeline); else quick

import { firestore, millis } from '../lib/firestore.js';

export const MAX_TEXT = 2000;
export const MAX_LESSON = 40;
export const SHOWN = 30;

// listen to one document until stop() (a person added to the list gets in without reloading)
function watchDoc(path, onDoc, onError) {
  let stop = () => {};
  let stopped = false;
  firestore().then(({ fs, db }) => {
    if (stopped) return;
    stop = fs.onSnapshot(fs.doc(db, ...path), (snap) => onDoc(snap.exists() ? snap.data() : null), onError);
  }, onError);
  return () => {
    stopped = true;
    stop();
  };
}

export const watchAllowed = (user, onEntry, onError) => watchDoc(['allowed', user.email.trim().toLowerCase()], (d) => onEntry(d ? { owner: d.owner === true } : null), onError);

export const watchPresence = (onPresence) => watchDoc(['presence', 'daemon'], onPresence, () => onPresence(null));

export function watchRequests(user, { owner = false } = {}, onRequests, onError = () => {}) {
  let stop = () => {};
  let stopped = false;
  firestore().then(({ fs, db }) => {
    if (stopped) return;
    const requests = fs.collection(db, 'requests');
    const q = owner
      ? fs.query(requests, fs.orderBy('createdAt', 'desc'), fs.limit(SHOWN))
      : fs.query(requests, fs.where('uid', '==', user.uid), fs.orderBy('createdAt', 'desc'), fs.limit(SHOWN));
    stop = fs.onSnapshot(q, { includeMetadataChanges: false }, (snap) => onRequests(snap.docs.map((d) => ({ id: d.id, ...d.data({ serverTimestamps: 'estimate' }), createdAt: millis(d.data({ serverTimestamps: 'estimate' }).createdAt) }))), onError);
  });
  return () => {
    stopped = true;
    stop();
  };
}

export async function sendRequest(user, { text, lesson, mode }) {
  const { fs, db } = await firestore();
  const doc = { uid: user.uid, email: user.email, text, createdAt: fs.serverTimestamp() };
  if (lesson) doc.lesson = lesson;
  if (mode === 'tree' || mode === 'full') doc.mode = mode;
  return (await fs.addDoc(fs.collection(db, 'requests'), doc)).id;
}
