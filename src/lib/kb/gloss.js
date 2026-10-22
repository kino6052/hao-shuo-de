// kb_gloss (TRANSLATOR_PLAN.md B3): each word of a sentence, replaced by the first sense of its own dictionary
// definition -- mechanical, from the word meanings, no AI. For the blind reader (W18), who sees no English
// otherwise; and for Claude, to catch a word used for the wrong sense before a reading check (kb_check_reading).
//
// A hyphen-joined chain that spells a composite entry (shí-jiān -> 时间) is glossed by that entry's own first sense
// ("time"), as the parser reads it as one word too (lexicon.js); a chain that spells none is glossed word by word
// ("ten-between" was what the blind readers of the ten stories got, F1). The longest spelled part wins, from the left:
// hēi-sè-de -> black-possessive marker when hēi-sè is an entry.
//
//   askGloss(kb, { text }) -> { data, text }

import { pinyinProblems } from '../pinyin-refs.js';
import { replaceWordRefs, refTerm, wordRefRe } from '../word-refs.js';
import { splitSentences } from './parse.js';

// "mom: {{word:ba4ba}}-{{word:ma1ma}}, mom and dad" -> "mom"; a word reference left in the sense is shown as its pinyin
const firstSense = (w, words) =>
  replaceWordRefs(String(w?.definition?.eng ?? w?.hanzi ?? '?'), (id, kind) => refTerm(words[id]?.term ?? id, kind)).split(/[,;:]/)[0].trim();

const REF = wordRefRe().source;
const CHAIN = new RegExp(`(?:${REF})(?:-(?:${REF}))+`, 'g');
const CHAIN_FORM = new RegExp(`^(?:${REF})(?:-(?:${REF}))+$`);
const idsOf = (chain) => [...chain.matchAll(wordRefRe())].map((m) => m[2]);

// the hanzi a chain of words can be written with: each word's own and its senses' (nan2 is 难, and 男 as "male")
function chainHanzi(ids, words) {
  let out = [''];
  for (const id of ids) {
    const w = words[id];
    const own = [...new Set([w?.hanzi, ...Object.values(w?.senses ?? {}).map((s) => s?.hanzi)].filter(Boolean))];
    out = out.flatMap((h) => own.map((x) => h + x)).slice(0, 64);
  }
  return new Set(out);
}

// "nan2 ren2" -> "man": the chains the composites spell, with the first sense of their English. Synonyms share one form
// (dōng-xi spells 事, 东西, 物品 ...), so the composite written with the chain's own hanzi wins (东西, "thing"), then one
// whose first form is the chain, then the lower rank.
const chainsCache = new WeakMap();
// [0, 0, 36] comes before [0, 0, 136]: compared item by item
const before = (a, b) => {
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return a[i] < b[i];
  return false;
};
function chainSenses(composites = [], words = {}) {
  if (chainsCache.has(composites)) return chainsCache.get(composites);
  const found = new Map();
  for (const c of composites) {
    const forms = Array.isArray(c.hsd) ? c.hsd : c.hsd ? c.hsd.split(' / ') : [];
    forms.forEach((form, i) => {
      if (!CHAIN_FORM.test(form) || !c.en) return;
      const ids = idsOf(form);
      const key = ids.join(' ');
      const rank = [chainHanzi(ids, words).has(c.zh) ? 0 : 1, i > 0 ? 1 : 0, c.rank ?? Infinity];
      const old = found.get(key);
      if (!old || before(rank, old.rank)) found.set(key, { sense: String(c.en).split(/[,;:]/)[0].trim(), rank });
    });
  }
  const senses = new Map([...found].map(([key, v]) => [key, v.sense]));
  chainsCache.set(composites, senses);
  return senses;
}

function glossChain(ids, words, senses) {
  const out = [];
  for (let i = 0; i < ids.length; ) {
    let j = ids.length;
    while (j > i + 1 && !senses.has(ids.slice(i, j).join(' '))) j--;
    out.push(j > i + 1 ? senses.get(ids.slice(i, j).join(' ')) : firstSense(words[ids[i]], words));
    i = j;
  }
  return out.join('-');
}

export function askGloss(kb, { text } = {}) {
  if (!text) throw new Error('text is required');
  const words = kb.source.words;
  const senses = chainSenses(kb.source.composites, words);
  const sentences = splitSentences(text).map((raw) => {
    let refs = raw;
    let unknown = [];
    if (!raw.includes('{{')) {
      const r = pinyinProblems(refs, words, { composites: kb.source.composites });
      refs = r.refs;
      unknown = r.problems;
    }
    return {
      text: replaceWordRefs(refs, (id, kind) => refTerm(words[id]?.term ?? id, kind)),
      gloss: replaceWordRefs(refs.replace(CHAIN, (chain) => glossChain(idsOf(chain), words, senses)), (id) => firstSense(words[id], words)),
      unknown,
    };
  });
  const out = sentences.flatMap((s) => [s.text, `  ${s.gloss}`, ...s.unknown.map((p) => `  not a word: ${p.message}`)]);
  return { data: { sentences }, text: out.join('\n') };
}
