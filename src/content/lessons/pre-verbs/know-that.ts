// After zhīdào can come a whole sentence: what you know.
// Pattern: Who + zhīdào + sentence
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "know-that",
  prose: {
    en: [
      "**To say what someone knows**, put a whole sentence after {{word:zhi1dao4}}.",
      "",
      "**Who + {{word:zhi1dao4}} + sentence**",
      "",
      "{{Word:wo3}} {{word:zhi1dao4}} {{word:ni3}} {{word:ai4}} {{word:wo3}} is \"I know you love me\". The sentence after {{word:zhi1dao4}} has its own person.",
      "Compare {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}}, know how to write.",
    ],
    ru: [
      "**Чтобы сказать, что кто-то знает**, поставьте после {{word:zhi1dao4}} целое предложение.",
      "",
      "**Кто + {{word:zhi1dao4}} + предложение**",
      "",
      "{{Word:wo3}} {{word:zhi1dao4}} {{word:ni3}} {{word:ai4}} {{word:wo3}} — «Я знаю, что ты любишь меня». У предложения после {{word:zhi1dao4}} свой человек.",
      "Сравните {{word:zhi1dao4}} {{word:zen3me}} {{word:xie3}} — знать, как писать.",
    ],
    tldr: {
      en: "{{Word:zhi1dao4}} can take a whole sentence: {{Word:wo3}} {{word:zhi1dao4}} {{word:ni3}} {{word:ai4}} {{word:wo3}}, I know you love me.",
      ru: "После {{word:zhi1dao4}} идёт целое предложение: {{Word:wo3}} {{word:zhi1dao4}} {{word:ni3}} {{word:ai4}} {{word:wo3}} — я знаю, что ты любишь меня.",
    },
    necessity: {
      en: "Now you can say what you know about other people.",
      ru: "Теперь вы можете сказать, что знаете о других людях.",
    },
  },
  info: {
    pattern: "know-that",
    en: "Who + {{word:zhi1dao4}} + sentence: {{Word:wo3}} {{word:zhi1dao4}} {{word:ni3}} {{word:ai4}} {{word:wo3}}. (I know you love me.)",
    ru: "Кто + {{word:zhi1dao4}} + предложение: {{Word:wo3}} {{word:zhi1dao4}} {{word:ni3}} {{word:ai4}} {{word:wo3}}. (Я знаю, что ты любишь меня.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:ni3}} {{word:ai4}} {{word:wo3}}.",
      hanzi: "我知道你爱我。",
      en: "I know you love me.",
      ru: "Я знаю, что ты любишь меня.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhi1dao4}} {{word:wo3}} {{word:xiang3}} {{word:chi1}}.",
      hanzi: "他知道我想吃。",
      en: "He knows I want to eat.",
      ru: "Он знает, что я хочу есть.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:wo3}} {{word:yao4}} {{word:shen2me}} {{word:ma}}?",
      hanzi: "你知道我要什么吗？",
      en: "Do you know what I want?",
      ru: "Ты знаешь, чего я хочу?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:ni3}} {{word:xiang3}} {{word:shen2me}}.",
      hanzi: "我不知道你想什么。",
      en: "I don't know what you think.",
      ru: "Я не знаю, о чём ты думаешь.",
    },
  ],
  exercises: [
    {
      en: "I know you can write.",
      ru: "Я знаю, что ты умеешь писать.",
      answer: "{{Word:wo3}} {{word:zhi1dao4}} {{word:ni3}} {{word:neng2}} {{word:xie3}}.",
      hanzi: "我知道你能写。",
    },
    {
      en: "He knows what I want.",
      ru: "Он знает, чего я хочу.",
      answer: "{{Word:ta1}} {{word:zhi1dao4}} {{word:wo3}} {{word:yao4}} {{word:shen2me}}.",
      hanzi: "他知道我要什么。",
    },
    {
      en: "Do you know I want to eat?",
      ru: "Ты знаешь, что я хочу есть?",
      answer: "{{Word:ni3}} {{word:zhi1dao4}} {{word:wo3}} {{word:xiang3}} {{word:chi1}} {{word:ma}}?",
      hanzi: "你知道我想吃吗？",
    },
  ],
});
