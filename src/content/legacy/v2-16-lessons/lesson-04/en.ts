// English text for lesson-04, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Pointing at people and things"] },
  summary: {
    en: [
      'In languages we often want to point at people and things. In English we use words like "this", "that", "me", "you" for that. All these words have their equivalents in Hao-shuo-de',
    ],
  },

  vocabWo: { en: ["I, me"] },
  vocabMen: { en: ["plural marker for pronouns and people"] },
  vocabNanren: { en: ["man, male"] },
  vocabNi: { en: ["you"] },
  vocabQun: { en: ["community, group"] },
  vocabNa: { en: ["that, those"] },
  vocabZhe: { en: ["this, these"] },

  prosePointersAreNouns: {
    en: [
      'In languages we often want to point at people and things. In English we use words like "this", "that", "me", "you" for that. All these words have their equivalents in Hao-shuo-de',
    ],
    necessity: {
      en: ["Explains how pointers work"],
    },
  },

  pointersExample01: { en: ["This."] },
  pointersExample02: { en: ["That."] },

  prosePointingToPeople: {
    en: [
      "Beyond pointing at things, Hao-shuo-de also has words for pointing at people: the person speaking, the person being spoken to, and everyone else.",
      '{{word:wo3}} ("I, me") points at the speaker, {{word:ni3}} ("you") points at the listener, and {{word:ta1}} ("he, she") points at someone else entirely -- the same three-way split English makes with "I", "you", and "he/she".',
      "Like {{word:zhe4}} and {{word:na4}}, these words are ordinary nouns: they can stand alone as a full sentence, or sit anywhere else a noun would.",
    ],
    tldr: {
      en: [
        '{{word:wo3}} ("I/me"), {{word:ni3}} ("you"), and {{word:ta1}} ("he/she") point at the speaker, the listener, and everyone else.',
      ],
    },
    necessity: {
      en: [
        "Introduces the three basic pronouns pointing at people, extending the pointing-word pattern just shown for things.",
      ],
    },
  },

  pointToPeopleExample01: { en: ["I. / Me."] },
  pointToPeopleExample02: { en: ["You."] },
  pointToPeopleExample03: { en: ["He, she."] },

  prosePluralPointers: {
    en: [
      'Each of those three pointers can be made plural by attaching {{word:men}} after it with a hyphen: {{word:wo3}}-{{word:men}} ("we, us"), {{word:ni3}}-{{word:men}} ("you all"), {{word:ta1}}-{{word:men}} ("they, them").',
      "{{word:men}} only ever attaches to pronouns and other words for people -- it isn't a general plural marker for every noun.",
    ],
    tldr: {
      en: [
        'Attach {{word:men}} to a pointer to make it plural: {{word:wo3}}-{{word:men}} ("we"), {{word:ni3}}-{{word:men}} ("you all"), {{word:ta1}}-{{word:men}} ("they").',
      ],
    },
    necessity: {
      en: [
        "Shows how to pluralize the pronouns just introduced, and marks {{word:men}}'s scope as limited to people-words.",
      ],
    },
  },

  pluralPointersExample01: { en: ["We, us."] },
  pluralPointersExample02: { en: ["You all."] },
  pluralPointersExample03: { en: ["They, them."] },

  prosePossessionDe: {
    en: [
      'If you want to express that something is yours, or his, or similar ideas you need to use <code>-{{word:de}}</code>, the same connecting particle from Lesson 3: <audio-example zh="我的">{{word:wo3}}-{{word:de}}</audio-example> ("my"), <audio-example zh="你的">{{word:ni3}}-{{word:de}}</audio-example> ("your").',
      "Same hyphen, same job — gluing one word onto another to form a single descriptive unit — whether what's doing the describing is an adjective, a verb turned into a noun, or now, a pronoun.",
    ],
    tldr: {
      en: [
        "If you want to express that something is yours, or his, or similar ideas you need to use <code>-{{word:de}}</code>",
      ],
    },
    necessity: {
      en: [
        "Shows -{{word:de}} doing the same job a third time (after adjectives and verb-to-noun), confirming it's one general binding rule, not three separate ones.",
      ],
    },
  },

  posessionDeExample01: { en: ["My fruit."] },
  posessionDeExample02: { en: ["Your community."] },
  posessionDeExample03: { en: ["My good person."] },

  example1: { en: ["I am a person."] },
  example2: { en: ["I am a man."] },
  example3: { en: ["You are a good person."] },
  example4: { en: ["This is my document."] },
  example5: { en: ["That is your thing."] },
  example6: { en: ["My community is large."] },
  example7: { en: ["The man's animal is small."] },

  exercise1: { en: ["Your fruit is good."] },
  exercise2: { en: ["That is your community."] },
  exercise3: { en: ["I am a good person."] },

  answer1: {
    en: [
      "{{Word:ni3}}-{{word:de}} {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
  answer2: {
    en: ["{{Word:na4}} {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:qun2}}."],
  },
  answer3: {
    en: ["{{Word:wo3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}."],
  },
};

export default en;
