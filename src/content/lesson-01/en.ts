// English text for lesson-01, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Sounds and Symbols"] },
  summary: {
    en: [
      "Before you can speak, you need to read the sounds.",
      "In this lesson, you'll learn to read pinyin: Chinese sounds written with letters you know, and tone marks that show how each sound rises or falls.",
    ],
  },
  proseSyllableUnit: {
    en: [
      "Chinese is very different from the western languages on many levels.",
      "One such example is what the smallest piece in the written language is.",
      "In western languages such smallest piece is a letter — we build words from letters, we can spell words from letters.",
      "In Chinese it is not like that — the smallest piece is a syllable.",
    ],
    tldr: {
      en: [
        "Chinese is written one syllable at a time, not letter by letter.",
      ],
    },
    necessity: { en: ["You read pinyin one syllable at a time."] },
  },
  infoReadBySyllable: {
    title: { en: ["Important!"] },
    items: [
      {
        en: [
          "Get in the habit of reading pinyin words syllable by syllable, not as one whole word (the way we do in our alphabetic languages).",
        ],
        items: [
          {
            en: [
              "<i>Syllables</i>: <b>Zhōng</b> and <b>guó</b>",
            ],
          },
        ],
      },
    ],
  },
  prosePinyinLimits: {
    en: [
      "Even though pinyin attempts to capture how the words sound it is still not detailed enough to capture the details of the pronunciation, so it is important to learn exactly how each syllable is pronounced.",
      "For this we have a dedicated rigorous pronunciation course that aims to train you in detailed understanding of the basic pronunciation.",
      "Being able to understand the sounds of Chinese is the **MOST** fundamental and important skill in Chinese on which everything else will depend.",
      "So don't overlook this.",
      "Here is the [LINK]",
    ],
    tldr: {
      en: [
        "Pinyin can't show every detail of how a word sounds.",
      ],
    },
    necessity: {
      en: ["Listen to the audio to learn the real sounds."],
    },
  },
  proseTonesHeading: {
    en: [
      "<h2>Tones</h2>",
      "In pinyin, tone isn't decoration — it's part of the word.",
    ],
    tldr: { en: ["The tone is part of the word."] },
    necessity: {
      en: ["Change the tone and you get a different word."],
    },
  },
  infoToneExample: {
    title: { en: ["Example"] },
    items: [
      { en: ["**mā** — mother"] },
      { en: ["**má** — hemp"] },
      { en: ["**mǎ** — horse"] },
      { en: ["**mà** — to scold"] },
    ],
  },
  proseFourTonesIntro: {
    en: [
      "All the words above are different, and are pronounced differently, because they use different tones.",
      "Chinese has the following tones:",
    ],
    tldr: { en: ["Chinese has four tones, plus one light tone."] },
    necessity: { en: ["You need all of them to say words right."] },
  },
  infoFiveTones: {
    title: { en: ["Tones"] },
    items: [
      {
        en: [
          "**ā** — First tone. Level and sustained, as if you're humming a single unchanging note (like \"om\").",
        ],
      },
      {
        en: [
          "**á** — Second tone. Rising, like the \"huh?\" you say when you didn't quite hear something.",
        ],
      },
      {
        en: [
          '**ǎ** — Third tone. Dips down first, then curls back up — the sound of a skeptical "hmm..."',
        ],
      },
      {
        en: [
          '**à** — Fourth tone. Sharp and falling, like a clipped, final "No."',
        ],
      },
      {
        en: [
          "**a** — Neutral tone. It's written without a tone mark, just as a plain letter.",
          "The neutral tone is shorter and unstressed.",
          "In the word Hǎo-shuō-de, the final syllable de carries the neutral tone.",
        ],
      },
    ],
  },
  proseNeutralTone: {
    en: [
      "All of Chinese is read in tones, syllable by syllable.",
      "The one exception is the neutral tone.",
      "When it appears in a word, the syllable before it gets the stress, and the neutral tone itself is just a short, unstressed sound.",
      "The word Hǎo-shuō-de isn't three equal beats.",
      "It's pronounced hao-shuò-de — the final syllable \"de\" fades out.",
      "Without the neutral tone, spoken Chinese wouldn't sound spoken.",
      "In fact the literary Chinese is often spoken like that - it has its charm but it is very unnatural for daily speaking.",
      "It's the neutral tone that keeps the rhythm from falling apart.",
    ],
    tldr: { en: ["The light tone is short and quiet."] },
    necessity: { en: ["It tells you which syllable to say louder."] },
  },
  proseNoWordBoundaries: {
    en: [
      "In regular Chinese, sentences are built from syllables, with no spaces or extra notation that will help us to understand where words start and end.",
      "To make the structure of Chinese clearer to us, Hao-shuo-de adds a few extra grammar rules on top.",
    ],
    tldr: {
      en: [
        "Hao-shuo-de adds spaces, hyphens, and quotes to show where words start and end.",
      ],
    },
    necessity: {
      en: ["Chinese has no spaces, so these help you read."],
    },
  },
  infoPunctuationHelpers: {
    title: { en: ["Hao-shuo-de pinyin helpers"] },
    items: [
      {
        en: [
          "**Words are written solid**. When several syllables form one dictionary word, they are never split apart, no matter how long the word is — {{word:dong4wu4}}, {{word:shui4jiao4}}, {{word:dan4shi4}}.",
          "Read the whole solid block as a single unit.",
        ],
      },
      {
        en: [
          "**A hyphen joins words into one**. A hyphen glues a small word onto another word, so the two work as one word. Sometimes that gives the word a new job, like turning a verb into a describing word (an adjective).",
        ],
        items: [
          { en: ["{{word:zhe4}}-**ge** — this"] },
          { en: ["{{word:yi1}}-**ge** — one thing"] },
          {
            en: ["{{word:hen3}}-**{{word:da4}}-de** — very big"],
          },
          {
            en: [
              "A hyphen always shows that the parts it joins work together as a single word.",
            ],
          },
        ],
      },
      {
        en: [
          "**Quotes set off the untranslatable**. Proper names and onomatopoeia — things that aren't really Hao-shuo-de vocabulary — are enclosed in quotes:",
        ],
        items: [
          { en: ['"Beijing" — Beijing'] },
          {
            en: [
              '{{word:jiao4}} "wāng-wāng" — barks "woof-woof"',
            ],
          },
          {
            en: [
              "If you see quotes, don't look the word up in the dictionary — it isn't a dictionary word.",
            ],
          },
        ],
      },
    ],
  },
  exercise1: { en: ["Break Zhōngguórén into its syllables."] },
  exercise2: {
    en: [
      "Which tone is this: à (fourth tone mark)? Describe it in one word.",
    ],
  },
  exercise3: {
    en: [
      "Rewrite {{Word:wo3}} {{word:hao3}} using tone-number notation instead of tone marks.",
    ],
  },
  exercise4: {
    en: [
      "Is {{word:hen3}}-{{word:da4}}-de one dictionary word, or a word plus a bound grammar piece? How do you know from the punctuation alone?",
    ],
  },
  answer1: {
    en: ["Zhōng-guó-rén (three syllables: Zhōng, guó, rén)."],
  },
  answer2: { en: ["Fourth tone — sharp and falling."] },
  answer3: { en: ["Wo3 hao3."] },
  answer4: {
    en: [
      "A word ({{word:da4}}, big) plus a bound grammar piece (-de) — the hyphen shows they're glued together, not a single solid dictionary word.",
    ],
  },
};

export default en;
