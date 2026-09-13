// See src/lib/chapter-content.js for the schema this is transformed by.
// zh/ru intentionally blank -- carried over English-only from lesson-05.yaml.
import type { Entry } from '../../lib/chapter-entry-types.ts';

export const meta = {
  id: 'lesson-05',
  type: 'lesson',
  lessonNumber: 5,
  order: 5,
};

const content: Entry[] = [
  {
    type: 'title',
    en: ['You and I'],
    zh: [],
    ru: ['Ты и я'],
  },
  {
    type: 'summary',
    en: [
      'Pronouns like {{word:wo3}} ("I") and {{word:ni3}} ("you") behave exactly like ordinary number-neutral nouns and take the Subject spot; {{word:wo3}} is strictly singular, and plural forms like "we" are built by adding other nouns (e.g., {{word:wo3}} {{word:he2}} {{word:ta1}}). Possession is shown by binding a pronoun to a noun with -{{word:de}}, the same particle from Lessons 2 and 4.',
    ],
    zh: [],
    ru: [
      'Местоимения вроде {{word:wo3}} («я») и {{word:ni3}} («ты») ведут себя точно как обычные, нейтральные к числу существительные, и занимают место Подлежащего; {{word:wo3}} всегда единственное число, а множественные формы вроде «мы» строятся добавлением других существительных (например, {{word:wo3}} {{word:he2}} {{word:ta1}}). Принадлежность показывается присоединением местоимения к существительному через -{{word:de}} — ту же частицу из Уроков 2 и 4.',
    ],
  },
  {
    type: 'vocab',
    term: '{{word:wo3}}',
    ttsText: '我',
    en: ['I, me'],
    zh: [],
    ru: ['я, меня'],
  },
  {
    type: 'vocab',
    term: '{{word:nan2ren2}}',
    ttsText: '男人',
    en: ['man, male'],
    zh: [],
    ru: ['мужчина, мужского пола'],
  },
  {
    type: 'vocab',
    term: '{{word:ni3}}',
    ttsText: '你',
    en: ['you'],
    zh: [],
    ru: ['ты, вы'],
  },
  {
    type: 'vocab',
    term: '{{word:qun2}}',
    ttsText: '群',
    en: ['community, group'],
    zh: [],
    ru: ['сообщество, группа'],
  },
  {
    type: 'vocab',
    term: '{{word:xin1}}',
    ttsText: '新',
    en: ['new, another, fresh'],
    zh: [],
    ru: ['новый, другой, свежий'],
  },
  {
    type: 'prose',
    en: [
      'Hao-shuo-de pronouns behave like any other noun you\'ve already met — <audio-example zh="我">{{word:wo3}}</audio-example> ("I") and <audio-example zh="你">{{word:ni3}}</audio-example> ("you") simply take the Subject spot from Lesson 3, no special treatment required.',
      '',
      "Like every Hao-shuo-de noun, they carry no number of their own, but unlike English, <audio-example zh=\"我\">{{word:wo3}}</audio-example> does not double as \"we\" — it always means \"I\" (singular).",
      'To say "we," you combine it with other words: <audio-example zh="我和他">{{word:wo3}} {{word:he2}} {{word:ta1}}</audio-example> ("I and him/her") or <audio-example zh="我和多人">{{word:wo3}} {{word:he2}} {{word:duo1}} {{word:ren2}}</audio-example> ("I and many people").',
      'The same goes for <audio-example zh="你">{{word:ni3}}</audio-example>: it\'s "you" (singular) by default; for "you all," you\'d say something like <audio-example zh="你和他们">{{word:ni3}} {{word:he2}} tāmen</audio-example> ("you and them") or add a number.',
      'Context and added nouns do the work that English does with separate plural pronoun forms.',
    ],
    zh: [],
    ru: [
      'Местоимения хао-шуо-дэ ведут себя как любые другие существительные, с которыми вы уже встречались — <audio-example zh="我">{{word:wo3}}</audio-example> («я») и <audio-example zh="你">{{word:ni3}}</audio-example> («ты») просто занимают место Подлежащего из Урока 3, без специальных правил.',
      '',
      'Как и любое существительное хао-шуо-дэ, они не имеют собственного числа, но в отличие от английского, <audio-example zh="我">{{word:wo3}}</audio-example> не означает одновременно «мы» — оно всегда «я» (единственное число).',
      'Чтобы сказать «мы», нужно соединить его с другими словами: <audio-example zh="我和他">{{word:wo3}} {{word:he2}} {{word:ta1}}</audio-example> («я и он/она») или <audio-example zh="我和多人">{{word:wo3}} {{word:he2}} {{word:duo1}} {{word:ren2}}</audio-example> («я и много людей»).',
      'То же самое с <audio-example zh="你">{{word:ni3}}</audio-example>: по умолчанию это «ты» (единственное число); для «вы» (множественное) нужно сказать что-то вроде <audio-example zh="你和他们">{{word:ni3}} {{word:he2}} tāmen</audio-example> («ты и они») или добавить число.',
      'Контекст и добавленные существительные делают ту работу, которую в английском выполняют отдельные формы множественного числа местоимений.',
    ],
    tldr: {
      en: ['Pronouns are ordinary nouns that fill the Subject spot; {{word:wo3}} means "I" only, and plural forms like "we" are built with additional nouns.'],
      zh: [],
      ru: ['Местоимения — это обычные существительные, занимающие место Подлежащего; {{word:wo3}} означает только «я», а множественные формы вроде «мы» строятся с помощью дополнительных существительных.'],
    },
    necessity: {
      en: ['Clarifies that {{word:wo3}} is strictly singular, unlike English "I/we," and shows how plural pronouns are formed compositionally rather than with a separate set of words.'],
      zh: [],
      ru: ['Уточняет, что {{word:wo3}} всегда единственное число, в отличие от английского «I/we», и показывает, как множественные местоимения образуются составным способом, а не с помощью отдельного набора слов.'],
    },
  },
  {
    type: 'prose',
    en: [
      'To show possession, bind the pronoun to a noun with <code>-{{word:de}}</code>, the same connecting particle from Lessons 2 and 4: <audio-example zh="我的">{{word:wo3}}-{{word:de}}</audio-example> ("my"), <audio-example zh="你的">{{word:ni3}}-{{word:de}}</audio-example> ("your").',
      "Same hyphen, same job — gluing one word onto another to form a single descriptive unit — whether what's doing the describing is an adjective, a verb turned into a noun, or now, a pronoun.",
    ],
    zh: [],
    ru: [
      'Чтобы показать принадлежность, присоедините местоимение к существительному через <code>-{{word:de}}</code> — ту же связующую частицу из Уроков 2 и 4: <audio-example zh="我的">{{word:wo3}}-{{word:de}}</audio-example> («мой»), <audio-example zh="你的">{{word:ni3}}-{{word:de}}</audio-example> («твой»).',
      'Тот же дефис, та же работа — склеить одно слово с другим в единую описательную единицу — независимо от того, что именно описывает: прилагательное, превращённый в существительное глагол или, как теперь, местоимение.',
    ],
    tldr: {
      en: ['Possession is shown by binding a pronoun to a noun with -{{word:de}}: {{word:wo3}}-{{word:de}} ("my"), {{word:ni3}}-{{word:de}} ("your").'],
      zh: [],
      ru: ['Принадлежность показывается присоединением местоимения к существительному через -{{word:de}}: {{word:wo3}}-{{word:de}} («мой»), {{word:ni3}}-{{word:de}} («твой»).'],
    },
    necessity: {
      en: ["Shows -{{word:de}} doing the same job a third time (after adjectives and verb-to-noun), confirming it's one general binding rule, not three separate ones."],
      zh: [],
      ru: ['Показывает, что -{{word:de}} выполняет ту же работу уже в третий раз (после прилагательных и превращения глагола в существительное), подтверждая, что это одно общее правило связывания, а не три разных.'],
    },
  },
  {
    type: 'example',
    pinyin: '{{Word:wo3}} {{word:shi4}} {{word:ren2}}.',
    ttsText: '我是人。',
    en: ['I am a person.'],
    zh: [],
    ru: ['Я человек.'],
  },
  {
    type: 'example',
    pinyin: '{{Word:wo3}} {{word:shi4}} {{word:nan2ren2}}.',
    ttsText: '我是男人。',
    en: ['I am a man.'],
    zh: [],
    ru: ['Я мужчина.'],
  },
  {
    type: 'example',
    pinyin: '{{Word:ni3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}.',
    ttsText: '你是好的人。',
    en: ['You are a good person.'],
    zh: [],
    ru: ['Ты хороший человек.'],
  },
  {
    type: 'example',
    pinyin: '{{Word:zhe4}}-ge {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1xi}}.',
    ttsText: '这个是我的写的东西。',
    en: ['This is my document.'],
    zh: [],
    ru: ['Это мой документ.'],
  },
  {
    type: 'example',
    pinyin: '{{Word:ni3}}-{{word:de}} {{word:di4fang1}} {{word:hen3}} {{word:xin1}}.',
    ttsText: '你的地方很新。',
    en: ['Your place is new.'],
    zh: [],
    ru: ['Твоё место новое.'],
  },
  {
    type: 'example',
    pinyin: '{{Word:wo3}}-{{word:de}} {{word:qun2}} {{word:hen3}} {{word:da4}}.',
    ttsText: '我的群很大。',
    en: ['My community is large.'],
    zh: [],
    ru: ['Моё сообщество большое.'],
  },
  {
    type: 'example',
    pinyin: '{{Word:nan2ren2}}-{{word:de}} {{word:dong4wu4}} {{word:hen3}} {{word:xiao3}}.',
    ttsText: '男人的动物很小。',
    en: ["The man's animal is small."],
    zh: [],
    ru: ['Животное этого мужчины маленькое.'],
  },
  {
    type: 'exercise',
    en: ['Your fruit is good.'],
    zh: [],
    ru: ['Твой фрукт хороший.'],
  },
  {
    type: 'exercise',
    en: ['This is a new community.'],
    zh: [],
    ru: ['Это новое сообщество.'],
  },
  {
    type: 'exercise',
    en: ['I am a good person.'],
    zh: [],
    ru: ['Я хороший человек.'],
  },
  {
    type: 'answer',
    en: ['{{Word:ni3}}-{{word:de}} {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}.'],
    zh: [],
    ru: ['{{Word:ni3}}-{{word:de}} {{word:shui3guo3}} {{word:hen3}} {{word:hao3}}.'],
    ttsText: '你的水果很好。',
  },
  {
    type: 'answer',
    en: ['{{Word:zhe4}}-ge {{word:shi4}} {{word:xin1}}-{{word:de}} {{word:qun2}}.'],
    zh: [],
    ru: ['{{Word:zhe4}}-ge {{word:shi4}} {{word:xin1}}-{{word:de}} {{word:qun2}}.'],
    ttsText: '这个是新的群。',
  },
  {
    type: 'answer',
    en: ['{{Word:wo3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}.'],
    zh: [],
    ru: ['{{Word:wo3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}.'],
    ttsText: '我是好的人。',
  },
];

export default content;
