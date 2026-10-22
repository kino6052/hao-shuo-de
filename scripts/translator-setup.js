#!/usr/bin/env node
// One run turns what the Firebase console gave into a working translator setup (TRANSLATOR_PLAN.md S0a), so no key is ever
// typed into a source file or into chat. Modelled on the phone app's phone-setup.ts.
//
//   node scripts/translator-setup.js <config-file> <service-account.json>
//
// <config-file> holds the web app's `firebaseConfig = { ... }` snippet (Project settings > Your apps > Web app), pasted into
// any text file; its apiKey, authDomain, projectId and appId go into src/lib/auth-config.js (a web config is public: it
// names the project, and the rules decide who may do what). The service-account key (Project settings > Service accounts >
// Generate new private key) is copied to %USERPROFILE%\.haoshuode-translator\service-account.json, never into the repo, and
// the script refuses a key that git already tracks. It ends with a smoke test: the key writes, reads and deletes one
// throwaway Firestore document, so a bad key or a Firestore not switched on shows here, not at the first request.
// `claude setup-token` stays apart: it is a login, saved with `node scripts/translator-daemon.js set-token`.

import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseFirebaseConfig, serviceAccountProblems, withFirebaseConfig } from '../src/lib/translator/setup.js';
import { homeFile, isInside, translatorHome } from '../src/lib/translator/home.js';
import { connectFirestore } from '../src/lib/translator/firestore-store.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const AUTH_CONFIG = resolve(ROOT, 'src/lib/auth-config.js');

const fail = (message) => {
  console.error(`Not set up: ${message}.`);
  process.exit(1);
};

const [configFile, keyFile] = process.argv.slice(2);
if (!configFile || !keyFile) fail('usage: node scripts/translator-setup.js <config-file> <service-account.json>');

let config;
try {
  config = parseFirebaseConfig(readFileSync(configFile, 'utf8'));
} catch (e) {
  fail(e.code === 'ENOENT' ? `there is no file ${configFile}` : e.message);
}

let key;
try {
  key = JSON.parse(readFileSync(keyFile, 'utf8'));
} catch (e) {
  fail(e.code === 'ENOENT' ? `there is no file ${keyFile}` : `${keyFile} is not JSON`);
}
const problems = serviceAccountProblems(key, config.projectId);
if (problems.length) fail(`the service-account key: ${problems.join('; ')}`);

// A key git tracks is already in the history: copying it would not help, it has to be replaced.
const keyPath = resolve(keyFile);
if (isInside(keyPath, ROOT) && spawnSync('git', ['ls-files', '--error-unmatch', relative(ROOT, keyPath)], { cwd: ROOT }).status === 0) {
  fail(`git tracks ${relative(ROOT, keyPath)}, so the key is in the history; delete that key in the console (Service accounts > Manage keys), make a new one and keep it out of the repo`);
}
const target = homeFile('serviceAccount');
if (isInside(target, ROOT)) fail(`the translator's folder ${translatorHome()} is inside the repo; set HAOSHUODE_TRANSLATOR_HOME to a folder outside it`);

// The smoke test comes first, so a key that does not work changes nothing.
process.stdout.write(`Checking the key against Firestore (project ${config.projectId}) ... `);
const store = await connectFirestore({ serviceAccountPath: keyPath, name: 'translator-setup' });
try {
  if (!(await store.smokeTest())) throw new Error('the document did not come back');
  console.log('it works.');
} catch (e) {
  console.log('it failed.');
  fail(`the key could not write to Firestore (${e.message}); is Firestore switched on (Build > Firestore Database > Create database)?`);
} finally {
  await store.close().catch(() => {});
}

const changed = [];
const before = readFileSync(AUTH_CONFIG, 'utf8');
const after = withFirebaseConfig(before, config);
if (after !== before) {
  writeFileSync(AUTH_CONFIG, after);
  changed.push(relative(ROOT, AUTH_CONFIG).replaceAll('\\', '/'));
}
mkdirSync(translatorHome(), { recursive: true });
if (resolve(keyFile) !== resolve(target)) {
  copyFileSync(keyFile, target);
  changed.push(target);
}

console.log(changed.length ? `Changed:\n${changed.map((f) => `- ${f}`).join('\n')}` : 'Nothing changed: it was set up already.');
if (isInside(keyPath, ROOT) && existsSync(keyPath) && keyPath !== target) console.log(`Delete ${relative(ROOT, keyPath)} now: the copy in ${translatorHome()} is the one used.`);
