#!/usr/bin/env node
// One word at a time: look a word up, or change it everywhere it's used.
// Every change is a dry run (a per-file summary and notes) until --write;
// --diff also prints the changed lines. For several changes, put them in a
// refactor list and use `npm run refactor` (scripts/refactor.js).
//
//   npm run word -- show <id | term | hanzi>
//   npm run word -- add <id> <hanzi> [--category <leaf>]
//   npm run word -- split <id> <part> <part>... [--light <part>,...]
//   npm run word -- replace <id> --with "<form>" [--hanzi 部分=分,...] [--keep]
//   npm run word -- rename <id> <new id>
//   npm run word -- move <id> <lesson/module> [--sense <key>]
//   npm run word -- remove <id>
//
// After --write it rebuilds the data indexes, the dictionary pages and
// BOOK_PLAN.md §4b; run
// `npm run check` to see the result.

import { Workspace, applyOps, summary, cards, idSyllables, ROOT } from './refactor-lib.js';
import { wordRefIds, toneless } from '../src/lib/word-refs.js';
import { spawnSync } from 'child_process';

const argv = process.argv.slice(2);
const flags = {};
const pos = [];
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith('--')) {
    const k = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) flags[k] = true;
    else (flags[k] = next), i++;
  } else pos.push(a);
}
const [cmd, ...args] = pos;

function usage() {
  console.error(
    'usage: npm run word -- show <id|term|hanzi> | add <id> <hanzi> | split <id> <parts...> | replace <id> --with "<form>" | rename <id> <to> | move <id> <lesson/module> | remove <id>  [--write] [--diff]',
  );
  process.exit(1);
}

// -- show ------------------------------------------------------------------------

function resolveWord(ws, q) {
  const ids = ws.wordIds();
  if (ids.includes(q)) return q;
  const hits = ids.filter((id) => {
    const w = ws.word(id);
    return w.term === q || toneless(w.term) === toneless(q) || w.hanzi === q || Object.values(w.senses ?? {}).some((s) => s.hanzi === q);
  });
  if (hits.length === 1) return hits[0];
  if (hits.length > 1) {
    console.error(`"${q}" could be: ${hits.join(', ')}`);
    process.exit(1);
  }
  console.error(`no word "${q}"`);
  process.exit(1);
}

function show(ws, q) {
  const id = resolveWord(ws, q);
  const w = ws.word(id);
  const line = (label, text) => console.log(`${label.padEnd(12)}${text}`);
  line('word', `${id}  ${w.term}  ${w.hanzi}  (${w.pos.eng})`);
  line('definition', w.definition.eng);
  line('necessity', `${w.necessity.index}: ${w.necessity.eng}`);
  for (const [k, s] of Object.entries(w.senses ?? {})) line(`sense ${k}`, `${s.hanzi} ${s.eng}: ${s.compounds.join(', ')}`);

  const cs = cards(ws).filter((c) => c.word === id);
  line('cards', cs.length ? cs.map((c) => `${c.lesson}/${c.module}${c.sense ? ` (${c.sense})` : ''}`).join(', ') : '(none)');

  const uses = [];
  for (const path of ws.files()) {
    if (path === ws.wordPath(id) || path.startsWith('src/data/composites/')) continue;
    const n = wordRefIds(ws.get(path)).filter((x) => x === id).length;
    if (n) uses.push([path, n]);
  }
  line('uses', `${uses.reduce((a, [, n]) => a + n, 0)} in ${uses.length} file(s)`);
  for (const [p, n] of uses.sort((a, b) => b[1] - a[1])) console.log(`              ${String(n).padStart(4)}  ${p}`);

  const comps = ws.composites().filter(({ entry }) => (entry.hsd ?? []).some((f) => wordRefIds(f).includes(id)));
  line('composites', `${comps.length}: ${comps.slice(0, 15).map(({ entry }) => entry.zh).join(' ')}${comps.length > 15 ? ' ...' : ''}`);

  const cov = [];
  for (const path of ws.files('src/data/coverage/')) {
    if (/\/(index|about)\.ts$/.test(path)) continue;
    const g = ws.data(path);
    for (const item of g.items) if (item.words.includes(id)) cov.push(`${g.key}:${item.key}`);
  }
  line('coverage', cov.join(', ') || '(none)');

  let leaf = null;
  const walk = (cs2, path) => cs2.forEach((c) => {
    if ((c.wordIds ?? []).includes(id)) leaf = [...path, c.key].join(' > ');
    walk(c.children ?? [], [...path, c.key]);
  });
  walk(ws.data('src/data/maps/categories.ts'), []);
  line('category', leaf ?? '(none)');
  for (const kind of ['antonyms', 'synonyms']) {
    const r = ws.data(`src/data/maps/${kind}.ts`);
    const pairs = r.pairs.filter((p) => p.includes(id)).map((p) => p.find((x) => x !== id));
    const phr = r.phrases[id] ?? [];
    if (pairs.length || phr.length) line(kind, [...pairs, ...phr].join(', '));
  }

  // sound neighbours: words sharing a toneless syllable with this one
  const syl = new Set(idSyllables(id).map((s) => s.replace(/[1-5]$/, '')));
  const near = ws.wordIds().filter((o) => o !== id && idSyllables(o).some((s) => syl.has(s.replace(/[1-5]$/, ''))));
  line('sounds like', near.map((o) => `${ws.word(o).term} ${ws.word(o).hanzi}`).join(', ') || '(none)');
}

