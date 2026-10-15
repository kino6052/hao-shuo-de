// Reads the real data into the plain-object `source` the KB works from
// (KB_PLAN.md K2). Node only: it imports src/data, the lessons and the
// stories. The result is plain JSON, so it can cross a worker boundary.
//
//   { words, categories, maps, composites, coverage, lessons, texts, patterns }
//
// words       the dictionary's words (src/data/dictionary.ts)
// composites  the assembled entries (forms as one " / "-joined string)
// lessons     [{ id, number, entries }] with each entry cut down to what the
//             facts need: type, module, key, card term, sentence, and `refs`,
//             every word the entry's texts name
// texts       the phrase book and the stories, entries cut down the same way
// patterns    the grammar patterns (src/data/grammar/), if the folder exists

import { existsSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { loadLessons } from './lessons.js';
import { INTRO_IDS, importIntroFile } from './intros.js';
import { wordRefIds } from '../src/lib/word-refs.js';
import dictionary from '../src/data/dictionary.ts';
import compositesData from '../src/data/composites.ts';
import coverage from '../src/data/coverage.ts';
import ANTONYMS from '../src/data/maps/antonyms.ts';
import SYNONYMS from '../src/data/maps/synonyms.ts';
import CONNECTIONS from '../src/data/maps/connections.ts';
import STRUCTURE from '../src/data/maps/structure.ts';
import PRIMES from '../src/data/maps/primes.ts';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)), '..');

// An entry cut down to what the facts and the parser read.
function trim(e) {
  const out = { type: e.type, module: e.module, key: e.key, refs: wordRefIds(JSON.stringify(e)) };
  if (e.type === 'vocab') {
    out.term = e.term;
    if (e.sense) out.sense = e.sense;
  }
  if (e.pinyin) out.pinyin = e.pinyin;
  if (e.ttsText) out.hanzi = e.ttsText;
  if (e.type === 'example' || e.type === 'story' || e.type === 'answer' || e.type === 'image') out.en = e.en ?? [];
  return out;
}

export async function loadSource() {
  const lessons = (await loadLessons()).map((l) => ({ id: l.id, number: l.number, entries: l.entries.map(trim) }));
  const texts = [];
  for (const id of ['phrase-book', 'appendix-stories']) {
    const mod = await import(pathToFileURL(resolve(ROOT, 'src/content', `${id}.ts`)).href);
    texts.push({ id, entries: mod.default.map((e, i) => ({ ...trim(e), key: `${id}.${i}` })) });
  }
  // The intros' examples and picture captions are sentences too (kind 'intro_example').
  for (const id of INTRO_IDS) {
    const entries = (await importIntroFile(id, 'index.ts')).filter((e) => e.type === 'example' || e.type === 'image');
    texts.push({ id, entries: entries.map((e) => ({ ...trim(e), key: `${id}.${e.key}` })) });
  }
  const grammar = resolve(ROOT, 'src/data/grammar/index.ts');
  const patterns = existsSync(grammar) ? (await import(pathToFileURL(grammar).href)).PATTERNS : [];
  return {
    words: JSON.parse(JSON.stringify(dictionary.words)),
    categories: JSON.parse(JSON.stringify(dictionary.categories)),
    maps: { antonyms: ANTONYMS, synonyms: SYNONYMS, connections: CONNECTIONS, structure: STRUCTURE, primes: PRIMES },
    composites: JSON.parse(JSON.stringify(compositesData.entries)),
    coverage: JSON.parse(JSON.stringify(coverage.groups)),
    lessons,
    texts,
    patterns: JSON.parse(JSON.stringify(patterns)),
  };
}
