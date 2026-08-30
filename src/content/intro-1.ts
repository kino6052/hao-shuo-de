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
      'Hao-shuo-de is a constructed language that lets Chinese learners focus on what truly matters — and master Chinese in a fraction of the time.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      "Whether you're a beginner or a seasoned student, you've probably wondered: what's the *best* way to learn Chinese?",
      'How do I keep moving forward without getting stuck?',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      "There's no single answer.",
      'Too many variables are at play — who you are, how you learn, what you already know — and what skill you\'re targeting: listening, reading, writing, or speaking.',
      'Yet virtually every method takes Chinese as it is and simply repackages it.',
      'Nothing changes fundamentally.',
      '<h2>The HSK framework is broken</h2>',
      'Most methods follow the HSK ladder: learn a vocabulary subset per level, pass exams, use graded readers.',
      "But HSK doesn't teach you to understand real Chinese — it only sets expectations about your word list.",
      'Hao-shuo-de is fundamentally different.',
      'From day one you learn the *actual* language, not just vocabulary.',
      'Within weeks you can watch real content, read real texts (in hao-shuo-de, not yet Mandarin), and express yourself.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'One of the hardest parts of learning Chinese is that it feels like an open sea — the finish line is always out of reach.',
      'No level lets you confidently say, "I know Chinese."',
      'With hao-shuo-de, you *can* say, "I know hao-shuo-de," within a couple of months.',
      "You'll express yourself, consume real content, and then move on to the next language — jiandanhua.",
      "Jiandanhua is Mandarin with the finish line in sight: within months you'll master it and transition smoothly into the open sea of real Chinese, having crossed two clear finish lines.",
      'You\'ll be able to say with confidence: "I know hao-shuo-de and jiandanhua" — a language native Chinese speakers will understand.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'Because hao-shuo-de and jiandanhua are complete languages, anything can be translated into them — speech, movies, books.',
      "And because they are genuinely simplified Chinese, you're not wasting time: you're learning real Chinese the fundamentally correct way, focusing on the right parts.",
      'No relearning.',
      'No moment, as with HSK, where years pass and you still feel stuck, far from your goals.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      '<h2>How does hao-shuo-de help, exactly?</h2>',
      'Hao-shuo-de has only {{dictionaryCount}} words in its vocabulary.',
      'It comes with a structured teaching framework, a growing community, and resources designed to help you master the language quickly.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'Because hao-shuo-de is minimal, we skip endless vocabulary drilling.',
      'Instead, every resource targets the main bottleneck of learning Chinese: listening comprehension.',
      "On our community platform you'll find a guided learning pathway built around listening exercises — listening is the core focus.",
      'You must pass each listening stage before unlocking the next.',
      'Once you clear them all, you unlock bonus content like videos and, eventually, access to jiandanhua — a complete language extremely close to Mandarin yet far simpler to learn.',
    ],
    zh: [],
    ru: [],
  },
  {
    type: 'prose',
    en: [
      'Welcome to your Chinese learning journey — engineered the right way.',
      'Hǎo hǎo lái zhīdào hǎo-shuō-de!',
    ],
    zh: [],
    ru: [],
  },
];

export default content;
