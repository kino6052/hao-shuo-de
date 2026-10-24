// Is this an English word? Step 0's code check (BROWSER_TRANSLATOR_PLAN.md §2): a word the LLM's corrected English
// still has must be one WordNet knows, in any of its forms, or one of the small words WordNet leaves out (the, of,
// I, would). Contractions count by their stem (don't -> do, she's -> she). A capitalized word WordNet doesn't know is
// taken as a name, so a misspelled first word of a sentence slips through.
//
//   makeKnownWord(index) -> (word) -> boolean
//   index  kb/cache/english-index.json: { lemmas: { word: [ili] }, forms: { took: ['take'] } }

import { baseForms } from '../kb/english.js';

// the small words: no meaning of their own to compare (T-eng's readback score leaves them out too)
export const SMALL = new Set(
  `a an the this that these those i me my mine myself you your yours yourself he him his himself she her hers herself it
  its itself we us our ours ourselves they them their theirs themselves who whom whose which what where when why how
  and or but nor if so because than then though although while until unless whether of to in on at by for with from
  about as into onto upon over under after before since through between among against without within during toward
  towards is am are was were be been being do does did done have has had having will would shall should can could may
  might must not no yes all some any each every both either neither none other another such very too also just only
  even here there now ever never always often again once one two`.split(/\s+/),
);
const CONTRACTION = /(?:'s|'m|'re|'ll|'ve|'d|n't)$/;

export function makeKnownWord(index) {
  const lemmas = index?.lemmas ?? {};
  const forms = index?.forms ?? {};
  const known = (w) => SMALL.has(w) || baseForms(w).some((b) => Object.hasOwn(lemmas, b) || Object.hasOwn(forms, b));
  return (word) => {
    const raw = String(word ?? '').trim();
    if (!raw) return false;
    const w = raw.toLowerCase();
    const stem = w.replace(CONTRACTION, '');
    if (known(w) || (stem !== w && known(stem.replace(/^wo$/, 'will').replace(/^ca$/, 'can')))) return true;
    return /^[A-Z]/.test(raw); // a name
  };
}
