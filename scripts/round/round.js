#!/usr/bin/env node
// Runs one yardstick round, from picking the missing words to writing the review batch. It is KB_PLAN.md Phase 9; the
// specs and their checks are in lib.js.
//
//   node scripts/round/round.js pick [--count N] [--skip N] [--specs DIR] [--json]
//        the next Mandarin words the dictionary has no entry for, most common first, with the frequency list's hint;
//        words already written as specs in DIR are left out
//   node scripts/round/round.js ref [--out FILE] [--composites FILE]
//        what a spec writer needs: the core words, the pages (leaf topics) and the kinds, and sample descriptions;
//        --composites writes every entry the dictionary has (zh, pinyin, English, forms), to search for synonyms
//   node scripts/round/round.js check FILE...
//        what is wrong with each spec (exit 1 when anything is)
//   node scripts/round/round.js make --name K16 --batch 23 --about "..." [--chunk 100] [--write] FILE...
//        checks every spec, then writes refactors/<name>.ts and review/proposals/batch-<batch>.mjs; with --chunk, one list
//        and one review batch per N entries (K16, K17 ... and 23, 24 ..., the author reviews 100 at a time); apply each
//        with npm run refactor -- refactors/<name>.ts --write
//
// It loads the dictionary once (the kb), so checking a few hundred specs takes seconds.

import { readFileSync, readdirSync, writeFileSync, existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { openKb } from '../kb.js';
import { FREQ_CSV } from '../frequency-list.js';
import { explainFailure } from '../../src/lib/grammar/parser.js';
import { tagNet } from '../../src/lib/tag-net.js';
import { wordEntries } from '../../src/lib/kb/word-entries.js';
import { replaceWordRefs, refTerm } from '../../src/lib/word-refs.js';
import topics from '../../src/data/maps/topics.ts';
import kinds from '../../src/data/maps/kinds.ts';
import { specProblems, entryOf, refactorText, batchText, sameForms } from './lib.js';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '../..');
const args = process.argv.slice(2);
const cmd = args.shift();
const option = (name, fallback) => {
  const i = args.indexOf(name);
  if (i < 0) return fallback;
  const [, value] = args.splice(i, 2);
  return value;
};
const flag = (name) => {
  const i = args.indexOf(name);
  if (i >= 0) args.splice(i, 1);
  return i >= 0;
};
const today = new Date().toISOString().slice(0, 10);

const readSpecs = (files) =>
  files.flatMap((f) => {
    const list = JSON.parse(readFileSync(resolve(f), 'utf8'));
    if (!Array.isArray(list)) throw new Error(`${f}: a spec file is a JSON list`);
    return list.map((s) => ({ ...s, file: f }));
  });
const specFiles = (dir) => (dir && existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith('.json')).map((f) => resolve(dir, f)) : []);

// the frequency list's own simple definition (简单话) and part of speech, a hint for the spec writer
function csvHints() {
  if (!FREQ_CSV) return new Map();
  const cells = (line) => {
    const out = [];
    let cur = '';
    let q = false;
    for (const ch of line) {
      if (ch === '"') q = !q;
      else if (ch === ',' && !q) out.push(cur), (cur = '');
      else cur += ch;
    }
    return [...out, cur];
  };
  const hints = new Map();
  for (const line of readFileSync(FREQ_CSV, 'utf8').split(/\r?\n/).slice(1)) {
    const r = cells(line);
    const zh = (r[1] ?? '').replace(/\d+$/, '');
    if (zh && !hints.has(zh)) hints.set(zh, { pos: r[3], simple: r[4] });
  }
  return hints;
}

async function context() {
  const kb = await openKb({ memo: true });
  const words = kb.source.words;
  // what the dictionary says already: its composites, and the core words and their senses no composite repeats (the yardsticks count both)
  const have = new Set(wordEntries({ words, composites: kb.source.composites }).entries.map((e) => e.zh));
  const parse = (refs) => {
    const r = kb.parser.parse(refs, { maxTrees: 1, forms: true });
    return { ok: r.ok, why: r.ok ? '' : r.problems.length ? r.problems[0] : explainFailure(r, words).split('; a pattern could continue')[0] };
  };
  return { kb, words, have, parse, topicNet: tagNet(topics), kindNet: tagNet(kinds) };
}

