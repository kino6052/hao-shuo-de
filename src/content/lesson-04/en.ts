// English text for lesson-04, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`. No comments repeated in this file.
import type { PartialByKey } from "../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const en: PartialByKey<LessonShape> = {
  title: { en: ["Pointing at People and Things"] },
  summary: {
    en: [
      "We often point at things and people instead of naming them.",
      'In this lesson, you\'ll be able to say "this one", "that one", "I am a person.", "we", "my hand", and "your family".',
    ],
  },
  vocabNa: { en: ["that, those"] },
  prosePointersAreNouns: {
    en: [
      'We often point at people and things. In English we use words like "this", "that", "I", and "you". We call them pointers (pronouns).',
      '<audio-example zh="这">{{word:zhe4}}</audio-example> means "this" and <audio-example zh="那">{{word:na4}}</audio-example> means "that".',
      "A pronoun works just like a noun. It can even be a whole sentence by itself.",
    ],
    necessity: { en: ["Now you can point at things."] },
    tldr: {
      en: ["{{word:zhe4}} (this) and {{word:na4}} (that) work like nouns."],
    },
  },
  pointersExample01: { en: ["This."] },
  pointersExample02: { en: ["That."] },
  proseMandarinMeasureWords: {
    en: [
      "In Chinese, you can't put a number or a pronoun right before a noun (you can't directly say \"this apple\"). A small counting word (measure word) goes in between.",
      "Full Chinese has dozens of these measure words, one for each kind of thing: flat things, long things, animals, and so on.",
      "Learners spend years getting them right.",
    ],
    tldr: {
      en: [
        "Full Chinese uses a different measure word for each kind of thing.",
      ],
    },
    necessity: {
      en: ["It shows how much work Hao-shuo-de saves you."],
    },
  },
  vocabGe: { en: ["goes between this / that / a number and a noun"] },
  proseGeIsUniversal: {
    en: [
      "Hao-shuo-de keeps only one of them: `{{word:ge4}}`.",
      "It works for everything: a person, an animal, a tool, a fruit, or an idea.",
      'Put it after a pronoun: `{{word:zhe4}}-ge` means "this one", and `{{word:na4}}-ge` means "that one".',
      'Add a noun to say which thing: `{{word:zhe4}}-ge {{word:shui3guo3}}` means "this fruit".',
    ],
    tldr: {
      en: ["Hao-shuo-de uses {{word:ge4}} for everything."],
    },
    necessity: { en: ["You only need to learn one measure word."] },
  },
  infoUniversalClassifier: {
    title: { en: ["One Counting Word for Everything"] },
    items: [
      {
        en: [
          "{{word:zhe4}}, {{word:na4}}, or a number + ge + noun. The same `{{word:ge4}}` works with every noun.",
        ],
      },
    ],
  },
  example1L11: { en: ["This person."] },
  example2L11: { en: ["That animal."] },
  example3L11: { en: ["That woman."] },
  example4L11: { en: ["This fruit is good."] },
  example5L11: { en: ["That thing is a fruit."] },
  vocabWo: { en: ["I, me"] },
  vocabNi: { en: ["you"] },
  vocabTa: { en: ["he, she, it, they"] },
  prosePointingToPeople: {
    en: [
      "You can also point at people: the one speaking, the one listening, and anyone else.",
      '{{word:wo3}} ("I, me") points at the speaker. {{word:ni3}} ("you") points at the listener. {{word:ta1}} ("he, she") points at someone else.',
      "Like {{word:zhe4}} and {{word:na4}}, they work just like nouns.",
    ],
    tldr: {
      en: [
        '{{word:wo3}} is "I", {{word:ni3}} is "you", and {{word:ta1}} is "he" or "she".',
      ],
    },
    necessity: { en: ["Now you can talk about yourself and others."] },
  },
  pointToPeopleExample01: { en: ["I. / Me."] },
  pointToPeopleExample02: { en: ["You."] },
  pointToPeopleExample03: { en: ["He, she."] },
  vocabMen: {
    en: ['more than one person: {{word:wo3}}-{{word:men}} means "we"'],
  },
  prosePluralPointers: {
    en: [
      'To point at more than one person, add {{word:men}}: {{word:wo3}}-{{word:men}} ("we, us"), {{word:ni3}}-{{word:men}} ("you all"), {{word:ta1}}-{{word:men}} ("they, them").',
      "{{word:men}} only goes after pronouns and other words for people. It doesn't go after other nouns.",
    ],
    tldr: {
      en: ['Add {{word:men}} to say "we", "you all", and "they".'],
    },
    necessity: { en: ["Now you can talk about groups of people."] },
  },
  pluralPointersExample01: { en: ["We, us."] },
  pluralPointersExample02: { en: ["You all."] },
  pluralPointersExample03: { en: ["They, them."] },
  vocabJia: { en: ["home, family"] },
  vocabTou: { en: ["head"] },
  vocabShou: { en: ["hand"] },
  vocabJiao: { en: ["foot"] },
  prosePossessionDe: {
    en: [
      'To say whose something is, add <code>-{{word:de}}</code> (from Lesson 3): <audio-example zh="我的">{{word:wo3}}-{{word:de}}</audio-example> ("my"), <audio-example zh="你的">{{word:ni3}}-{{word:de}}</audio-example> ("your").',
      "It's the same <code>-{{word:de}}</code> that joins an adjective to a noun.",
    ],
    tldr: {
      en: [
        'Add {{word:de}} to say whose it is: {{word:wo3}}-{{word:de}} means "my".',
      ],
    },
    necessity: { en: ["Now you can say who something belongs to."] },
  },
  posessionDeExample01: { en: ["My fruit."] },
  posessionDeExample02: { en: ["Your family."] },
  posessionDeExample03: { en: ["My good person."] },
  posessionDeExample04: { en: ["My head."] },
  posessionDeExample05: { en: ["Your feet are big."] },
  posessionDeExample06: { en: ["My hands are big."] },
  posessionDeExample07: { en: ["His head is small."] },
  posessionDeExample08: { en: ["Her feet are small."] },

  exercise1L03: { en: ["This one is an animal."] },
  exercise2L03: { en: ["That one is a woman."] },
  exercise1L11: { en: ['Say "this person", using ge.'] },
  exercise2L11: { en: ['Say "this animal", using ge.'] },
  exercise3L11: { en: ['Say "That fruit is good.", using ge.'] },
  exercise1: { en: ["Your fruit is good."] },
  exercise2: { en: ["That is your family."] },
  exercise3: { en: ["I am a good person."] },
  exercise4: { en: ["They are people."] },
  exercise5: { en: ["Your hand is big."] },
  exercise6: { en: ["Her head is big."] },
  exercise7: { en: ["My feet are small."] },
  answer1L03: {
    en: ["{{Word:zhe4}}-ge {{word:shi4}} {{word:dong4wu4}}."],
  },
  answer2L03: {
    en: ["{{Word:na4}}-ge {{word:shi4}} {{word:nv3ren2}}."],
  },
  answer1L11: { en: ["{{Word:zhe4}}-ge {{word:ren2}}."] },
  answer2L11: { en: ["{{Word:zhe4}}-ge {{word:dong4wu4}}."] },
  answer3L11: {
    en: ["{{Word:na4}}-ge {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}."],
  },
  answer1: {
    en: [
      "{{Word:ni3}}-{{word:de}} {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
  answer2: {
    en: ["{{Word:na4}} {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:jia1}}."],
  },
  answer3: {
    en: ["{{Word:wo3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}."],
  },
  answer4: {
    en: ["{{Word:ta1}}-{{word:men}} {{word:shi4}} {{word:ren2}}."],
  },
  answer5: {
    en: ["{{Word:ni3}}-{{word:de}} {{word:shou3}} {{word:hen3}} {{word:da4}}."],
  },
  answer6: {
    en: ["{{Word:ta1}}-{{word:de}} {{word:tou2}} {{word:hen3}} {{word:da4}}."],
  },
  answer7: {
    en: [
      "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:xiao3}}.",
    ],
  },
  faqGeForEverything: {
    question: { en: ["Is {{word:ge4}} really right for everything?"] },
    en: [
      "Full Mandarin has other counting words for some kinds of things. But {{word:ge4}} is the most common one, and people understand it with any noun.",
    ],
  },
  faqTaHeOrShe: {
    question: { en: ["Does {{word:ta1}} mean \"he\" or \"she\"?"] },
    en: [
      "Both, and \"it\" too. They all sound exactly the same. The situation tells you who it is.",
    ],
  },
  faqDropDe: {
    question: { en: ["Can I say {{word:wo3}} {{word:jia1}} without -{{word:de}}?"] },
    en: [
      "Mandarin speakers often do, for family and home: {{word:wo3}} {{word:jia1}}. With -{{word:de}}, it's always correct, so Hao-shuo-de keeps it.",
    ],
  },
};

export default en;
