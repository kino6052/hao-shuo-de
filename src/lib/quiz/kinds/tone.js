// Sounds and tones (BOOK_PLAN.md §3): hear a word from the word cards and pick how it is spelled, with its tone.
// The wrong choices are the same spelling with another tone (or the light tone, no mark).

import { makeQuestion } from '../question.js';
import { shuffle } from '../rng.js';
import { base } from './util.js';

const MARKS = { a: 'āáǎà', e: 'ēéěè', i: 'īíǐì', o: 'ōóǒò', u: 'ūúǔù', ü: 'ǖǘǚǜ' };
const BASE = new Map(Object.entries(MARKS).flatMap(([v, marks]) => [...marks].map((m, i) => [m, [v, i + 1]])));

const withCase = (ch, like) => (like === like.toUpperCase() && like !== like.toLowerCase() ? ch.toUpperCase() : ch);

// -> where the tone mark of the term's first marked syllable goes, and its tone (0 = light), or null.
export function toneSpot(term) {
  for (let i = 0; i < term.length; i++) {
    const hit = BASE.get(term[i].toLowerCase());
    if (hit) return { at: i, vowel: hit[0], tone: hit[1] };
  }
  // no mark: the light tone; the mark would go on a or e, on the o of ou, else on the last vowel of the first syllable
  const syl = term.split('-')[0].toLowerCase();
  let at = syl.search(/[ae]/);
  if (at < 0) at = syl.indexOf('ou');
  if (at < 0) {
    const vowels = [...syl.matchAll(/[iouü]/g)];
    at = vowels.length ? vowels[vowels.length - 1].index : -1;
  }
  return at < 0 ? null : { at, vowel: syl[at], tone: 0 };
}

// -> the term with each tone: [light, 1st, 2nd, 3rd, 4th], or null when it has no vowel to mark.
export function toneVariants(term) {
  const spot = toneSpot(term);
  if (!spot) return null;
  const like = term[spot.at];
  return [spot.vowel, ...MARKS[spot.vowel]].map((v) => term.slice(0, spot.at) + withCase(v, like) + term.slice(spot.at + 1));
}

export default {
  kind: 'tone',
  make(lesson, ctx) {
    const out = [];
    for (const m of lesson.modules) {
      for (const card of m.cards) {
        const variants = toneVariants(card.term);
        const spot = toneSpot(card.term);
        if (!variants || !card.hanzi) continue;
        const rng = ctx.rng(`${lesson.id}/${card.key}/tone`);
        const right = variants[spot.tone];
        const wrongs = shuffle(variants.filter((v) => v !== right), rng).slice(0, 3);
        const all = shuffle([right, ...wrongs], rng);
        out.push(makeQuestion({
          ...base(lesson, m, 'tone', card.key),
          prompt: { audio: { pinyin: card.term, hanzi: card.hanzi, file: card.audioFile }, hanzi: card.hanzi },
          choices: all.map((v) => ({ text: { any: v } })),
          answer: all.indexOf(right),
          words: [card.word],
        }));
      }
    }
    return out;
  },
};
