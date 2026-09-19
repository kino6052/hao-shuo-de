// English text for lesson-01, positionally matching shape.ts (same length,
// same order -- see src/lib/chapter-shape-types.ts for each slot's shape).
import type { LangContent } from "../../lib/chapter-shape-types.ts";

const en: LangContent = [
  /** title */
  ["Sounds and Symbols"],

  /** summary */
  [
    "Pinyin is how we write Chinese using the Roman alphabet.",
    "It is written syllable by syllable.",
    "It has marks indicating tones.",
    "In hao-shuo-de we write pinyin with spaces, hyphens and quotation marks to make it more readable and understandable.",
    "Mastering pinyin is one of the most fundamental skills in learning Chinese.",
  ],

  /** prose: smallest piece is a syllable */
  {
    text: [
      "Chinese is very different from the western languages on many levels.",
      "One such example is what the smallest piece in the written language is.",
      "In western languages such smallest piece is a letter — we build words from letters, we can spell words from letters.",
      "In Chinese it is not like that — the smallest piece is a syllable.",
    ],
    tldr: ["There are no letters in Chinese because the smallest written piece is a syllable."],
    necessity: ["Required to understand how to read pinyin"],
  },

  /** info: "Important!" -- read pinyin syllable by syllable */
  {
    title: ["Important!"],
    items: [
      {
        text: ["Get in the habit of reading pinyin words syllable by syllable, not as one whole word (the way we do in our alphabetic languages)."],
        items: [{ text: ["<i>Syllables</i>: <b>Zhōng</b> and <b>guó</b>"] }],
      },
    ],
  },

  /** prose: pinyin doesn't capture pronunciation fully */
  {
    text: [
      "Even though pinyin attempts to capture how the words sound it is still not detailed enough to capture the details of the pronunciation, so it is important to learn exactly how each syllable is pronounced.",
      "For this we have a dedicated rigorous pronunciation course that aims to train you in detailed understanding of the basic pronunciation.",
      "Being able to understand the sounds of Chinese is the **MOST** fundamental and important skill in Chinese on which everything else will depend.",
      "So don't overlook this.",
      "Here is the [LINK]",
    ],
  },

  /** prose: <h2>Tones</h2> -- tone is part of the word */
  {
    text: ["<h2>Tones</h2>", "In pinyin, tone isn't decoration — it's part of the word."],
    tldr: ["Tone is part of the word, not decoration"],
    necessity: ["Tones are a fundamental and necessary part of Chinese and pinyin"],
  },

  /** info: "Example" -- mā/má/mǎ/mà */
  {
    title: ["Example"],
    items: [
      { text: ["**mā** — mother"] },
      { text: ["**má** — hemp"] },
      { text: ["**mǎ** — horse"] },
      { text: ["**mà** — to scold"] },
    ],
  },

  /** prose: those four words differ only by tone */
  {
    text: [
      "All the words above are different, and are pronounced differently, because they use different tones.",
      "Chinese has the following tones:",
    ],
  },

  /** info: "Tones" -- ā/á/ǎ/à/a */
  {
    title: ["Tones"],
    items: [
      { text: ['**ā** — First tone. Level and sustained, as if you\'re humming a single unchanging note (like "om").'] },
      { text: ['**á** — Second tone. Rising, like the "huh?" you say when you didn\'t quite hear something.'] },
      { text: ['**ǎ** — Third tone. Dips down first, then curls back up — the sound of a skeptical "hmm..."'] },
      { text: ['**à** — Fourth tone. Sharp and falling, like a clipped, final "No."'] },
      {
        text: [
          "**a** — Neutral tone. It's written without a tone mark, just as a plain letter.",
          "The neutral tone is shorter and unstressed.",
          "In the word Hǎo-shuō-de, the final syllable de carries the neutral tone.",
        ],
      },
    ],
  },

  /** prose: all syllables are toned except the neutral tone */
  {
    text: [
      "All of Chinese is read in tones, syllable by syllable.",
      "The one exception is the neutral tone.",
      "When it appears in a word, the syllable before it gets the stress, and the neutral tone itself is just a short, unstressed sound.",
      "The word Hǎo-shuō-de isn't three equal beats.",
      'It\'s pronounced hao-shuò-de — the final syllable "de" fades out.',
      "Without the neutral tone, spoken Chinese wouldn't sound spoken.",
      "In fact the literary Chinese is often spoken like that - it has its charm but it is very unnatural for daily speaking.",
      "It's the neutral tone that keeps the rhythm from falling apart.",
    ],
  },

  /** prose: intro to tone sandhi */
  {
    text: [
      "In natural Chinese speech there are rules for how certain tones shift when syllables sit next to each other.",
      "These changes are called tone sandhi (it's academic name)",
    ],
  },

  /** prose: this book prints the dictionary's baseline tone */
  {
    text: ["In this book, the tone of each syllable is its dictionary tone (i.e. taken straight from the dictionary)."],
  },

  /** prose: no word boundaries in Chinese -- Hao-shuo-de adds punctuation */
  {
    text: [
      "In regular Chinese, sentences are built from syllables, with no spaces or extra notation that will help us to understand where words start and end.",
      "To make the structure of Chinese clearer to us, Hao-shuo-de adds a few extra grammar rules on top.",
    ],
    tldr: ["Hao-shuo-de adds punctuation on top of syllabic writing"],
    necessity: ["Without these rules, you can't see where words and grammar particles begin and end in Chinese text."],
  },

  /** info: "Hao-shuo-de pinyin helpers" -- solid/hyphen/quotes */
  {
    title: ["Hao-shuo-de pinyin helpers"],
    items: [
      {
        text: [
          "**Words are written solid**. When several syllables form one dictionary word, they are never split apart, no matter how long the word is — {{word:dong4wu4}}, {{word:shui4jiao4}}, {{word:dan4shi4}}.",
          "Read the whole solid block as a single unit.",
        ],
      },
      {
        text: [
          "**A hyphen transforms a word**. A hyphen attaches a grammar particle, a measure word, or a modifier to a word and turns it into a different part of speech (for example, from a noun into an adjective, or from a verb into an adjective).",
        ],
        items: [
          { text: ["{{word:zhe4}}-**ge** — this"] },
          { text: ["{{word:yi1}}-**ge** — one thing"] },
          { text: ["{{word:hen3}}-**{{word:da4}}-de** — very big"] },
          { text: ["A hyphen always shows that the parts it joins work together as a single word."] },
        ],
      },
      {
        text: [
          "**Quotes set off the untranslatable**. Proper names and onomatopoeia — things that aren't really Hao-shuo-de vocabulary — are enclosed in quotes:",
        ],
        items: [
          { text: ['"Beijing" — Beijing'] },
          { text: ['{{word:jiao4}} "wāng-wāng" — barks "woof-woof"'] },
          { text: ["If you see quotes, don't look the word up in the dictionary — it isn't a dictionary word."] },
        ],
      },
    ],
  },

  /** exercise 1 */
  ["Break Zhōngguórén into its syllables."],
  /** exercise 2 */
  ["Which tone is this: à (fourth tone mark)? Describe it in one word."],
  /** exercise 3 */
  ["Rewrite {{Word:wo3}} {{word:hao3}} using tone-number notation instead of tone marks."],
  /** exercise 4 */
  ["Is {{word:hen3}}-{{word:da4}}-de one dictionary word, or a word plus a bound grammar piece? How do you know from the punctuation alone?"],

  /** answer 1 */
  ["Zhōng-guó-rén (three syllables: Zhōng, guó, rén)."],
  /** answer 2 */
  ["Fourth tone — sharp and falling."],
  /** answer 3 */
  ["Wo3 hao3."],
  /** answer 4 */
  ["A word ({{word:da4}}, big) plus a bound grammar piece (-de) — the hyphen shows they're glued together, not a single solid dictionary word."],
];

export default en;
