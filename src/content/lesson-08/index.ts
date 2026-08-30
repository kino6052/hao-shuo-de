// See src/lib/chapter-content.js for the schema this is transformed by.
// zh/ru intentionally blank -- carried over English-only from lesson-08.yaml.
import type { Entry } from '../../lib/chapter-entry-types.ts';

export const meta = {
  id: 'lesson-08',
  type: 'lesson',
  lessonNumber: 8,
  order: 8,
};

const content: Entry[] = [
  {
    type: 'title',
    en: ['Questions and Answers'],
    zh: [],
    ru: [],
  },
  {
    type: 'summary',
    en: [
      'Question words sit exactly where the answer would go; yes-or-no questions use the `{{word:ma}}` particle or an A-not-A reduplication; and answering "yes" or "no" means repeating the verb, since Hao-shuo-de has no dedicated word for either.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'vocab',
    term: '{{word:gong1ju4}}',
    ttsText: '工具',
    en: ['tool, machine, device'],
    zh: [],
    ru: [],
  },
  {
    type: 'vocab',
    term: '{{word:ta1}}',
    ttsText: '他',
    en: ['he, she, it, they'],
    zh: [],
    ru: [],
  },
  {
    type: 'vocab',
    term: '{{word:huo4zhe3}}',
    ttsText: '或者',
    en: ['or'],
    zh: [],
    ru: [],
  },
  {
    type: 'vocab',
    term: '{{word:shen2me}}',
    ttsText: '什么',
    en: ['what, which'],
    zh: [],
    ru: [],
  },
  {
    type: 'vocab',
    term: '{{word:wei4shen2me}}',
    ttsText: '为什么',
    en: ['why'],
    zh: [],
    ru: [],
  },
  {
    type: 'vocab',
    term: '{{word:zen3me}}',
    ttsText: '怎么',
    en: ['how'],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'To ask a "what" or "which" question in Hao-shuo-de, you do not alter the sentence structure.',
      'Simply place the question word `{{word:shen2me}}` directly into the syntactic position of the information you want to discover.',
    ],
    zh: [],
    ru: [],
    tldr: {
      en: ['Question words like `{{word:shen2me}}` sit exactly where the answer would go -- no sentence restructuring needed.'],
      zh: [],
      ru: [],
    },
    necessity: {
      en: ["Confirms that Hao-shuo-de's fixed SVO order (Lesson 3) stays fixed even for questions, unlike English which moves the question word to the front."],
      zh: [],
      ru: [],
    },
  },
  {
    type: 'info',
    title: { en: ['Yes-or-No Questions'], zh: [], ru: [] },
    items: [
      {
        text: {
          en: ['Yes-or-no questions are built entirely from standard Mandarin grammatical structures, using two constructions:'],
          zh: [],
          ru: [],
        },
        items: [
          {
            text: {
              en: ['**The `{{word:ma}}` Construction:** Append the question marker `{{word:ma}}` to the very end of a standard statement.'],
              zh: [],
              ru: [],
            },
          },
          {
            text: {
              en: ['**The A-`{{word:bu4}}`-A / A-`{{word:mei2}}`-A Construction:** Reduplicate the main verb or adjective with the negative particle `{{word:bu4}}` (or `{{word:mei2}}` if using the verb `{{word:you3}}`).'],
              zh: [],
              ru: [],
            },
          },
        ],
      },
    ],
  },
  {
    type: 'prose',
    en: [
      'To answer "yes," simply repeat the main verb.',
      'To answer "no," repeat the verb alongside its negative particle, or use `{{word:bu4}}` / `méiyǒu` on its own.',
    ],
    zh: [],
    ru: [],
    tldr: {
      en: ['Answer "yes" by repeating the verb; answer "no" by repeating it with its negative, or with `{{word:bu4}}`/`méiyǒu` alone.'],
      zh: [],
      ru: [],
    },
    necessity: {
      en: ['Hao-shuo-de has no dedicated word for "yes" or "no" -- this is the mechanism that replaces them.'],
      zh: [],
      ru: [],
    },
  },
  {
    type: 'example',
    pinyin: '{{Word:shen2me}} {{word:shi4}} {{word:xin1}}-{{word:de}}?',
    ttsText: '什么是新的？',
    en: ['What is new?'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:shen2me}} {{word:ren2}} {{word:zai4}} {{word:shuo1}}?',
    ttsText: '什么人在说？',
    en: ['Which person is speaking?'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:ta1}} {{word:you3}}-méi-{{word:you3}} {{word:hen3}}-{{word:duo1}}-{{word:de}} {{word:shui3guo3}}?',
    ttsText: '他有没有很多的水果？',
    en: ['Does he have many vegetables/fruits?'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:you3}}.',
    ttsText: '有。',
    en: ['Yes. / He has.'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:fu4mu3}}?',
    ttsText: '你听不听父母？',
    en: ['Do you obey your parents?'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:bu4}} {{word:ting1}}.',
    ttsText: '不听。',
    en: ["No. / I don't obey."],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:ta1}} {{word:zai4}} {{word:chi1}} {{word:shen2me}}?',
    ttsText: '它在吃什么？',
    en: ['What is it eating?'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:ni3}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}} {{word:ma}}?',
    ttsText: '你给她在水里的动物吗？',
    en: ['Are you giving her a swimming animal?'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:wei4shen2me}} {{word:ni3}} {{word:gei3}} {{word:ta1}} {{word:zai4}}-{{word:shui3}}-lǐ-{{word:de}} {{word:dong4wu4}}?',
    ttsText: '为什么你给她在水里的动物？',
    en: ['Why are you giving her a swimming animal?'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: '{{Word:ni3}} {{word:zen3me}} {{word:ba3}} Hǎo-shuō-de {{word:bian4}} {{word:zhi1dao4}}?',
    ttsText: '你怎么把好说的变知道？',
    en: ['How do you learn Hao-shuo-de?'],
    zh: [],
    ru: [],
  },
  {
    type: 'exercise',
    en: ['What tools do you have?'],
    zh: [],
    ru: [],
  },
  {
    type: 'exercise',
    en: ['Does he listen?'],
    zh: [],
    ru: [],
  },
  {
    type: 'exercise',
    en: ['Is the tool small?'],
    zh: [],
    ru: [],
  },
  {
    type: 'answer',
    en: ['{{Word:ni3}} {{word:you3}} {{word:shen2me}} {{word:gong1ju4}}?'],
    zh: [],
    ru: [],
    ttsText: '你有什么工具？',
  },
  {
    type: 'answer',
    en: ['{{Word:ta1}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? (or {{Word:ta1}} {{word:ting1}} {{word:ma}}?)'],
    zh: [],
    ru: [],
    ttsText: '他听不听？（或：他听吗？）',
  },
  {
    type: 'answer',
    en: ['{{Word:gong1ju4}} {{word:xiao3}}-{{word:bu4}}-{{word:xiao3}}? (or {{Word:gong1ju4}} {{word:xiao3}} {{word:ma}}?)'],
    zh: [],
    ru: [],
    ttsText: '工具小不小？（或：工具小吗？）',
  },
];

export default content;
