// Who is signed in, and whether they are a paying member (no ads for members).
// Firebase Authentication is loaded only when auth-config.js has an apiKey, and in a separate chunk.
import { useEffect, useState } from 'preact/hooks';
import { FIREBASE_CONFIG } from './auth-config.js';
import { setTrackedUser } from './tracking.js';

export const authConfigured = Boolean(FIREBASE_CONFIG.apiKey);

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
    return () => listeners.delete(fn);
  }, []);
  return state;
}

let sdk = null;
function load() {
  sdk ??= (async () => {
    const { initializeApp } = await import('firebase/app');
    const auth = await import('firebase/auth');
    return { auth, handle: auth.getAuth(initializeApp(FIREBASE_CONFIG)) };
  })();
  return sdk;
}

export function startAuth() {
  if (!authConfigured) return;
  load()
    .then(({ auth, handle }) => {
      auth.onAuthStateChanged(handle, async (u) => {
        if (!u) {
          set({ status: 'out', user: null, member: false });
          setTrackedUser(null);
          return;
        }
        const token = await u.getIdTokenResult();
        set({
          status: 'in',
          user: { uid: u.uid, name: u.displayName || u.email || '', photo: u.photoURL },
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
  try {
    const { auth, handle } = await load();
    await auth.signInWithPopup(handle, makeProvider(auth, name));
  } catch (e) {
    // Closing the pop-up is not an error worth showing.
    if (e?.code !== 'auth/popup-closed-by-user' && e?.code !== 'auth/cancelled-popup-request') {
      set({ error: e?.code || 'error' });
    }
  }
}

export async function signOut() {
  const { auth, handle } = await load();
  await auth.signOut(handle);
}
