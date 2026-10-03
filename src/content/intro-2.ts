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
    ru: ['Насколько маленьким может быть язык?'],
  },
  {
    type: 'summary',
    en: [
      'How few words do you need to say almost anything? Toki Pona showed that about 120 can be enough. Hao-shuo-de uses the same idea with real Mandarin.',
    ],
    zh: [],
    ru: [
      'Сколько слов нужно, чтобы сказать почти что угодно? Toki Pona показал, что может хватить около 120. Hǎo-shuō-de применяет ту же идею к настоящему китайскому.',
    ],
  },
  {
    type: 'prose',
    en: [
      "Here's a question worth sitting with: what is the smallest number of words you would need to say almost anything, and still be understood?",
    ],
    zh: [],
    ru: [
      'Вот вопрос, над которым стоит подумать: какое наименьшее число слов нужно, чтобы сказать почти что угодно и всё равно быть понятым?',
    ],
  },
  {
    type: 'prose',
    en: [
      'In 2001, a linguist named Sonja Lang decided to find out.',
      'She built a language called Toki Pona, and gave herself just about 120 words to work with — no more.',
      'That sounds like far too few.',
      'How do you say "car" without the word for car?',
      "You don't invent one.",
      'Instead you combine what you already have: a car becomes a "moving box."',
      'Hunger becomes "wanting to eat."',
      'Teaching becomes "giving knowledge."',
      'With about 120 well-chosen words, combined freely, people could think clearly and say almost anything they needed.',
    ],
    zh: [],
    ru: [
      'В 2001 году лингвист Соня Ланг решила это выяснить.',
      'Она создала язык Toki Pona и позволила себе всего около 120 слов — не больше.',
      'Кажется, что это слишком мало.',
      'Как сказать «машина», если такого слова нет?',
      'Новое слово не придумывают.',
      'Вместо этого соединяют то, что уже есть: машина становится «движущимся ящиком».',
      'Голод — «желанием есть».',
      'Обучение — «передачей знания».',
      'С примерно 120 удачно подобранными словами, которые свободно соединяются друг с другом, люди могли ясно мыслить и сказать почти всё, что им нужно.',
    ],
  },
  {
    type: 'prose',
    en: [
      '<audio-example zh="好说的">Hǎo-shuō-de</audio-example> borrows the result of that experiment, but not the language itself.',
      "Every word you'll learn here, and every rule of grammar, is ordinary, real, standard Mandarin.",
      'Nothing is invented, and there is nothing to unlearn later.',
      'What <audio-example zh="好说的">Hǎo-shuō-de</audio-example> borrows from Toki Pona is only the discipline.',
      "Keep the words to {{dictionaryCount}}, and there's nothing left to distract you from the grammar.",
    ],
    zh: [],
    ru: [
      '<audio-example zh="好说的">Hǎo-shuō-de</audio-example> заимствует результат этого эксперимента, но не сам язык.',
      'Каждое слово, которое вы здесь выучите, и каждое правило грамматики — это обычный, настоящий, стандартный китайский.',
      'Ничего не придумано, и потом ничего не придётся переучивать.',
      'Из Toki Pona <audio-example zh="好说的">Hǎo-shuō-de</audio-example> берёт только дисциплину.',
      'Когда слов всего {{dictionaryCount}}, ничто не отвлекает вас от грамматики.',
    ],
  },
  {
    type: 'prose',
    en: [
      'And because the grammar is entirely real, a native speaker understands you from your very first sentence.',
      "Don't expect to sound fluent.",
      "With {{dictionaryCount}} words, you'll speak the way a very honest, very literal person speaks.",
      'But every sentence will be correct Mandarin, not a simplified stand-in for it.',
    ],
    zh: [],
    ru: [
      'А поскольку грамматика полностью настоящая, носитель языка понимает вас с самой первой фразы.',
      'Не ждите, что будете говорить бегло.',
      'Когда слов всего {{dictionaryCount}}, вы говорите как очень честный человек, который всё называет прямо и буквально.',
      'Но каждое предложение будет правильным китайским, а не его упрощённой заменой.',
    ],
  },
  {
    type: 'example',
    pinyin: 'Nǐ hǎo ma?',
    en: ['Hello, how are you? (literally: "you good?")'],
    zh: [],
    ru: ['Привет, как дела? (Дословно: «ты хорошо?»)'],
  },
  {
    type: 'example',
    pinyin: 'Wǒ zhīdào Hǎo-shuō-de.',
    en: ['I know Hǎo-shuō-de.'],
    zh: [],
    ru: ['Я знаю Hǎo-shuō-de.'],
  },
];

export default content;
