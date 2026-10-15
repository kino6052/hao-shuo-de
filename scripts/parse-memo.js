// A memory of parse results on disk, so a sentence is parsed once however many scripts ask (K20, speed).
//
//   const memo = parseMemo();                           // once per process
//   const parser = createParser({ patterns, words, composites, memo: memo.space({ patterns, words, composites }) });
//
// A parse depends on three things only: the grammar rules, the word facts the lexicon reads (a word's sound, part of
// speech and extra classes; a composite's hanzi, sound, part of speech and forms), and the parser's own code. A
// `space` is the memory for one such combination: the name is a hash of exactly those, so editing a sentence, a
// definition or an example changes nothing here, and editing a rule or a word class starts a fresh space. Each space
// is one file, .cache/parse-memo/<name>.json, written when the process ends (merged with what another script wrote
// meanwhile). Spaces nobody has used for a while are deleted.
//
// Results are kept slim (src/lib/grammar/parser.js: slimOf), which is all the gates read.

import { existsSync, readFileSync, readdirSync, rmSync, statSync, utimesSync } from 'fs';
import { createHash } from 'crypto';
import { resolve } from 'path';
import { CACHE_DIR, cacheOff, readCache, writeCache } from './cache.js';
import { ROOT } from './stamp.js';

// the files whose code decides what a parse says
const CODE = ['earley.js', 'grammar.js', 'lexicon.js', 'parser.js'].map((f) => `src/lib/grammar/${f}`).concat('src/lib/word-refs.js');
const KEEP = 60; // spaces kept
const hash = (text) => createHash('sha1').update(text).digest('hex');

let codeHash = null;
const codeStamp = () => (codeHash ??= hash(CODE.map((f) => readFileSync(resolve(ROOT, f), 'utf8')).join('\0')));

// the parts of the data a parse reads, computed once per object
const projections = new WeakMap();
const project = (obj, make) => {
  if (!projections.has(obj)) projections.set(obj, hash(JSON.stringify(make(obj))));
  return projections.get(obj);
};
const wordFacts = (words) =>
  Object.keys(words)
    .sort()
    .map((id) => [id, words[id].term, words[id].pos?.eng ?? null, Object.keys(words[id].classes ?? {}).sort()]);
const compositeFacts = (cs) => cs.map((c) => [c.zh, c.py, c.pos ?? null, c.hsd ?? null]);
const ruleFacts = (patterns) => patterns.map((p) => [p.id, p.rules.map((r) => [r.lhs, r.hsd])]);

// where the memory lives; a copy of the repo (refactor-check.js, parse-diff.js) is pointed here too, so what it
// parses is remembered for the next copy and for this repo
export const MEMO_DIR = process.env.HSD_PARSE_MEMO_DIR || resolve(CACHE_DIR, 'parse-memo');
// -> the environment for a script run in a copy of the repo, so it shares this memory
export const memoEnv = () => ({ ...process.env, HSD_PARSE_MEMO_DIR: MEMO_DIR });

export function parseMemo({ dir = MEMO_DIR } = {}) {
  const spaces = new Map(); // name -> { entries: Map, fresh: Map }
  let flushed = false;

  const open = (name) => {
    let sp = spaces.get(name);
    if (!sp) {
      const stored = readCache(`${name}.json`, dir);
      sp = { entries: new Map(stored ? Object.entries(stored) : []), fresh: new Map() };
      spaces.set(name, sp);
    }
    return sp;
  };

  // -> the memory for these patterns, words and composites: { get(key), set(key, value) }
  function space({ patterns, words, composites = [] }) {
    const name = hash([codeStamp(), hash(JSON.stringify(ruleFacts(patterns))), project(words, wordFacts), project(composites, compositeFacts)].join('\0')).slice(0, 20);
    const sp = open(name);
    return {
      name,
      get: (key) => (cacheOff() ? undefined : sp.entries.get(key)),
      set(key, value) {
        sp.entries.set(key, value);
        sp.fresh.set(key, value);
      },
    };
  }

  // writes what is new; safe to call twice
  function flush() {
    if (flushed) return;
    flushed = true;
    for (const [name, sp] of spaces) {
      if (!sp.fresh.size) {
        // only used: remember that, so the space is not pruned
        try {
          const t = new Date();
          utimesSync(resolve(dir, `${name}.json`), t, t);
        } catch {
          /* not stored yet */
        }
        continue;
      }
      const onDisk = readCache(`${name}.json`, dir) ?? {};
      writeCache(`${name}.json`, { ...onDisk, ...Object.fromEntries(sp.fresh) }, dir);
    }
    prune(dir);
  }
  process.on('exit', flush);

  return { space, flush, dir };
}

// deletes the least recently used spaces beyond KEEP
function prune(dir) {
  try {
    if (!existsSync(dir)) return;
    const files = readdirSync(dir)
      .filter((f) => f.endsWith('.json'))
      .map((f) => ({ f, t: statSync(resolve(dir, f)).mtimeMs }))
      .sort((a, b) => b.t - a.t);
    for (const { f } of files.slice(KEEP)) rmSync(resolve(dir, f), { force: true });
  } catch {
    /* pruning is a courtesy */
  }
}