function check(specs, ctx) {
  const seen = new Set();
  return specs.map((s) => {
    const { problems, refs } = specProblems(s, ctx);
    if (seen.has(s.zh)) problems.push('written twice in this round');
    seen.add(s.zh);
    return { spec: s, problems, refs };
  });
}

async function main() {
  if (cmd === 'pick') {
    const count = Number(option('--count', 100));
    const skip = Number(option('--skip', 0));
    const specced = new Set(readSpecs(specFiles(option('--specs'))).map((s) => s.zh));
    const json = flag('--json');
    const ctx = await context();
    const list = JSON.parse(readFileSync(resolve(ROOT, 'kb/yardsticks/mandarin-frequency.json'), 'utf8'));
    const hints = csvHints();
    const missing = list.filter((w) => !ctx.have.has(w.zh) && !specced.has(w.zh)).slice(skip, skip + count);
    const rows = missing.map((w) => ({ rank: w.rank, zh: w.zh, py: w.py, ...hints.get(w.zh) }));
    if (json) console.log(JSON.stringify(rows, null, 1));
    else for (const r of rows) console.log(`${r.rank}\t${r.zh}\t${r.py}\t${r.pos ?? ''}\t${r.simple ?? ''}`);
    return 0;
  }

  if (cmd === 'ref') {
    const out = option('--out');
    const all = option('--composites');
    const ctx = await context();
    const { words } = ctx;
    const plain = (t) => replaceWordRefs(String(t ?? ''), (id, kind) => refTerm(words[id]?.term ?? id, kind));
    const lines = ['# The core words (write forms with these only; X, Y, Z stand for a thing, "quotes" for a name or sound)', ''];
    for (const w of Object.values(words).sort((a, b) => a.term.localeCompare(b.term))) {
      lines.push(`${w.term} ${w.hanzi} (${w.pos?.eng ?? ''}): ${plain(w.definition?.eng)}${w.necessity?.eng ? ` -- ${plain(w.necessity.eng)}` : ''}`);
      // a sense is written with its own hanzi (xīn-de as 新的), and the checker then reads the word in that sense
      for (const s of Object.values(w.senses ?? {})) lines.push(`  ${w.term} written ${s.hanzi}: ${s.eng}`);
    }
    const net = tagNet(topics);
    lines.push('', '# Pages: the leaf topics (`topics`, one id; the path above it in brackets)', '');
    for (const t of topics) if (!net.children(t.id).length) lines.push(`${t.id}: ${t.title.eng} [${net.above(t.id).join(' < ')}]`);
    const kn = tagNet(kinds);
    lines.push('', '# Kinds (`isA`, the most specific id that fits; the kinds above it in brackets)', '');
    for (const t of kinds) lines.push(`${t.id}: ${t.title.eng} [${kn.above(t.id).join(' < ')}]`);
    lines.push('', '# Sample descriptions from the dictionary (zh, en: the form -- literal)', '');
    const samples = ctx.kb.source.composites.filter((c) => c.fit === 'plain' && c.hsd && c.literal).filter((_, i) => i % 23 === 0).slice(0, 80);
    for (const c of samples) lines.push(`${c.zh} ${c.en}: ${plain(c.hsd)} -- ${c.literal}`);
    const text = lines.join('\n') + '\n';
    if (all) writeFileSync(resolve(all), ctx.kb.source.composites.map((c) => `${c.zh} | ${c.py} | ${c.en} | ${c.fit} | ${c.hsd ? plain(c.hsd) : ''}`).join('\n') + '\n');
    if (out) writeFileSync(resolve(out), text);
    else process.stdout.write(text);
    return 0;
  }

  if (cmd === 'check' || cmd === 'make') {
    const name = option('--name');
    const batch = option('--batch');
    const about = option('--about', '');
    const chunk = Number(option('--chunk', 0));
    const write = flag('--write');
    const files = args.filter((a) => !a.startsWith('--'));
    if (!files.length) throw new Error(`${cmd}: give the spec files`);
    if (cmd === 'make' && (!name || !batch)) throw new Error('make: give --name K<n> and --batch <n>');
    const specs = readSpecs(files);
    const ctx = await context();
    const results = check(specs, ctx);
    const bad = results.filter((r) => r.problems.length);
    for (const r of bad) for (const p of r.problems) console.log(`${r.spec.zh} (${r.spec.file.split(/[\\/]/).pop()}): ${p}`);
    console.log(`${specs.length} spec(s), ${bad.length} with problems, ${specs.length - bad.length} fine`);
    if (cmd === 'check' || bad.length) return bad.length ? 1 : 0;

    let next = Math.max(...ctx.kb.source.composites.map((c) => c.rank)) + 1;
    const entries = results.map((r) => entryOf(r.spec, r.refs, next++));
    const known = new Set([...ctx.have, ...entries.map((e) => e.zh)]);
    const synonyms = {};
    for (const s of specs) {
      const list = (s.synonyms ?? []).filter((z) => z !== s.zh);
      for (const z of list) if (!known.has(z)) console.log(`note: ${s.zh} names synonym ${z}, which has no entry; left out`);
      const ok = list.filter((z) => known.has(z));
      if (ok.length) synonyms[s.zh] = ok;
    }
    const plain = (t) => replaceWordRefs(t, (id, kind) => refTerm(ctx.words[id]?.term ?? id, kind));
    const same = sameForms(entries, ctx.kb.source.composites).filter((g) => !g.zh.some((z) => synonyms[z]?.some((y) => g.zh.includes(y))));
    if (same.length) console.log(`descriptions given by two or more entries and not marked as synonyms (${same.length}):`);
    for (const g of same) console.log(`  ${plain(g.form)}: ${g.zh.join(' ')}`);
    const why = new Map(specs.map((s) => [s.zh, s.why ?? '']));
    // one refactor list and one review batch per chunk: K16, K17 ... and batch 23, 24 ...
    const [, prefix, first] = /^(.*?)(\d+)$/.exec(name) ?? [null, name, null];
    const size = chunk || entries.length;
    const parts = [];
    for (let i = 0; i * size < entries.length; i++) {
      const part = entries.slice(i * size, (i + 1) * size);
      const n = chunk && first ? `${prefix}${Number(first) + i}` : name;
      const b = chunk ? Number(batch) + i : batch;
      const syn = Object.fromEntries(part.filter((e) => synonyms[e.zh]).map((e) => [e.zh, synonyms[e.zh]]));
      parts.push({ name: n, batch: b, part, refactor: refactorText({ name: n, batch: b, entries: part, about, date: today }), proposal: batchText({ name: n, batch: b, entries: part, whyOf: (zh) => why.get(zh), synonyms: syn, date: today }) });
    }
    for (const p of parts) {
      const where = `refactors/${p.name}.ts and review/proposals/batch-${p.batch}.mjs (${p.part.length} entries, ranks ${p.part[0].rank}-${p.part.at(-1).rank})`;
      if (!write) {
        console.log(`dry run: would write ${where}`);
        continue;
      }
      for (const f of [`refactors/${p.name}.ts`, `review/proposals/batch-${p.batch}.mjs`]) if (existsSync(resolve(ROOT, f))) throw new Error(`${f} exists already`);
      writeFileSync(resolve(ROOT, `refactors/${p.name}.ts`), p.refactor);
      writeFileSync(resolve(ROOT, `review/proposals/batch-${p.batch}.mjs`), p.proposal);
      console.log(`written ${where}`);
    }
    if (!write) console.log('--write writes them');
    return 0;
  }

  console.log('usage: node scripts/round/round.js pick|ref|check|make ... (see the header)');
  return 1;
}

main().then(
  (code) => process.exit(code),
  (e) => {
    console.error(`round: ${e.message}`);
    process.exit(1);
  },
);
