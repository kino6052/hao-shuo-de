// See src/lib/chapter-content.js for the schema this is transformed by.
// zh/ru intentionally blank -- carried over English-only from lesson-03.yaml.
// A '' entry inside a sentence array is a deliberate paragraph break (joins
// to '\n\n', which markdown reads as a new <p>), not a missing sentence.
import type { Entry } from '../../lib/chapter-entry-types.ts';

export const meta = {
  id: 'lesson-03',
  type: 'lesson',
  lessonNumber: 3,
  order: 3,
};

const content: Entry[] = [
  {
    type: 'title',
    en: ['Sentences'],
    zh: [],
    ru: [],
  },
  {
    type: 'summary',
    en: [
      'Hao-shuo-de sentences follow a fixed Subject-Verb-Object order with no case marking; the copula {{word:shi4}} links a subject to a classifying noun, and quantity (like {{word:duo1}}) is expressed by a separate word, never by the noun itself.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'Hao-shuo-de has no case endings — no special ending on a noun to mark "the one doing this" versus "the one this is being done to."',
      'All of that information lives in exactly one place: word order.',
      'Every Hao-shuo-de sentence follows the same fixed shape:',
      '',
      'Subject + Verb + Object',
      '',
      "Swap the order and you don't get emphasis or a different flavor of the same sentence — you get a different sentence, possibly a wrong one.",
      "Position isn't a stylistic choice; it's the grammar.",
      '',
      'The simplest sentence you can build has no object at all — just a subject, the verb <audio-example zh="是">{{word:shi4}}</audio-example> ("is/am/are"), and a noun that describes or classifies it:',
      '',
      'Subject + <audio-example zh="是">{{word:shi4}}</audio-example> + Noun',
      '',
      'This "verb" never changes shape.',
      'Whoever is speaking, whatever is being described, <audio-example zh="是">{{word:shi4}}</audio-example> stays <audio-example zh="是">{{word:shi4}}</audio-example>.',
    ],
    zh: [],
    ru: [],
    tldr: {
      en: ['Sentences follow a fixed Subject-Verb-Object order; the simplest sentence uses {{word:shi4}} to link a subject to a classifying noun.'],
      zh: [],
      ru: [],
    },
    necessity: {
      en: ['Establishes word order as the only signal for grammatical role, since Hao-shuo-de has no case endings to mark it instead.'],
      zh: [],
      ru: [],
    },
  },
  {
    type: 'example',
    pinyin: '{{Word:zhe4}}-ge {{word:shi4}} {{word:ren2}}.',
    ttsText: '这个是人。',
    en: ['This is a person.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:zhe4}}-ge {{word:shi4}} {{word:shui3guo3}}.',
    ttsText: '这个是水果。',
    en: ['This is a fruit.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:yi1}}-ge {{word:xie3}}-{{word:de}} {{word:dong1xi}} {{word:shi4}} {{word:dong1xi}}.',
    ttsText: '一个写的东西是东西。',
    en: ['A written thing (book/document) is a thing.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:ren2}} {{word:shi4}} {{word:nv3ren2}}.',
    ttsText: '人是女人。',
    en: ['The person is a woman.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:dong4wu4}} {{word:shi4}} {{word:dong1xi}}.',
    ttsText: '动物是东西。',
    en: ['Animals are things.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}.',
    ttsText: '女人是人。',
    en: ['Women are people.'],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'Look closely at two of the examples above: <audio-example zh="人是女人">{{Word:ren2}} {{word:shi4}} {{word:nv3ren2}}</audio-example> ("the person is a woman") and <audio-example zh="女人是人">{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}</audio-example> ("women are people").',
      'Same three words, same pattern, opposite scope — one is about a single, specific person; the other is a general statement about the whole category.',
      "Nothing in the sentence marks the difference; nothing needs to.",
      'Hao-shuo-de nouns already carry no number and no article — recall Lesson 2, context decides how many.',
      'The same discipline applies here: context decides whether you mean one particular thing or the whole class of things.',
      "The words don't change; only what you already know about the situation does.",
    ],
    zh: [],
    ru: [],
    tldr: {
      en: ['The same words can express a claim about one specific thing or about a whole category — context decides which, not the words.'],
      zh: [],
      ru: [],
    },
    necessity: {
      en: ["Shows that the number/specificity ambiguity already established for nouns in Lesson 2 carries through into full sentences too."],
      zh: [],
      ru: [],
    },
  },
  {
    type: 'prose',
    en: [
      "And when you do need to make quantity explicit, the job still doesn't fall on the noun — it falls on a separate word in the sentence.",
      '<audio-example zh="这多的东西是写的东西">{{Word:zhe4}} {{word:duo1}}-{{word:de}} {{word:dong1xi}} {{word:shi4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.</audio-example> ("These [many] things are written things," i.e. "These are the books") uses <audio-example zh="多">{{word:duo1}}</audio-example> ("many"), bound with `-{{word:de}}` the same way an adjective would be.',
      "Notice what's missing: <audio-example zh=\"个\">-ge</audio-example>.",
      "Its whole job, from Lesson 2, is to individuate one countable unit — <audio-example zh=\"这个\">{{word:zhe4}}-ge</audio-example> points at exactly one thing.",
      "<audio-example zh=\"多\">{{word:duo1}}</audio-example> isn't pointing at one of anything; it names a bulk quantity instead, so there's nothing left for <audio-example zh=\"个\">-ge</audio-example> to individuate, and it simply drops out.",
      "Number, in other words, is never a property the noun itself carries — it's a decision made elsewhere in the sentence, one word at a time, depending on what job that word is doing.",
    ],
    zh: [],
    ru: [],
    tldr: {
      en: ['To make quantity explicit, add a separate word like {{word:duo1}} — and once {{word:duo1}} names a bulk amount, the individuating measure word -ge drops out.'],
      zh: [],
      ru: [],
    },
    necessity: {
      en: ['Extends Lesson 2\'s {{word:ge4}} rule: -ge only individuates single countable units, so it has nothing to do once {{word:duo1}} names a bulk amount instead.'],
      zh: [],
      ru: [],
    },
  },
  {
    type: 'exercise',
    en: ['This is a document.'],
    zh: [],
    ru: [],
  },
  {
    type: 'exercise',
    en: ['A woman is a human.'],
    zh: [],
    ru: [],
  },
  {
    type: 'exercise',
    en: ['Animals are beings.'],
    zh: [],
    ru: [],
  },
  {
    type: 'answer',
    en: ['{{Word:zhe4}}-ge {{word:shi4}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.'],
    zh: [],
    ru: [],
    ttsText: '这个是写的东西。',
  },
  {
    type: 'answer',
    en: ['{{Word:nv3ren2}} {{word:shi4}} {{word:ren2}}.'],
    zh: [],
    ru: [],
    ttsText: '女人是人。',
  },
  {
    type: 'answer',
    en: ['{{Word:dong4wu4}} {{word:shi4}} {{word:dong1xi}}.'],
    zh: [],
    ru: [],
    ttsText: '动物是东西。',
  },
];

export default content;
