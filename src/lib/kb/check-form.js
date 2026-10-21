// Checking a Hao-shuo-de form before it goes anywhere (KB_PLAN.md phase 1,
// `kb_check_form`): the same rules the book gates apply to composites, so
// Claude and the author get the answer without a full `npm run check`.
//
//   1. plain pinyin turns into word refs; every syllable must be a dictionary
//      word (names and sounds go in quotes; X and Y are allowed)
//   2. with the hanzi: they must spell the words (src/lib/composite-examples.js); a word they write as one of its
//      senses takes that sense (xīn-de 新的 is {{word:xin1#new}}-{{word:de}})
//   3. with the Chinese word and its pinyin: a Mandarin word made of
//      dictionary words is said with that compound first (compound-rule.js)

import { pinyinToRefs } from '../pinyin-refs.js';
import { wordRefIds, wordRefRe } from '../word-refs.js';
import { hanziMatches, spelledHanzi } from '../composite-examples.js';
import { compoundSplitter } from '../compound-rule.js';
import { pinyinOf } from './whatif.js';

const MAX_TRIES = 512;

// A word the hanzi write as one of its senses (xīn as 新, "new") takes that sense: the refs with {{word:xin1#new}}, the
// first choice of senses whose hanzi match, or null when none does.
function withSenses(refs, hanzi, words) {
  const spots = [...refs.matchAll(wordRefRe())].filter((m) => !m[3] && Object.keys(words[m[2]]?.senses ?? {}).length);
  const choices = spots.map((m) => [null, ...Object.keys(words[m[2]].senses)]);
  const total = choices.reduce((n, c) => n * c.length, 1);
  for (let k = 1; k < Math.min(total, MAX_TRIES); k++) {
    let text = refs;
    let rest = k;
    // from the last spot back, so the earlier indexes still hold
    for (let i = spots.length - 1; i >= 0; i--) {
      const sense = choices[i][rest % choices[i].length];
      rest = Math.floor(rest / choices[i].length);
      if (!sense) continue;
      const m = spots[i];
      text = `${text.slice(0, m.index)}${m[0].replace('}}', `#${sense}}}`)}${text.slice(m.index + m[0].length)}`;
    }
    if (hanziMatches(text, hanzi, words)) return text;
  }
  return null;
}

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
    if (row.hanzi && !unknown.length && !hanziMatches(row.refs, row.hanzi, words)) row.refs = withSenses(row.refs, row.hanzi, words) ?? row.refs;
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
