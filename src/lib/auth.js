// Who is signed in, and whether they are a paying member (no ads for members).
// Firebase Authentication is loaded only when auth-config.js has an apiKey, and in a separate chunk.
// The book signs people in only with SIGN_IN_EVERYWHERE; the translator page (src/translator/) always does.
import { useEffect, useState } from 'preact/hooks';
import { FIREBASE_CONFIG, SIGN_IN_EVERYWHERE } from './auth-config.js';
import { setTrackedUser } from './tracking.js';

// `npm run dev -- --mode emulator` (.env.emulator sets VITE_FIREBASE_EMULATOR) points sign-in and Firestore at the local
// emulators and a demo project, to try the translator page with no real project (`firebase emulators:start --only auth,firestore`).
export const firebaseEmulator = import.meta.env?.VITE_FIREBASE_EMULATOR || '';
const CONFIG = firebaseEmulator ? { apiKey: 'demo-key', authDomain: 'demo-translator.firebaseapp.com', projectId: 'demo-translator', appId: 'demo-app' } : FIREBASE_CONFIG;

export const firebaseConfigured = Boolean(CONFIG.apiKey);
/** The book's own sign-in: the sidebar box and the members' no-ads. */
export const authConfigured = firebaseConfigured && SIGN_IN_EVERYWHERE;

// status: 'loading' (asking Firebase), 'out', or 'in'.
let state = { status: authConfigured ? 'loading' : 'out', user: null, member: false, error: null };
const listeners = new Set();
const set = (next) => { state = { ...state, ...next }; listeners.forEach((fn) => fn()); };

export const getAuthState = () => state;

export function useAuth() {
  const [, setTick] = useState(0);
  useEffect(() => {
    const fn = () => setTick((t) => t + 1);
    listeners.add(fn);
    fn(); // a change between the first render and now would otherwise be missed
    return () => listeners.delete(fn);
  }, []);
  return state;
}

let sdk = null;
function load() {
  sdk ??= (async () => {
    const { initializeApp } = await import('firebase/app');
    const auth = await import('firebase/auth');
    const app = initializeApp(CONFIG);
    const handle = auth.getAuth(app);
    if (firebaseEmulator) auth.connectAuthEmulator(handle, `http://${firebaseEmulator}:9099`, { disableWarnings: true });
    return { auth, app, handle };
  })();
  return sdk;
}

/** The Firebase app, for a page that reads Firestore as the signed-in person (the translator page). */
export const firebaseApp = () => load().then(({ app }) => app);

// page: true for a page that signs in on its own (the translator), whatever SIGN_IN_EVERYWHERE says
export function startAuth({ page = false } = {}) {
  if (!(page ? firebaseConfigured : authConfigured)) return;
  if (state.status !== 'loading') set({ status: 'loading' });
  load()
    .then(({ auth, handle }) => {
      auth.onAuthStateChanged(handle, async (u) => {
        // the quiet account a comment is sent with (commentAccount) is no one the page shows as signed in
        if (!u || u.isAnonymous) {
          set({ status: 'out', user: null, member: false });
          setTrackedUser(null);
          return;
        }
        const token = await u.getIdTokenResult();
        set({
          status: 'in',
          user: { uid: u.uid, name: u.displayName || u.email || '', photo: u.photoURL, email: u.email || '', emailVerified: u.emailVerified === true },
          member: token.claims.member === true,
          error: null,
        });
        setTrackedUser(u.uid);
      });
    })
    .catch(() => set({ status: 'out' }));
}

function makeProvider(auth, name) {
  switch (name) {
    case 'google': return new auth.GoogleAuthProvider();
    case 'github': return new auth.GithubAuthProvider();
    case 'facebook': return new auth.FacebookAuthProvider();
    case 'apple': return new auth.OAuthProvider('apple.com');
    case 'microsoft': return new auth.OAuthProvider('microsoft.com');
    default: throw new Error(`unknown sign-in provider: ${name}`);
  }
}

export async function signIn(name) {
  if (state.error) set({ error: null }); // a new try clears the last one's message
  try {
    const { auth, handle } = await load();
    // the emulator's made-up accounts by redirect, so a browser that opens pop-ups as tabs can try the page too
    await (firebaseEmulator ? auth.signInWithRedirect : auth.signInWithPopup)(handle, makeProvider(auth, name));
  } catch (e) {
    // Closing the pop-up is not an error worth showing.
    if (e?.code !== 'auth/popup-closed-by-user' && e?.code !== 'auth/cancelled-popup-request') {
      set({ error: e?.code || 'error' });
    }
  }
}

// The account a reader's comment is sent as (COMMENTS_PLAN.md CM7, CM11): the signed-in one, else a quiet anonymous
// account, made now and never on page load. It works whatever SIGN_IN_EVERYWHERE says, and the page keeps showing the
// reader as signed out. -> { uid, signedIn }, or { error: 'off' } when Firebase or the console's Anonymous sign-in is
// not switched on, or { error: 'failed' }
export async function commentAccount() {
  if (!firebaseConfigured) return { error: 'off' };
  try {
    const { auth, handle } = await load();
    await handle.authStateReady();
    const u = handle.currentUser ?? (await auth.signInAnonymously(handle)).user;
    return { uid: u.uid, signedIn: !u.isAnonymous };
  } catch (e) {
    return { error: e?.code === 'auth/operation-not-allowed' || e?.code === 'auth/admin-restricted-operation' ? 'off' : 'failed' };
  }
}

export async function signOut() {
  const { auth, handle } = await load();
  await auth.signOut(handle);
}
