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
    ru: ['Добро пожаловать в Hǎo-shuō-de!'],
  },
  {
    type: 'summary',
    en: [
      'Hao-shuo-de is Chinese with only the words you need most. It helps you learn Chinese much faster.',
    ],
    zh: [],
    ru: [
      'Hǎo-shuō-de — это китайский, в котором оставлены только самые нужные слова. С ним китайский учится гораздо быстрее.',
    ],
  },
  {
    type: 'prose',
    en: [
      "Whether you're just starting or have studied for years, you've probably wondered: what's the *best* way to learn Chinese?",
      'How do I keep moving forward without getting stuck?',
    ],
    zh: [],
    ru: [
      'Только начинаете вы или учите уже много лет, вы наверняка задумывались: как *лучше всего* учить китайский?',
      'Как двигаться вперёд и не застревать?',
    ],
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
    ru: [
      'Единого ответа нет.',
      'Всё зависит от того, кто вы, как вы учитесь и что уже знаете.',
      'И ещё от того, какой навык вам нужен: понимать на слух, читать, писать или говорить.',
      'Но почти любой метод берёт китайский как есть и просто подаёт его в новой упаковке.',
      'По сути ничего не меняется.',
      '<h2>Система HSK не работает</h2>',
      'Большинство методов идут по лестнице HSK.',
      'Вы учите набор слов для каждого уровня, сдаёте экзамен и читаете книги, написанные для этого уровня.',
      'Но HSK не учит понимать настоящий китайский.',
      'Он лишь говорит, какие слова вы должны знать.',
      'Hǎo-shuō-de устроен иначе.',
      'С первого дня вы учите *настоящий* язык, а не просто слова.',
      'Уже через несколько недель вы сможете смотреть настоящие видео, читать настоящие тексты (на Hǎo-shuō-de, пока не на полном китайском) и говорить то, что хотите сказать.',
    ],
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
    ru: [
      'Одна из самых трудных вещей в изучении китайского — ощущение, что перед тобой открытое море.',
      'Финиш всегда где-то за горизонтом.',
      'Нет такого уровня, на котором можно уверенно сказать: «Я знаю китайский».',
      'С Hǎo-shuō-de вы *сможете* сказать «Я знаю Hǎo-shuō-de» уже через пару месяцев.',
      'Вы будете говорить то, что хотите, понимать настоящие материалы, а потом перейдёте к следующему языку — Jiandanhua.',
      'Jiandanhua — это китайский, у которого финиш виден.',
      'За несколько месяцев вы освоите и его.',
      'А потом плавно выйдете в открытое море настоящего китайского, оставив позади два понятных финиша.',
      'Вы сможете сказать: «Я знаю Hǎo-shuō-de и Jiandanhua».',
      'И носители китайского будут вас понимать.',
    ],
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
    ru: [
      'Hǎo-shuō-de и Jiandanhua — полноценные языки, поэтому на них можно перевести что угодно: речь, фильмы, книги.',
      'Это настоящий китайский, только проще, так что вы не тратите время зря.',
      'Вы учите настоящий китайский правильно, начиная с самого важного.',
      'Ничего не придётся переучивать.',
      'И не будет момента, как с HSK, когда проходят годы, а вы всё так же стоите на месте, далеко от своих целей.',
    ],
  },
  {
    type: 'prose',
    en: [
      '<h2>How does Hao-shuo-de help, exactly?</h2>',
      'Hao-shuo-de has only {{dictionaryCount}} words.',
      'It comes with a clear path of lessons, a growing community, and resources that help you learn it quickly.',
    ],
    zh: [],
    ru: [
      '<h2>Чем именно помогает Hǎo-shuō-de?</h2>',
      'Слов в Hǎo-shuō-de всего {{dictionaryCount}}.',
      'К нему прилагаются понятный путь из уроков, растущее сообщество и материалы, которые помогают быстро его выучить.',
    ],
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
    ru: [
      'Hǎo-shuō-de маленький, поэтому не нужно бесконечно зубрить слова.',
      'Вместо этого всё направлено на самое трудное в китайском — понимание на слух.',
      'На платформе нашего сообщества вас ждёт путь, построенный вокруг упражнений на аудирование.',
      'Пройдя один этап, вы открываете следующий.',
      'Когда вы пройдёте их все, откроются дополнительные материалы, например видео, а затем Jiandanhua — полноценный язык, очень близкий к китайскому, но гораздо проще в изучении.',
    ],
  },
  {
    type: 'prose',
    en: [
      'Welcome to your Chinese learning journey, done the right way.',
      'Hǎo hǎo lái zhīdào Hǎo-shuō-de!',
    ],
    zh: [],
    ru: [
      'Добро пожаловать в путешествие по китайскому языку — правильное с самого начала.',
      'Hǎo hǎo lái zhīdào Hǎo-shuō-de!',
    ],
  },
];

export default content;
