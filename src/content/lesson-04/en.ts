// English text for lesson-04, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Pointing at people and things"] },
  summary: {
    en: [
      'Pronouns like {{word:wo3}} ("I") and {{word:ni3}} ("you") behave exactly like ordinary number-neutral nouns and take the Subject spot; {{word:wo3}} is strictly singular, and plural forms like "we" are built by adding other nouns (e.g., {{word:wo3}} {{word:he2}} {{word:ta1}}). Possession is shown by binding a pronoun to a noun with -{{word:de}}, the same particle from Lesson 3.',
    ],
  },

  vocabWo: { en: ["I, me"] },
  vocabNanren: { en: ["man, male"] },
  vocabNi: { en: ["you"] },
  vocabNa: { en: ["that, those"] },
  vocabZhe: { en: ["this, these"] },

  prosePronounsAreNouns: {
    en: [
      'Hao-shuo-de pronouns behave like any other noun you\'ve already met — <audio-example zh="我">{{word:wo3}}</audio-example> ("I") and <audio-example zh="你">{{word:ni3}}</audio-example> ("you") simply take the Subject spot from Lesson 2, no special treatment required.',
      "",
      'Like every Hao-shuo-de noun, they carry no number of their own, but unlike English, <audio-example zh="我">{{word:wo3}}</audio-example> does not double as "we" — it always means "I" (singular).',
      'To say "we," you combine it with other words: <audio-example zh="我和他">{{word:wo3}} {{word:he2}} {{word:ta1}}</audio-example> ("I and him/her") or <audio-example zh="我和多人">{{word:wo3}} {{word:he2}} {{word:duo1}} {{word:ren2}}</audio-example> ("I and many people").',
      'The same goes for <audio-example zh="你">{{word:ni3}}</audio-example>: it\'s "you" (singular) by default; for "you all," you\'d say something like <audio-example zh="你和他们">{{word:ni3}} {{word:he2}} tāmen</audio-example> ("you and them") or add a number.',
      "Context and added nouns do the work that English does with separate plural pronoun forms.",
    ],
    tldr: {
      en: [
        'Pronouns are ordinary nouns that fill the Subject spot; {{word:wo3}} means "I" only, and plural forms like "we" are built with additional nouns.',
      ],
    },
    necessity: {
      en: [
        'Clarifies that {{word:wo3}} is strictly singular, unlike English "I/we," and shows how plural pronouns are formed compositionally rather than with a separate set of words.',
      ],
    },
  },
  prosePossessionDe: {
    en: [
      'To show possession, bind the pronoun to a noun with <code>-{{word:de}}</code>, the same connecting particle from Lesson 3: <audio-example zh="我的">{{word:wo3}}-{{word:de}}</audio-example> ("my"), <audio-example zh="你的">{{word:ni3}}-{{word:de}}</audio-example> ("your").',
      "Same hyphen, same job — gluing one word onto another to form a single descriptive unit — whether what's doing the describing is an adjective, a verb turned into a noun, or now, a pronoun.",
    ],
    tldr: {
      en: [
        'Possession is shown by binding a pronoun to a noun with -{{word:de}}: {{word:wo3}}-{{word:de}} ("my"), {{word:ni3}}-{{word:de}} ("your").',
      ],
    },
    necessity: {
      en: [
        "Shows -{{word:de}} doing the same job a third time (after adjectives and verb-to-noun), confirming it's one general binding rule, not three separate ones.",
      ],
    },
  },

  example1: { en: ["I am a person."] },
  example2: { en: ["I am a man."] },
  example3: { en: ["You are a good person."] },
  example4: { en: ["This is my document."] },
  example5: { en: ["Your place is new."] },
  example6: { en: ["My community is large."] },
  example7: { en: ["The man's animal is small."] },

  exercise1: { en: ["Your fruit is good."] },
  exercise2: { en: ["This is a new community."] },
  exercise3: { en: ["I am a good person."] },

  answer1: {
    en: [
      "{{Word:ni3}}-{{word:de}} {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
  answer2: {
    en: [
      "{{Word:zhe4}}-ge {{word:shi4}} {{word:xin1}}-{{word:de}} {{word:qun2}}.",
    ],
  },
  answer3: {
    en: ["{{Word:wo3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}."],
  },
};

export default en;
