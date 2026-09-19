// Language-independent block sequence for lesson-01 ("Sounds and Symbols").
// See src/lib/chapter-shape-types.ts for what each slot type means and
// src/lib/assemble-chapter.js for how this is zipped with en.ts/ru.ts/zh.ts.
import type { Shape } from "../../lib/chapter-shape-types.ts";

const shape: Shape = [
  /** Chapter title. */
  { type: "title" },

  /** Chapter summary: what pinyin is and why it matters. */
  { type: "summary" },

  /** Chinese's smallest written unit is the syllable, not the letter. */
  { type: "prose", hasTldr: true, hasNecessity: true },

  /** Callout: read pinyin syllable by syllable, e.g. Zhōng + guó. */
  { type: "info", hasTitle: true, items: [{ items: [{}] }] },

  /** Pinyin alone doesn't capture pronunciation fully -- take the pronunciation course. */
  { type: "prose" },

  /** <h2>Tones</h2> -- tone is part of the word, not decoration. */
  { type: "prose", hasTldr: true, hasNecessity: true },

  /** Example callout: mā/má/mǎ/mà are four different words. */
  { type: "info", hasTitle: true, items: [{}, {}, {}, {}] },

  /** Those four words differ only by tone; here are Chinese's tones. */
  { type: "prose" },

  /** Callout listing the five tones (ā/á/ǎ/à/a) with a mnemonic each. */
  { type: "info", hasTitle: true, items: [{}, {}, {}, {}, {}] },

  /** All syllables are toned except the neutral tone, which is unstressed. */
  { type: "prose" },

  /** Intro to tone sandhi (tones shifting next to each other). */
  { type: "prose" },

  /** This book always prints the dictionary's baseline tone, not live sandhi. */
  { type: "prose" },

  /** Chinese syllables run together with no word boundaries -- Hao-shuo-de adds punctuation for that. */
  { type: "prose", hasTldr: true, hasNecessity: true },

  /** Ordered callout: the three pinyin punctuation helpers (solid/hyphen/quotes), with worked examples nested under helpers 2 and 3. */
  {
    type: "info",
    hasTitle: true,
    ordered: true,
    items: [
      {},
      { items: [{}, {}, {}, {}] },
      { items: [{}, {}, {}] },
    ],
  },

  /** Exercise: break Zhōngguórén into syllables. */
  { type: "exercise" },
  /** Exercise: identify the tone of à. */
  { type: "exercise" },
  /** Exercise: rewrite wǒ hǎo in tone-number notation. */
  { type: "exercise" },
  /** Exercise: is hěn-dà-de one word or word+particle? */
  { type: "exercise" },

  /** Answer to exercise 1. */
  { type: "answer" },
  /** Answer to exercise 2. */
  { type: "answer" },
  /** Answer to exercise 3. */
  { type: "answer" },
  /** Answer to exercise 4. */
  { type: "answer" },
];

export default shape;
