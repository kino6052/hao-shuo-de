// TRANSLATOR_PLAN.md S0a: the config snippet into auth-config.js, and the service-account key checked before it is copied.

import { describe, expect, test } from 'bun:test';
import { parseFirebaseConfig, serviceAccountProblems, withFirebaseConfig } from './setup.js';

const SNIPPET = `// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaFake-key_123",
  authDomain: "hao-shuo-de.firebaseapp.com",
  projectId: "hao-shuo-de",
  storageBucket: "hao-shuo-de.firebasestorage.app",
  messagingSenderId: "42",
  appId: "1:42:web:abc"
};`;

describe('the web config', () => {
  test('the console snippet and plain JSON give the same four keys', () => {
    const want = { apiKey: 'AIzaFake-key_123', authDomain: 'hao-shuo-de.firebaseapp.com', projectId: 'hao-shuo-de', appId: '1:42:web:abc' };
    expect(parseFirebaseConfig(SNIPPET)).toEqual(want);
    expect(parseFirebaseConfig(JSON.stringify(want))).toEqual(want);
    expect(() => parseFirebaseConfig('const firebaseConfig = { apiKey: "x" };')).toThrow('no authDomain');
  });

  test('auth-config.js gets the four keys and keeps everything else', () => {
    const source = '// a comment\nexport const FIREBASE_CONFIG = {\n  apiKey: "",\n  authDomain: "",\n  projectId: "",\n  appId: "",\n};\n\nexport const SIGN_IN_PROVIDERS = ["google"];\n';
    const out = withFirebaseConfig(source, parseFirebaseConfig(SNIPPET));
    expect(out).toBe('// a comment\nexport const FIREBASE_CONFIG = {\n  apiKey: "AIzaFake-key_123",\n  authDomain: "hao-shuo-de.firebaseapp.com",\n  projectId: "hao-shuo-de",\n  appId: "1:42:web:abc",\n};\n\nexport const SIGN_IN_PROVIDERS = ["google"];\n');
    expect(() => withFirebaseConfig('nothing here', {})).toThrow('no FIREBASE_CONFIG');
  });
});

describe('the service-account key', () => {
  const key = { type: 'service_account', project_id: 'hao-shuo-de', client_email: 'a@b.iam.gserviceaccount.com', private_key: '-----BEGIN PRIVATE KEY-----' };
  test('a good key has no problems; another project or another kind of file does', () => {
    expect(serviceAccountProblems(key, 'hao-shuo-de')).toEqual([]);
    expect(serviceAccountProblems(key, 'claude-phone-c25bc')).toEqual(['it is for the project "hao-shuo-de", but the web config is for "claude-phone-c25bc"']);
    expect(serviceAccountProblems({ apiKey: 'x' }, 'p')[0]).toContain('not a service-account key');
    expect(serviceAccountProblems(null)).toEqual(['the file is not JSON']);
  });
});
