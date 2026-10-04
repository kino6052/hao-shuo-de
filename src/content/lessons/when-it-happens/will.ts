// To say something will happen, put huì before the verb. Pattern: Who + huì +
// verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "will",
  words: [
    {
      term: "{{word:hui4}}",
      hanzi: "会",
      en: "will",
      ru: "будет (о том, что случится)",
    },
  ],
  prose: {
    en: [
      "**To say something will happen**, put {{word:hui4}} before the verb.",
      "",
      "**Who + {{word:hui4}} + verb**",
    ],
    ru: [
      "**Чтобы сказать, что что-то случится**, поставьте {{word:hui4}} перед глаголом.",
      "",
      "**Кто + {{word:hui4}} + глагол**",
    ],
    tldr: {
      en: "Put {{word:hui4}} before a verb to say it will happen.",
      ru: "Поставьте {{word:hui4}} перед глаголом, чтобы сказать, что это случится.",
    },
    necessity: {
      en: "Now you can talk about what comes next.",
      ru: "Теперь вы можете говорить о том, что будет дальше.",
    },
  },
  info: {
    en: "{{word:hui4}} + verb, will: {{Word:wo3}} {{word:hui4}} {{word:chi1}}. (I will eat.)",
    ru: "{{word:hui4}} + глагол — будет: {{Word:wo3}} {{word:hui4}} {{word:chi1}}. (Я буду есть.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hui4}} {{word:chi1}}.",
      hanzi: "我会吃。",
      en: "I will eat.",
      ru: "Я буду есть.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hui4}} {{word:deng3}}.",
      hanzi: "他会等。",
      en: "He will wait.",
      ru: "Он подождёт.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hui4}} {{word:shui4jiao4}} {{word:ma}}?",
      hanzi: "你会睡觉吗？",
      en: "Will you sleep?",
      ru: "Ты будешь спать?",
    },
  ],
  exercises: [
    {
      en: "Will you write?",
      ru: "Ты будешь писать?",
      answer: "{{Word:ni3}} {{word:hui4}} {{word:xie3}} {{word:ma}}?",
      hanzi: "你会写吗？",
    },
  ],
  faq: [
    // huì also means "know how to" in full Mandarin
    {
      question: { en: "Does {{word:hui4}} only mean \"will\"?", ru: "{{word:hui4}} значит только «будет»?" },
      en: "In full Mandarin, {{word:hui4}} also means \"know how to\": {{word:hui4}} {{word:xie3}} is \"can write\". Hao-shuo-de uses {{word:zhi1dao4}} {{word:zen3me}} (Lesson {{lesson:pre-verbs}}) for that, so here {{word:hui4}} just means \"will\".",
      ru: "В полном китайском {{word:hui4}} также значит «уметь»: {{word:hui4}} {{word:xie3}} — «умеет писать». В Hǎo-shuō-de для этого есть {{word:zhi1dao4}} {{word:zen3me}} (урок {{lesson:pre-verbs}}), так что здесь {{word:hui4}} значит просто «будет».",
    },
  ],
});