// -- ops ------------------------------------------------------------------------------

function opFromArgs() {
  const list = (s) => (typeof s === 'string' ? s.split(',').map((x) => x.trim()).filter(Boolean) : []);
  switch (cmd) {
    case 'add':
      if (args.length < 2) usage();
      return { op: 'add', id: args[0], hanzi: args[1], ...(flags.category ? { category: flags.category } : {}) };
    case 'split':
      if (args.length < 3) usage();
      return { op: 'split', id: args[0], into: args.slice(1), light: list(flags.light) };
    case 'replace': {
      if (!args[0] || typeof flags.with !== 'string') usage();
      const hanzi = Object.fromEntries(list(flags.hanzi).map((p) => p.split('=')));
      return { op: 'replace', id: args[0], with: flags.with, hanzi, ...(flags.keep ? { keep: true } : {}) };
    }
    case 'rename':
      if (args.length < 2) usage();
      return { op: 'rename', id: args[0], to: args[1] };
    case 'move':
      if (args.length < 2) usage();
      return { op: 'move', id: args[0], to: args[1], ...(flags.sense ? { sense: flags.sense } : {}) };
    case 'remove':
      if (args.length < 1) usage();
      return { op: 'remove', id: args[0] };
    default:
      return usage();
  }
}

// Runs the ops, prints the dry run, and writes when asked. Exported for refactor.js.
export function run(ops, { write = false, diff = false, title = '' } = {}) {
  const ws = new Workspace();
  applyOps(ws, ops);
  console.log(`${title}${write ? '' : ' (dry run -- add --write to apply)'}\n`);
  console.log(summary(ws, { diff }));
  if (!write) return;
  ws.write();
  for (const script of ['build-data.js', 'generate-dictionary.js', 'generate-plan-4b.js']) {
    spawnSync(process.execPath, [`${ROOT}/scripts/${script}`], { stdio: 'inherit' });
  }
  console.log('\nWritten. Now run: npm run check');
}

if (process.argv[1]?.endsWith('word.js')) {
  if (!cmd) usage();
  try {
    if (cmd === 'show') {
      if (!args[0]) usage();
      show(new Workspace(), args[0]);
    } else {
      const op = opFromArgs();
      run([op], { write: !!flags.write, diff: !!flags.diff, title: `word ${cmd} ${args.join(' ')}` });
    }
  } catch (e) {
    console.error(`word: ${e.message}`);
    process.exit(1);
  }
}
