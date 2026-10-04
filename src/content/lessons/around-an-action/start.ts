// To say something starts, put kāishǐ before the verb. Pattern: Who + kāishǐ
// + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "start",
  words: [
    {
      word: "kai1shi3",
      en: "start",
      ru: "начинать",
    },
  ],
  prose: {
    en: [
      "**To say something starts**, put {{word:kai1shi3}} before the verb.",
      "",
      "**Who + {{word:kai1shi3}} + verb**",
    ],
    ru: [
      "**Чтобы сказать, что что-то начинается**, поставьте {{word:kai1shi3}} перед глаголом.",
      "",
      "**Кто + {{word:kai1shi3}} + глагол**",
    ],
    tldr: {
      en: "Put {{word:kai1shi3}} before a verb to say it starts.",
      ru: "Поставьте {{word:kai1shi3}} перед глаголом, чтобы сказать, что это начинается.",
    },
    necessity: {
      en: "Now you can say when something begins.",
      ru: "Теперь вы можете сказать, когда что-то начинается.",
    },
  },
  info: {
    en: "{{word:kai1shi3}} + verb, start: {{Word:wo3}} {{word:kai1shi3}} {{word:wan2r}} {{word:le}}. (I started to play.)",
    ru: "{{word:kai1shi3}} + глагол — начать: {{Word:wo3}} {{word:kai1shi3}} {{word:wan2r}} {{word:le}}. (Я начал играть.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kai1shi3}} {{word:wan2r}} {{word:le}}.",
      hanzi: "我开始玩儿了。",
      en: "I started to play.",
      ru: "Я начал играть.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:kai1shi3}} {{word:chi1}}.",
      hanzi: "他开始吃。",
      en: "He starts to eat.",
      ru: "Он начинает есть.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kai1shi3}} {{word:xie3}} {{word:le}} {{word:ma}}?",
      hanzi: "你开始写了吗？",
      en: "Have you started writing?",
      ru: "Ты уже начал писать?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xian4zai4}} {{word:kai1shi3}} {{word:xie3}}.",
      hanzi: "我现在开始写。",
      en: "I'm starting to write now.",
      ru: "Я сейчас начинаю писать.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kai1shi3}} {{word:xue2}} {{word:shuo1}} {{word:le}}.",
      hanzi: "我开始学说了。",
      en: "I've started learning to speak.",
      ru: "Я начал учиться говорить.",
    },
  ],
  exercises: [
    {
      en: "She started to eat.",
      ru: "Она начала есть.",
      answer: "{{Word:ta1}} {{word:kai1shi3}} {{word:chi1}} {{word:le}}.",
      hanzi: "她开始吃了。",
    },
  ],
});
