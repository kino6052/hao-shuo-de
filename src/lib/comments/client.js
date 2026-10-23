// The readers' comments in Firestore (COMMENTS_PLAN.md), as the signed-in or anonymous reader; the rules
// (firestore.rules) decide what each call may do. In its own chunk, with the Firestore SDK.
//
//   sendComment({ text, page, part, quote, lang }) -> { id } or { error }
//       error: 'empty' | 'long' (the text), 'wait' (15 seconds since the last), 'full' (the day's 30), 'off'
//       (Firebase or Anonymous sign-in not switched on) or 'failed'
//   watchComments(onComments, onError) -> stop     the admin: every comment, newest first
//   markDone(id, done), deleteComment(id)          the admin

import { commentAccount } from '../auth.js';
import { firestore, millis } from '../firestore.js';
import { APP_VERSION } from '../version.js';
import { GAP_MS, commentDoc, counterPlans } from './comment.js';

export async function sendComment({ text, page, part, quote, lang }) {
  const account = await commentAccount();
  if (account.error) return account;
  const made = commentDoc({ text, page, part, quote, lang, version: APP_VERSION, uid: account.uid, signedIn: account.signedIn });
  if (made.error) return made;
  try {
    const { fs, db } = await firestore();
    const counterRef = fs.doc(db, 'commentLimits', account.uid);
    const snap = await fs.getDoc(counterRef);
    const stored = snap.exists() ? snap.data() : null;
    const prev = stored && { last: millis(stored.last), since: millis(stored.since), count: stored.count, total: stored.total };
    const next = counterPlans(prev);
    if (next.wait) return { error: 'wait' };
    if (next.full) return { error: 'full' };
    for (const plan of next.plans) {
      const now = fs.serverTimestamp();
      const id = `${account.uid}-${plan.total}`;
      const batch = fs.writeBatch(db);
      batch.set(counterRef, { last: now, since: plan.since === 'now' ? now : stored.since, count: plan.count, total: plan.total });
      batch.set(fs.doc(db, 'comments', id), { ...made.doc, createdAt: now });
      try {
        await batch.commit();
        return { id };
      } catch (e) {
        if (e?.code !== 'permission-denied') throw e;
      }
    }
    // refused both ways: most likely this browser's clock is behind and the 15 seconds are not over on the server
    return { error: prev && Date.now() - prev.last < 2 * GAP_MS ? 'wait' : 'failed' };
  } catch {
    return { error: 'failed' };
  }
}

export function watchComments(onComments, onError = () => {}) {
  let stop = () => {};
  let stopped = false;
  firestore().then(({ fs, db }) => {
    if (stopped) return;
    const q = fs.query(fs.collection(db, 'comments'), fs.orderBy('createdAt', 'desc'));
    stop = fs.onSnapshot(q, (snap) => onComments(snap.docs.map((d) => {
      const data = d.data({ serverTimestamps: 'estimate' });
      return { id: d.id, ...data, createdAt: millis(data.createdAt) };
    })), onError);
  }, onError);
  return () => {
    stopped = true;
    stop();
  };
}

export async function markDone(id, done) {
  const { fs, db } = await firestore();
  await fs.updateDoc(fs.doc(db, 'comments', id), { done });
}

export async function deleteComment(id) {
  const { fs, db } = await firestore();
  await fs.deleteDoc(fs.doc(db, 'comments', id));
}
