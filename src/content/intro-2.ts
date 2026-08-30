// See src/lib/chapter-content.js for the schema this is transformed by.
// Content carried over from the old src/content/intro-3.md (now removed).
export const meta = {
  id: 'intro-2',
  type: 'intro',
  lessonNumber: 2,
  order: 2,
};

export interface TextEntry {
  type: 'title' | 'summary' | 'prose';
  en: string[];
  zh: string[];
  ru: string[];
}

export interface ExampleEntry {
  type: 'example';
  pinyin: string;
  en: string[];
  zh: string[];
  ru: string[];
  audioFile?: string;
  ttsText?: string;
}

const content: (TextEntry | ExampleEntry)[] = [
  {
    type: 'title',
    en: ['How small can a language be?'],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      "Here's a question worth sitting with: what is the smallest number of words you would need to say almost anything, and still be understood?",
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'In 2001, a linguist named Sonja Lang decided to find out.',
      'She built a language called Toki Pona, and gave herself just about 120 words to work with — no more.',
      'It sounds impossibly restrictive.',
      'How do you say "car" without the word for car?',
      "You don't invent one.",
      'Instead you combine what you already have: a car becomes a "moving box."',
      'Hunger becomes "wanting to eat."',
      'Teaching becomes "giving knowledge."',
      'With only 120 well-chosen concepts, combined freely, people could think clearly and say almost anything they needed to.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      '<audio-example zh="好说的">Hǎo-shuō-de</audio-example> borrows the result of that experiment, but not the language itself.',
      "Every word you'll learn here, and every rule of grammar, is ordinary, real, standard Mandarin — nothing invented, nothing to unlearn later.",
      'What <audio-example zh="好说的">Hǎo-shuō-de</audio-example> borrows from Toki Pona is only the discipline: freeze the vocabulary at around {{dictionaryCount}} words, and suddenly there\'s nothing left to distract you from the grammar.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'And because the grammar is entirely real, a native speaker understands you from your very first sentence.',
      "Don't expect to sound fluent — with {{dictionaryCount}} words, you'll speak the way a very honest, very literal person speaks.",
      'But every sentence will be correct Mandarin, not a simplified stand-in for it.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: 'Nǐ hǎo ma?',
    en: ['Hello, how are you? (literally: "you good?")'],
    zh: [],
    ru: [],
  },
  {
    type: 'example',
    pinyin: 'Wǒ zhīdào Hǎo-shuō-de.',
    en: ['I know Hǎo-shuō-de.'],
    zh: [],
    ru: [],
  },
];

export default content;
