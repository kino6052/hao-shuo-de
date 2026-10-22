#!/usr/bin/env node
// Checks the data folders (src/data/) hold together, so a word or composite
// is added, changed or removed by touching its own file and nothing silently
// goes stale:
//
//   1. The generated index files match their folders (scripts/build-data.js).
//   2. Every word file is valid: its id matches its file name, its fields are
//      filled in (a `word add` TODO fails here), its senses are complete.
//   3. The topic and kind nets (maps/topics.ts, kinds.ts) are sound, every
//      entry names real tags, and every core word has a topic (TAGS_PLAN.md).
//   4. Antonym/synonym pairs and phrases, and coverage items, name real words.
//   5. Every composite file is named <toneless pinyin>-<hanzi>.ts.
//   6. Every grammar pattern (src/data/grammar/) is named after its file, covers
//      real coverage items, is taught in a real module, has only known tags
//      (src/lib/grammar-tags.ts), has rules that use only real words, and every
//      example of it parses by that pattern.
//
//   npm run check-data

import { WORDS } from '../src/data/words/index.ts';
import { ENTRIES } from '../src/data/composites/index.ts';
import { GROUPS } from '../src/data/coverage/index.ts';
import TOPICS from '../src/data/maps/topics.ts';
import KINDS from '../src/data/maps/kinds.ts';
import { tagReport, LEAF_MAX, LEAF_MIN } from '../src/lib/tag-net.js';
import { categoricalPages } from '../src/lib/categorical-entries.js';
import ANTONYMS from '../src/data/maps/antonyms.ts';
import SYNONYMS from '../src/data/maps/synonyms.ts';
import CONNECTIONS from '../src/data/maps/connections.ts';
import STRUCTURE from '../src/data/maps/structure.ts';
import PRIMES from '../src/data/maps/primes.ts';
import CONSTRUCTIONS from '../src/data/maps/english-constructions.ts';
import GLOSSARY from '../src/data/maps/translation-glossary.ts';
import { buildData } from './build-data.js';
import { compositeFileName } from './data-files.js';
import { dataFiles } from './build-data.js';
import { wordRefIds } from '../src/lib/word-refs.js';
import { paraphraseProblems, paraphraseCounts, paraphraseStatus, PARAPHRASES_REQUIRED } from '../src/lib/paraphrase.js';
import { kindsProblems, needsBuiltForm, undecidedForms, SPELLED_NEED_BUILT_FORM } from '../src/lib/form-kinds.js';
import { PATTERNS } from '../src/data/grammar/index.ts';
import { tagProblems } from '../src/lib/grammar-tags.ts';
import { createParser, patternsOf } from '../src/lib/grammar/parser.js';
import { pinyinToRefs, pinyinProblems } from '../src/lib/pinyin-refs.js';
import { existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

const errors = [];
const ids = new Set(Object.keys(WORDS));

// 1. indexes
const unitFiles = ENTRIES.filter((e) => e.role).map(compositeFileName);
for (const path of buildData({ check: true, unitFiles })) errors.push(`${path.split('/src/')[1]}: out of date -- run npm run data`);

// 2. word files
const TODO = /\bTODO\b/;
for (const [id, w] of Object.entries(WORDS)) {
  const where = `words/${id}.ts`;
  if (w.id !== id) errors.push(`${where}: word("${w.id}") doesn't match the file name`);
  for (const k of ['term', 'hanzi']) if (!w[k]) errors.push(`${where}: no ${k}`);
  for (const k of ['pos', 'definition']) for (const l of ['eng', 'rus', 'zh']) {
    if (!w[k]?.[l]) errors.push(`${where}: no ${k}.${l}`);
    else if (TODO.test(w[k][l])) errors.push(`${where}: ${k}.${l} is still TODO`);
  }
  if (!w.necessity || ![1, 2, 3, 4, 5].includes(w.necessity.index)) errors.push(`${where}: necessity.index must be 1-5`);
  for (const l of ['eng', 'rus']) {
    if (!w.necessity?.[l]) errors.push(`${where}: no necessity.${l}`);
    else if (TODO.test(w.necessity[l])) errors.push(`${where}: necessity.${l} is still TODO`);
  }
  for (const [key, s] of Object.entries(w.senses ?? {})) {
    const at = `${where} sense "${key}"`;
    if (!s.hanzi) errors.push(`${at}: no hanzi`);
    for (const l of ['eng', 'rus']) {
      if (!s[l]) errors.push(`${at}: no ${l} meaning`);
      if (!s.why?.[l]) errors.push(`${at}: no why.${l}`);
    }
    if (!s.compounds?.length) errors.push(`${at}: no compounds listed`);
    for (const c of s.compounds ?? []) {
      const parts = c.split(' ');
      if (!parts.includes(id)) errors.push(`${at}: compound "${c}" doesn't contain ${id}`);
      for (const p of parts) if (!ids.has(p)) errors.push(`${at}: compound "${c}" names unknown word ${p}`);
    }
  }
  for (const [cls, c] of Object.entries(w.classes ?? {})) {
    const at = `${where} class "${cls}"`;
    if (c === 'main') continue;
    for (const l of ['eng', 'rus']) if (!c?.why?.[l]) errors.push(`${at}: no why.${l}`);
    if (!c?.example || typeof c.example !== 'string') errors.push(`${at}: no example sentence`);
    if (c?.proposed !== undefined && typeof c.proposed !== 'boolean') errors.push(`${at}: proposed must be true or left out`);
  }
  for (const r of wordRefIds(JSON.stringify([w.definition, w.necessity]))) if (!ids.has(r)) errors.push(`${where}: refers to unknown word ${r}`);
  for (const p of paraphraseProblems(id, w, WORDS)) errors.push(`${where}: ${p}`);
}

// 2b. paraphrases: every word says itself without the word, or is marked an atom (K3)
const counts = paraphraseCounts(WORDS);
if (PARAPHRASES_REQUIRED && counts.none) {
  const names = Object.entries(WORDS).filter(([, w]) => paraphraseStatus(w) === 'none').map(([id]) => id);
  errors.push(`${counts.none} word(s) have neither a paraphrase nor an atom mark: ${names.slice(0, 12).join(', ')}${names.length > 12 ? ', ...' : ''}`);
}

// 3. tags (K31): the topic and kind nets are sound, every entry names real tags, every core word has a topic
const tagCheck = tagReport({ topics: TOPICS, kinds: KINDS, words: WORDS, composites: ENTRIES });
errors.push(...tagCheck.errors);

// 3b. the categorical dictionary lists only Hao-shuo-de words: a core word, or a composite described with core words only.
// A composite the language says another way or leaves out (fit skip, gap) stays off the page; any other composite that cannot
// be listed is an error.
const listing = categoricalPages(ENTRIES, new Set(Object.values(WORDS).map((w) => w.hanzi)), (id) => WORDS[id]?.term);
const notListed = listing.hidden.filter((h) => h.fit !== 'skip' && h.fit !== 'gap');
if (notListed.length) errors.push(`${notListed.length} composite(s) cannot be listed in the categorical dictionary (not made of core words): ${notListed.slice(0, 8).map((h) => `${h.zh} (${h.reasons[0]})`).join('; ')}${notListed.length > 8 ? '; ...' : ''}`);
const listedForms = [...listing.pages.values()].flat();
if (listedForms.some((e) => !e.forms.length || e.forms.some((f) => f.includes('{{')))) errors.push('the categorical dictionary lists an entry with an unresolved form');

// 4. relations and coverage
for (const [name, r] of [['antonyms', ANTONYMS], ['synonyms', SYNONYMS]]) {
  const seen = new Set();
  for (const [a, b] of r.pairs) {
    for (const w of [a, b]) if (!ids.has(w)) errors.push(`maps/${name}.ts: pair [${a}, ${b}] names unknown word ${w}`);
    const k = [a, b].sort().join(' ');
    if (seen.has(k)) errors.push(`maps/${name}.ts: pair [${a}, ${b}] written twice`);
    seen.add(k);
  }
  for (const [id, forms] of Object.entries(r.phrases)) {
    if (!ids.has(id)) errors.push(`maps/${name}.ts: phrases for unknown word ${id}`);
    for (const ref of wordRefIds(forms.join(' '))) if (!ids.has(ref)) errors.push(`maps/${name}.ts: ${id}'s phrase names unknown word ${ref}`);
  }
}
// structure: every end is a word or a composite, opposite kinds belong to real pairs, no group written twice
{
  const zhs = new Set(ENTRIES.map((e) => e.zh));
  const known = (e) => ids.has(e) || zhs.has(e);
  const KINDS = ['either-or', 'more-or-less', 'other-side', 'undoing', 'by-not'];
  const pairs = new Set(ANTONYMS.pairs.map(([a, b]) => `${a}|${b}`));
  for (const [k, kind] of Object.entries(STRUCTURE.oppositeKinds)) {
    if (!pairs.has(k)) errors.push(`maps/structure.ts: opposite kind for "${k}", which is not a pair of antonyms.ts (in that order)`);
    if (!KINDS.includes(kind)) errors.push(`maps/structure.ts: "${k}" has the unknown opposite kind "${kind}"`);
  }
  const seen = new Set();
  const note = (where, ends, why) => {
    for (const e of ends) if (!known(e)) errors.push(`maps/structure.ts ${where}: "${e}" is neither a word nor a composite`);
    if (!String(why ?? '').trim()) errors.push(`maps/structure.ts ${where}: no why`);
    if (new Set(ends).size !== ends.length) errors.push(`maps/structure.ts ${where}: an end is listed twice`);
    const k = where + ' ' + [...ends].sort().join(' ');
    if (seen.has(k)) errors.push(`maps/structure.ts ${where}: written twice`);
    seen.add(k);
  };
  for (const o of STRUCTURE.opposites ?? []) {
    note(`opposite ${o.a}|${o.b}`, [o.a, o.b], o.why);
    if (!KINDS.includes(o.kind)) errors.push(`maps/structure.ts opposite ${o.a}|${o.b}: unknown kind "${o.kind}"`);
  }
  for (const p of STRUCTURE.parts) note(`part-of ${p.whole}`, [p.whole, ...p.parts], p.why);
  for (const g of STRUCTURE.groups) {
    if (g.members.length < 2) errors.push(`maps/structure.ts ${g.kind} [${g.members}]: needs two or more members`);
    note(`${g.kind} [${g.members.slice(0, 3)}…]`, g.members, g.why);
  }
  for (const f of STRUCTURE.families) note(`family ${f.name}`, Object.values(f.facets).flat(), f.why);
}
// English ways of saying: ids unique, every row matches something, and every pattern and entry it names exists
{
  const patternIds = new Set(PATTERNS.map((p) => p.id));
  // an entry the language leaves out or cannot say yet (fit skip or gap) is no way of saying it
  const said = new Set([...ENTRIES.filter((e) => e.fit !== 'skip' && e.fit !== 'gap').map((e) => e.zh), ...Object.values(WORDS).map((w) => w.hanzi)]);
  const seen = new Set();
  for (const c of CONSTRUCTIONS) {
    const where = `maps/english-constructions.ts ${c.id}`;
    if (seen.has(c.id)) errors.push(`${where}: id written twice`);
    seen.add(c.id);
    if (!String(c.en ?? '').trim() || !c.match?.length) errors.push(`${where}: needs its English and at least one match`);
    if (!c.patterns.length && !c.entries.length) errors.push(`${where}: names no pattern and no entry`);
    for (const p of c.patterns) if (!patternIds.has(p)) errors.push(`${where}: unknown pattern "${p}"`);
    for (const e of c.entries) if (!said.has(e)) errors.push(`${where}: "${e}" is neither a word's hanzi nor a composite Hao-shuo-de says (fit skip and gap are left out)`);
  }
}
// the translator's glossary: each English idea once, a why, a form of dictionary words only, and an entry that exists
{
  const said = new Set([...ENTRIES.map((e) => e.zh), ...Object.values(WORDS).map((w) => w.hanzi)]);
  const seen = new Set();
  for (const g of GLOSSARY) {
    const where = `maps/translation-glossary.ts "${g.en}"`;
    if (g.en !== String(g.en ?? '').trim().toLowerCase() || !g.en) errors.push(`${where}: the English must be lowercase, with no spaces around it`);
    if (seen.has(g.en)) errors.push(`${where}: written twice`);
    seen.add(g.en);
    if (!String(g.why ?? '').trim()) errors.push(`${where}: no why`);
    if (g.zh && !said.has(g.zh)) errors.push(`${where}: "${g.zh}" is neither a word's hanzi nor a composite`);
    const { problems } = pinyinProblems(String(g.form ?? ''), WORDS, { composites: ENTRIES });
    if (!String(g.form ?? '').trim()) errors.push(`${where}: no form`);
    for (const p of problems) errors.push(`${where}: ${p.message}`);
  }
}
// primes: every prime of coverage/atoms.ts is in exactly one family; an alternate is a carrier of its prime, never its own main one
{
  const items = new Map(GROUPS.find((g) => g.key === 'atoms').items.map((i) => [i.key, i]));
  const home = new Map();
  for (const f of PRIMES.families) {
    if (!String(f.why ?? '').trim()) errors.push(`maps/primes.ts ${f.name}: no why`);
    for (const k of f.primes) {
      if (!items.has(k)) errors.push(`maps/primes.ts ${f.name}: "${k}" is not a prime of coverage/atoms.ts`);
      if (home.has(k)) errors.push(`maps/primes.ts: "${k}" is in both "${home.get(k)}" and "${f.name}"`);
      home.set(k, f.name);
    }
  }
  for (const k of items.keys()) if (!home.has(k)) errors.push(`maps/primes.ts: the prime "${k}" is in no family`);
  for (const a of PRIMES.alternates) {
    const carriers = new Set(items.get(a.prime)?.words ?? []);
    if (!items.has(a.prime)) errors.push(`maps/primes.ts alternate: "${a.prime}" is not a prime`);
    if (!String(a.why ?? '').trim()) errors.push(`maps/primes.ts alternate ${a.prime}: no why`);
    for (const id of [...a.main, ...a.alternates]) if (!carriers.has(id)) errors.push(`maps/primes.ts alternate ${a.prime}: ${id} does not carry it in coverage/atoms.ts`);
    if (a.main.some((id) => a.alternates.includes(id))) errors.push(`maps/primes.ts alternate ${a.prime}: a word is both main and alternate`);
  }
}
// connections: two or more known words, a why, no connection written twice
{
  const seen = new Set();
  for (const c of CONNECTIONS) {
    const here = c.words.join(', ');
    for (const w of c.words) if (!ids.has(w)) errors.push(`maps/connections.ts: [${here}] names unknown word ${w}`);
    if (new Set(c.words).size < 2) errors.push(`maps/connections.ts: [${here}] needs two or more different words`);
    if (!String(c.why ?? '').trim()) errors.push(`maps/connections.ts: [${here}] has no why`);
    const k = [...new Set(c.words)].sort().join(' ');
    if (seen.has(k)) errors.push(`maps/connections.ts: [${here}] written twice`);
    seen.add(k);
  }
}
for (const g of GROUPS) for (const item of g.items) {
  for (const w of item.words) if (!ids.has(w)) errors.push(`coverage/${g.key}.ts ${item.key}: unknown word ${w}`);
  for (const ref of wordRefIds(item.forms.join(' '))) if (!ids.has(ref)) errors.push(`coverage/${g.key}.ts ${item.key}: form names unknown word ${ref}`);
}

// 5. composite file names
const files = dataFiles('composites', ['meta.ts']);
ENTRIES.forEach((e, i) => {
  const want = compositeFileName(e);
  if (files[i] !== want) errors.push(`composites/${files[i]}: should be named ${want}`);
});

// 5b. built or spelled (K9): an explicit `kinds` is well formed; the compounds the rule can't decide are counted
let kindsToReview = 0;
const bareSpelled = [];
for (const e of ENTRIES) {
  for (const p of kindsProblems(e)) errors.push(`composites/${compositeFileName(e)}: ${p}`);
  if (undecidedForms(e).length) kindsToReview++;
  if (needsBuiltForm(e)) bareSpelled.push(e.zh);
}
// K23: a spelled form with no built form beside it is hidden vocabulary with nothing to fall back on (a failure since K4)
if (SPELLED_NEED_BUILT_FORM && bareSpelled.length) errors.push(`${bareSpelled.length} composite(s) have a spelled form and no built form (K23): ${bareSpelled.slice(0, 12).join(', ')}${bareSpelled.length > 12 ? ', ...' : ''}`);

// 6. grammar patterns
const patternFiles = dataFiles('grammar');
const coverageItems = new Set(GROUPS.flatMap((g) => g.items.map((i) => `${g.key}:${i.key}`)));
const LESSONS = fileURLToPath(new URL('../src/content/lessons/', import.meta.url));
const parser = createParser({ patterns: PATTERNS, words: WORDS, composites: ENTRIES });
for (const e of parser.errors) errors.push(`grammar/: ${e}`);
PATTERNS.forEach((p, i) => {
  const where = `grammar/${patternFiles[i]}`;
  if (`${p.id}.ts` !== patternFiles[i]) errors.push(`${where}: pattern("${p.id}") doesn't match the file name`);
  for (const l of ['eng', 'rus']) if (!p.meaning?.[l]) errors.push(`${where}: no meaning.${l}`);
  for (const c of p.covers) if (!coverageItems.has(c)) errors.push(`${where}: covers "${c}", which is not a coverage item`);
  for (const t of tagProblems(p)) errors.push(`${where}: ${t}`);
  if (p.taught && !existsSync(resolve(LESSONS, `${p.taught}.ts`))) errors.push(`${where}: taught in "${p.taught}", which is not a lesson module`);
  for (const ref of wordRefIds(p.template.hsd)) if (!ids.has(ref)) errors.push(`${where}: template names unknown word ${ref}`);
  if (!p.examples.length) errors.push(`${where}: no examples`);
  for (const [pinyin] of p.examples) {
    let r;
    try {
      r = parser.parse(pinyinToRefs(pinyin, WORDS), { maxTrees: 500 });
    } catch (err) {
      errors.push(`${where}: example "${pinyin}": ${err.message}`);
      continue;
    }
    if (!r.ok) errors.push(`${where}: example "${pinyin}" does not parse`);
    else if (!r.trees.some((t) => patternsOf(t).includes(p.id))) errors.push(`${where}: example "${pinyin}" parses, but not by this pattern`);
  }
});

if (errors.length) {
  for (const e of errors) console.error(`  ${e}`);
  console.error(`\ncheck-data: ${errors.length} problem(s).`);
  process.exit(1);
}
console.log(`check-data: OK -- ${ids.size} words, ${ENTRIES.length} composites, ${GROUPS.length} coverage groups, ${PATTERNS.length} grammar patterns.`);
if (bareSpelled.length) console.log(`check-data: ${bareSpelled.length} composite(s) have a spelled form and no built form (K23, potentially dangerous); set SPELLED_NEED_BUILT_FORM (src/lib/form-kinds.js) to true to make this a failure.`);
if (kindsToReview) console.log(`check-data: ${kindsToReview} composite(s) have a Mandarin compound still to be marked built or spelled (review: /__review/?kinds=1).`);
{
  const c = tagCheck.counts;
  console.log(`check-data: ${c.topics} topics (${c.topLeaves} leaves, ${c.depth} deep), ${c.kinds} kinds; ${c.withTwoTopics} entries under two or more topics.`);
  if (c.coreNoKind) console.log(`check-data: ${c.coreNoKind} core word(s) have no kind yet (isA); the gate fails on this once KINDS_REQUIRED (src/lib/tag-net.js) is true.`);
  if (c.big || c.small || c.emptyLeaves) console.log(`check-data: leaf topics outside ${LEAF_MIN} to ${LEAF_MAX} entries: ${c.big} too big, ${c.small} too small, ${c.emptyLeaves} empty (node scripts/kb.js tags --check lists them).`);
  if (c.extra) console.log(`check-data: ${c.extra} extra tag(s): written beside a tag under them (node scripts/kb.js tags --check).`);
}
if (counts.none) {
  console.log(
    `check-data: ${counts.none} of ${counts.total} words have neither a paraphrase nor an atom mark yet (${counts.paraphrase} paraphrased, ${counts.clumsy} clumsy, ${counts.atom} atoms); the gate fails on this once PARAPHRASES_REQUIRED (src/lib/paraphrase.js) is true.`,
  );
}
