// kb_gloss (TRANSLATOR_PLAN.md B3): each word of a sentence, replaced by the first sense of its own dictionary
// definition -- mechanical, from the word meanings, no AI. For the blind reader (W18), who sees no English
// otherwise; and for Claude, to catch a word used for the wrong sense before a reading check (kb_check_reading).
//
//   askGloss(kb, { text }) -> { data, text }

import { pinyinProblems } from '../pinyin-refs.js';
import { replaceWordRefs, refTerm } from '../word-refs.js';
import { splitSentences } from './parse.js';

// "mom: {{word:ba4ba}}-{{word:ma1ma}}, mom and dad" -> "mom"; a word reference left in the sense is shown as its pinyin
const firstSense = (w, words) =>
  replaceWordRefs(String(w?.definition?.eng ?? w?.hanzi ?? '?'), (id, kind) => refTerm(words[id]?.term ?? id, kind)).split(/[,;:]/)[0].trim();

export function askGloss(kb, { text } = {}) {
  if (!text) throw new Error('text is required');
  const words = kb.source.words;
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
      gloss: replaceWordRefs(refs, (id) => firstSense(words[id], words)),
      unknown,
    };
  });
  const out = sentences.flatMap((s) => [s.text, `  ${s.gloss}`, ...s.unknown.map((p) => `  not a word: ${p.message}`)]);
  return { data: { sentences }, text: out.join('\n') };
}
