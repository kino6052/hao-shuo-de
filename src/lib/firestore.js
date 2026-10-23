// Firestore as the signed-in (or anonymous) person, loaded once and in its own chunk with the SDK: the translator page
// (src/translator/client.js) and the readers' comments (src/lib/comments/client.js). The rules (firestore.rules) decide
// what each call may do. With `npm run dev -- --mode emulator` it talks to the local emulator.

import { firebaseApp, firebaseEmulator } from './auth.js';

let sdk = null;

// -> { fs, db }: the SDK's functions and the database
export function firestore() {
  sdk ??= (async () => {
    const fs = await import('firebase/firestore');
    const db = fs.getFirestore(await firebaseApp());
    if (firebaseEmulator) fs.connectFirestoreEmulator(db, firebaseEmulator, 8085);
    return { fs, db };
  })();
  return sdk;
}

// a Firestore time in ms; null for a moment while a new document's server time is on its way
export const millis = (t) => (t?.toMillis ? t.toMillis() : typeof t === 'number' ? t : null);
