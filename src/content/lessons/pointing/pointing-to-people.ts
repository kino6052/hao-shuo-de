// Pointers for people: wǒ, nǐ, tā. [from old L04]
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "pointing-to-people",
  words: [
    {
      word: "wo3",
      en: "I, me",
      ru: "я, меня",
    },
    {
      word: "ni3",
      en: "you",
      ru: "ты",
    },
    {
      word: "ta1",
      en: "he, she, it, they",
      ru: "он, она, оно, они",
    },
  ],
  prose: {
    en: [
      "You can also point at people: the one speaking, the one listening, and anyone else.",
      "{{word:wo3}} (\"I, me\") points at the speaker. {{word:ni3}} (\"you\") points at the listener. {{word:ta1}} (\"he, she\") points at someone else.",
      "Like {{word:zhe4}} and {{word:na4}}, they work just like nouns.",
    ],
    ru: [
      "На людей тоже можно указывать: на того, кто говорит, на того, кто слушает, и на кого угодно ещё.",
      "{{word:wo3}} («я, меня») указывает на говорящего. {{word:ni3}} («ты») — на слушающего. {{word:ta1}} («он, она») — на кого-то другого.",
      "Как и {{word:zhe4}} и {{word:na4}}, они работают как существительные.",
    ],
    tldr: {
      en: "{{word:wo3}} is \"I\", {{word:ni3}} is \"you\", and {{word:ta1}} is \"he\" or \"she\".",
      ru: "{{word:wo3}} — «я», {{word:ni3}} — «ты», {{word:ta1}} — «он» или «она».",
    },
    necessity: {
      en: "Now you can talk about yourself and others.",
      ru: "Теперь вы можете говорить о себе и о других.",
    },
  },
  info: {
    en: "{{word:wo3}}, I; {{word:ni3}}, you; {{word:ta1}}, he or she. They work like nouns: {{Word:ni3}}. (You.)",
    ru: "{{word:wo3}} — я, {{word:ni3}} — ты, {{word:ta1}} — он или она. Они работают как существительные: {{Word:ni3}}. (Ты.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}}.",
      hanzi: "我",
      en: "I. / Me.",
      ru: "Я. / Меня.",
    },
    {
      pinyin: "{{Word:ni3}}.",
      hanzi: "你",
      en: "You.",
      ru: "Ты.",
    },
    {
      pinyin: "{{Word:ta1}}.",
      hanzi: "他",
      en: "He, she.",
      ru: "Он, она.",
    },
  ],
  exercises: [
    {
      en: "I am a good person.",
      ru: "Я хороший человек.",
      answer: "{{Word:wo3}} {{word:shi4}} {{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我是好的人。",
    },
  ],
  faq: [
    // does tā mean he or she? (both, and it)
    {
      question: { en: "Does {{word:ta1}} mean \"he\" or \"she\"?", ru: "{{word:ta1}} — это «он» или «она»?" },
      en: "Both, and \"it\" too. They all sound exactly the same. The situation tells you who it is.",
      ru: "И то и другое, и ещё «оно». Звучат они совершенно одинаково. Кто имеется в виду, понятно из ситуации.",
    },
  ],
});
