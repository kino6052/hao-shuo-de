// Checking a Hao-shuo-de form before it goes anywhere (KB_PLAN.md phase 1,
// `kb_check_form`): the same rules the book gates apply to composites, so
// Claude and the author get the answer without a full `npm run check`.
//
//   1. plain pinyin turns into word refs; every syllable must be a dictionary
//      word (names and sounds go in quotes; X and Y are allowed)
//   2. with the hanzi: they must spell the words (src/lib/composite-examples.js)
//   3. with the Chinese word and its pinyin: a Mandarin word made of
//      dictionary words is said with that compound first (compound-rule.js)

import { pinyinToRefs } from '../pinyin-refs.js';
import { wordRefIds } from '../word-refs.js';
import { hanziMatches, spelledHanzi } from '../composite-examples.js';
import { compoundSplitter } from '../compound-rule.js';
import { pinyinOf } from './whatif.js';

// forms: a string, "form / form", or a list. tts: the hanzi of each form.
// zh/py: the Chinese word the forms say, if it is a composite.
export function checkForm(words, { forms, tts = [], zh, py } = {}) {
  const list = (Array.isArray(forms) ? forms : String(forms ?? '').split(' / ')).map((f) => f.trim()).filter(Boolean);
  const hanzi = Array.isArray(tts) ? tts : String(tts ?? '').split(' / ');
  const pin = pinyinOf(words);
  const problems = [];
  const out = list.map((plain, i) => {
    const row = { plain, refs: null, pinyin: null, hanzi: hanzi[i] || null, problems: [] };
    try {
      row.refs = pinyinToRefs(plain, words);
    } catch (e) {
      row.problems.push(String(e.message));
      return row;
    }
    const unknown = wordRefIds(row.refs).filter((id) => !words[id]);
    if (unknown.length) row.problems.push(`not words: ${unknown.join(', ')}`);
    row.pinyin = pin(row.refs);
    if (row.hanzi && !unknown.length && !hanziMatches(row.refs, row.hanzi, words)) {
      row.problems.push(`hanzi "${row.hanzi}" don't spell its words (${spelledHanzi(row.refs, words).map((s) => s[0]).join('')})`);
    }
    return row;
  });
  if (!list.length) problems.push('no form given');
  if (zh && list.length && !out.some((r) => !r.refs)) {
    const ids = compoundSplitter(words)(zh, py);
    if (ids && !hanzi.includes(zh)) {
      const sequences = out.map((r) => wordRefIds(r.refs).join(' '));
      if (!sequences.includes(ids.join(' '))) {
        problems.push(`${zh} is made of dictionary words, so say it the Mandarin way first: ${ids.map((id) => words[id].term).join('-')}`);
      }
    }
  }
  for (const r of out) for (const p of r.problems) problems.push(`"${r.plain}": ${p}`);
  return { ok: problems.length === 0, forms: out, problems };
}
