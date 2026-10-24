// The words the tree step may use, found in code before the LLM is asked (BROWSER_TRANSLATOR_PLAN.md B4): every core
// word once, and for each sentence what its English words look up to (kb_lookup's rows: the glossary, the glosses,
// the same senses, the kinds). Given in the prompt, they spare the tree step the kb tools, their server and a round
// trip per word, so many sentences can go in one call.
//
//   coreWordLines(words)                          -> one line per core word: id, pinyin, hanzi, classes, English, senses
//   sentenceWords(kb, sentence, { compositesOf }) -> [{ english, items: [{ item, en, tier }] }] for each English word
//                                                    (and pair of words, for "ice cream") that looks up to something
//   wordLines(found)                              -> the same as text for the prompt, one English word per line
//
// An item is how a tree writes the entry: a word id (ma1ma) is the leaf {"word": "ma1ma"}; 做饭[zuo4 fan4] is the leaf
// {"composite": "做饭", "words": ["zuo4", "fan4"]}; "phrase: xue2 de 房间[fang2 jian1]" is a description the grammar
// builds, word by word, with the rules. compositesOf(ids) is makeTrees' (src/lib/grammar/tree.js): the composites a
// chain of words spells.

import { replaceWordRefs, refTerm, wordRefIds, wordRefRe } from '../word-refs.js';
import { pinyinProblems } from '../pinyin-refs.js';
import { classesOf } from '../grammar/lexicon.js';
import { isWordForm } from '../kb/form-report.js';
import { askLookup } from '../kb/lookup.js';

// the words a lookup of their own would only bring noise for: the grammar and the core words say them
const SKIP = new Set(['a', 'an', 'the', 'is', 'are', 'am', 'was', 'were', 'be', 'been', 'being', 'do', 'does', 'did', 'to', 'of']);
const MAX_ITEMS = 4; // per English word
const NEAR = new Set(['gloss', 'glossary']); // the rows that say the word itself; the same senses and kinds come only without them

const plain = (text, words) => replaceWordRefs(text, (id, kind) => refTerm(words[id]?.term ?? id, kind));

export const coreWordLines = (words) =>
  Object.keys(words)
    .sort()
    .map((id) => {
      const w = words[id];
      const en = plain(String(w.definition?.eng ?? '').split(/[:;]/)[0], words).slice(0, 60).trim();
      const senses = Object.entries(w.senses ?? {}).map(([name, s]) => `${name} (${s.eng ?? name})`);
      return `${id} ${w.term} ${w.hanzi} [${classesOf(w).join(', ')}] ${en}${senses.length ? `; senses: ${senses.join(', ')}` : ''}`;
    })
    .join('\n');

// -> a form (text with word refs) as a tree writes it: one word, one composite, or a phrase the rules build
export function itemOf(form, compositesOf) {
  const ids = wordRefIds(form);
  if (isWordForm(form)) {
    if (ids.length === 1) return ids[0];
    const zh = compositesOf(ids)[0];
    return zh ? `${zh}[${ids.join(' ')}]` : ids.join('-');
  }
  const run = (token) => {
    const ids = wordRefIds(token);
    if (!ids.length) return token;
    const out = [];
    for (let i = 0; i < ids.length; ) {
      let j = ids.length;
      while (j > i + 1 && !compositesOf(ids.slice(i, j)).length) j--;
      out.push(j > i + 1 ? `${compositesOf(ids.slice(i, j))[0]}[${ids.slice(i, j).join(' ')}]` : ids[i]);
      i = Math.max(j, i + 1);
    }
    return out.join(' ') + token.replace(wordRefRe(), '').replace(/-/g, '');
  };
  return `phrase: ${String(form).trim().split(/\s+/).map(run).join(' ')}`;
}

// the form kb_lookup shows for an entry (lookup.js formOf): the readable one with the earliest lesson, then the fewest words
function formRefs(kb, zh) {
  const built = kb.built();
  const row = built.row(zh);
  if (row) {
    const readable = row.forms.filter((f) => f.shape !== 'unread').sort((a, b) => (a.reach ?? Infinity) - (b.reach ?? Infinity) || a.words.length - b.words.length);
    return (readable[0] ?? row.forms[0])?.form ?? null;
  }
  const id = built.wordId(zh);
  return id ? `{{word:${id}}}` : null;
}

// more: English words or phrases looked up as they are (what the LLM asked for)
export function sentenceWords(kb, sentence, { compositesOf, more = [] }) {
  const words = kb.source.words;
  const tokens = (String(sentence).match(/[A-Za-z]+(?:'[a-z]+)?/g) ?? []).map((t) => t.toLowerCase());
  const pairs = tokens.slice(1).map((t, i) => [tokens[i], t]).filter((p) => !p.some((t) => SKIP.has(t)));
  const asks = [...tokens.filter((t) => !SKIP.has(t)), ...pairs.map((p) => p.join(' ')), ...more.map((m) => String(m).trim().toLowerCase()).filter(Boolean)];
  const found = [];
  for (const english of [...new Set(asks)]) {
    const pair = english.includes(' ');
    const rows = askLookup(kb, { word: english }).data.rows;
    const near = rows.filter((r) => NEAR.has(r.tier));
    const items = [];
    // a pair counts only as a phrase of its own (ice cream), never through the senses of its words
    for (const row of near.length || pair ? near : rows) {
      const form = row.tier === 'glossary' ? pinyinProblems(row.pinyin, words, { composites: kb.source.composites }).refs : formRefs(kb, row.zh);
      const item = form && itemOf(form, compositesOf);
      if (!item || items.some((x) => x.item === item)) continue;
      items.push({ item, en: row.en, tier: row.tier });
      if (items.length === MAX_ITEMS) break;
    }
    if (items.length) found.push({ english, items });
  }
  return found;
}

export const wordLines = (found) =>
  found.length ? found.map((f) => `   "${f.english}": ${f.items.map((x) => `${x.item}${x.tier === 'gloss' || x.tier === 'glossary' ? '' : ` (${x.tier}: ${x.en})`}`).join(' | ')}`).join('\n') : '   (nothing looked up; use the core words)';
