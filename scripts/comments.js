#!/usr/bin/env node
// Readers' comments from the command line (COMMENTS_PLAN.md C2), for a Claude session to work from.
//
//   npm run comments -- export [--out FILE] [--emulator]
//   npm run comments -- list [--page ID] [--emulator]
//
// export writes every comment, newest first, as JSON (src/lib/comments/comment.js exportOf) to
// review/comments/<date>.json, which git ignores, or to --out; list prints them, one block per comment. Both read
// Firestore as the admin with the service-account key setup put in %USERPROFILE%\.haoshuode-translator (the
// translator's); --emulator reads the Firestore emulator (project demo-translator) instead.

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { exportOf } from '../src/lib/comments/comment.js';
import { homeFile } from '../src/lib/translator/home.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');
const { values, positionals } = parseArgs({
  allowPositionals: true,
  options: { out: { type: 'string' }, page: { type: 'string' }, emulator: { type: 'boolean' } },
});
const [command] = positionals;
if (command !== 'export' && command !== 'list') {
  console.error('usage: npm run comments -- export [--out FILE] [--emulator] | list [--page ID] [--emulator]');
  process.exit(1);
}

// The Admin SDK reads past the rules; cert() is handed the key's path and reads it itself.
async function database() {
  const { initializeApp, cert } = await import('firebase-admin/app');
  const { getFirestore } = await import('firebase-admin/firestore');
  if (values.emulator) {
    process.env.FIRESTORE_EMULATOR_HOST ??= '127.0.0.1:8085';
    return getFirestore(initializeApp({ projectId: 'demo-translator' }, 'comments'));
  }
  return getFirestore(initializeApp({ credential: cert(homeFile('serviceAccount')) }, 'comments'));
}

const db = await database();
const snap = await db.collection('comments').get();
const comments = snap.docs.map((d) => ({ id: d.id, ...d.data(), createdAt: d.get('createdAt')?.toMillis?.() }));
const shown = exportOf(values.page ? comments.filter((c) => c.page === values.page) : comments);
const counted = `${shown.count} comment${shown.count === 1 ? '' : 's'}`;

if (command === 'export') {
  const file = resolve(values.out ?? join(ROOT, 'review', 'comments', `${shown.exportedAt.slice(0, 10)}.json`));
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, `${JSON.stringify(shown, null, 2)}\n`);
  const near = relative(process.cwd(), file);
  console.log(`${counted} written to ${near.startsWith('..') ? file : near}`);
} else {
  for (const c of shown.comments) {
    console.log(`${c.createdAt ?? '?'}  ${c.page} / ${c.part}  ${c.lang}  ${c.signedIn ? 'signed in' : 'anonymous'}${c.done ? '  done' : ''}  (${c.id})`);
    if (c.quote) console.log(`  on: ${c.quote}`);
    console.log(`  ${c.text.replace(/\n/g, '\n  ')}`);
    console.log('');
  }
  console.log(counted);
}
process.exit(0);
