#!/usr/bin/env node
// The online translator with no real Firebase project (TRANSLATOR_PLAN.md S9, tried locally): the daemon's logic runs
// against the Firestore emulator, and the page signs in on the Auth emulator.
//
//   firebase emulators:start --only auth,firestore --project demo-translator     (firebase.json; needs Java)
//   node scripts/translator-emulator.js --allow you@example.com [--owner me@example.com] [--real]
//   npm run dev -- --mode emulator, then open /translator/ and sign in with the emulator's made-up Google account
//
// It puts the emails on the list and listens for requests as the daemon does. Without --real the session is a stand-in:
// it answers every text with the same short translation, which then goes through the real checks, so the page, the rules
// and the daemon are tried without Claude. With --real each request runs the real pipeline, as the daemon does.

import { parseArgs } from 'node:util';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createDaemon } from '../src/lib/translator/daemon.js';
import { createFirestoreStore } from '../src/lib/translator/firestore-store.js';
import { ANSWER_SCHEMA, BLIND_SCHEMA } from '../src/lib/translator/output.js';
import { translate } from '../src/lib/translator/pipeline.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const PROJECT = 'demo-translator';
const { values } = parseArgs({ options: { allow: { type: 'string', multiple: true, default: [] }, owner: { type: 'string', multiple: true, default: [] }, real: { type: 'boolean' }, model: { type: 'string', default: 'opus' } } });

process.env.FIRESTORE_EMULATOR_HOST ??= '127.0.0.1:8085';
const { initializeApp } = await import('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = await import('firebase-admin/firestore');
const db = getFirestore(initializeApp({ projectId: PROJECT }, 'translator-emulator'));
const log = (line) => console.log(`${new Date().toISOString().slice(11, 19)} ${line}`);
const store = createFirestoreStore(db, { Timestamp, FieldValue, log });

for (const email of values.allow) log(`on the list: ${await store.allow(email, { note: 'emulator' })}`);
for (const email of values.owner) log(`on the list as the owner: ${await store.allow(email, { note: 'emulator', owner: true })}`);

// The stand-in session: the same answer for every text, and a reader and judge that agree with it.
const STAND_IN = {
  answer: {
    sketch: [{ id: 'i1', idea: 'I eat', needed: true, links: '' }],
    sentences: [{ pinyin: 'Wǒ chī fàn.', english: 'I eat.', literally: 'I eat food.', reading: '1', source: 'built from the grammar', ideas: ['i1'] }],
    cast: [],
    structures: [{ idea: 'i1', pattern: 'subject-predicate', lesson: '' }],
    gaps: [],
    notes: 'A stand-in answer (scripts/translator-emulator.js): Claude was not run, so this is not a translation of your text.',
  },
  blind: { sentences: [{ english: 'I eat.' }], whole: 'Someone eats.', unsure: '' },
  judge: { ideas: [{ id: 'i1', verdict: 'kept', note: '' }], added: [] },
};
const standIn = async (prompt, { schema, onStep }) => {
  onStep?.('Looking up words');
  await new Promise((r) => setTimeout(r, 1500));
  return { answer: schema === ANSWER_SCHEMA ? STAND_IN.answer : schema === BLIND_SCHEMA ? STAND_IN.blind : STAND_IN.judge, cost: 0, tools: [], denied: [] };
};

const { openKb } = await import('./kb.js');
const kb = await openKb();
let realRun = null;
if (values.real) {
  const { findClaude, sessionRunner } = await import('../src/lib/translator/claude.js');
  const { CLAUDE_TOKEN_ENV, readClaudeToken } = await import('../src/lib/translator/home.js');
  const token = readClaudeToken();
  realRun = () => sessionRunner({ claude: findClaude(), cwd: ROOT, model: values.model, effort: 'high', env: { ...process.env, ...(token && { [CLAUDE_TOKEN_ENV]: token }) } });
}

const runSession = (request, { onStep, signal }) => translate(request, { kb, run: realRun ? realRun() : standIn, onStep, signal, model: values.real ? values.model : 'stand-in', log });
const daemon = createDaemon({ store, runSession, timeoutMs: 20 * 60_000, log });
daemon.start();
log(`listening on the emulator (project ${PROJECT}, ${values.real ? 'real sessions' : 'stand-in sessions'}); Ctrl+C stops`);
process.on('SIGINT', async () => {
  await daemon.stop();
  process.exit(0);
});
