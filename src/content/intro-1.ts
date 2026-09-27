// See src/lib/chapter-content.js for the schema this is transformed by.
export const meta = {
  id: 'intro-1',
  type: 'intro',
  lessonNumber: 1,
  order: 1,
};

export interface TextEntry {
  type: 'title' | 'summary' | 'prose';
  en: string[];
  zh: string[];
  ru: string[];
}

const content: TextEntry[] = [
  {
    type: 'title',
    en: ['Welcome to Hao-shuo-de!'],
    zh: [],
    ru: [],
  },
  {
    type: 'summary',
    en: [
      'Hao-shuo-de is Chinese with only the words you need most. It helps you learn Chinese much faster.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      "Whether you're just starting or have studied for years, you've probably wondered: what's the *best* way to learn Chinese?",
      'How do I keep moving forward without getting stuck?',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      "There's no single answer.",
      'It depends on who you are, how you learn, and what you already know.',
      'It also depends on the skill you want: listening, reading, writing, or speaking.',
      'But almost every method takes Chinese as it is and just repackages it.',
      'Nothing really changes.',
      '<h2>The HSK framework is broken</h2>',
      'Most methods follow the HSK ladder.',
      'You learn a set of words for each level, pass an exam, and read books written for that level.',
      "But HSK doesn't teach you to understand real Chinese.",
      'It only tells you which words you should know.',
      'Hao-shuo-de is different.',
      'From day one you learn the *actual* language, not just words.',
      'Within weeks you can watch real content, read real texts (in Hao-shuo-de, not yet full Mandarin), and say what you mean.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'One of the hardest parts of learning Chinese is that it feels like an open sea.',
      'The finish line is always out of reach.',
      'No level lets you say, with confidence, "I know Chinese."',
      'With Hao-shuo-de, you *can* say "I know Hao-shuo-de" within a couple of months.',
      "You'll say what you mean, understand real content, and then move on to the next language: Jiandanhua.",
      'Jiandanhua is Mandarin with the finish line in sight.',
      "Within months you'll master it too.",
      'Then you move smoothly into the open sea of real Chinese, with two clear finish lines behind you.',
      'You\'ll be able to say, "I know Hao-shuo-de and Jiandanhua."',
      'And native Chinese speakers will understand you.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'Hao-shuo-de and Jiandanhua are complete languages, so anything can be translated into them: speech, movies, books.',
      "They are real Chinese, only simpler, so you're not wasting time.",
      'You learn real Chinese the right way, starting with the parts that matter most.',
      'No relearning.',
      'No moment, as with HSK, where years pass and you still feel stuck, far from your goals.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      '<h2>How does Hao-shuo-de help, exactly?</h2>',
      'Hao-shuo-de has only {{dictionaryCount}} words.',
      'It comes with a clear path of lessons, a growing community, and resources that help you learn it quickly.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'Because Hao-shuo-de is small, you skip endless word drills.',
      'Instead, everything aims at the hardest part of learning Chinese: understanding what you hear.',
      "On our community platform, you'll find a guided path built around listening exercises.",
      'You pass each listening stage to unlock the next.',
      'When you clear them all, you unlock extra content like videos, and then Jiandanhua: a complete language very close to Mandarin, but far simpler to learn.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'Welcome to your Chinese learning journey, done the right way.',
      'Hǎo hǎo lái zhīdào Hǎo-shuō-de!',
    ],
    zh: [],
    ru: [],
  },
];

export default content;
