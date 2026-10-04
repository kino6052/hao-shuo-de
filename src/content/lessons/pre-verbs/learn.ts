// I learn to do something. Who + xué + verb.
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "learn",
  words: [
    {
      term: "{{word:xue2}}",
      hanzi: "学",
      en: "learn; before a verb: learn to",
      ru: "учиться; перед глаголом: учиться что-то делать",
    },
  ],
  prose: {
    en: [
      "**To say you learn to do something**, put {{word:xue2}} (learn) before the verb.",
      "",
      "**Who + {{word:xue2}} + verb**",
    ],
    ru: [
      "**Чтобы сказать, что вы учитесь что-то делать**, поставьте {{word:xue2}} (учиться) перед глаголом.",
      "",
      "**Кто + {{word:xue2}} + глагол**",
    ],
    tldr: {
      en: "Put {{word:xue2}} before the verb to say you learn to do it.",
      ru: "Поставьте {{word:xue2}} перед глаголом, чтобы сказать, что учитесь это делать.",
    },
    necessity: {
      en: "Now you can say what you're learning to do.",
      ru: "Теперь вы можете сказать, чему учитесь.",
    },
  },
  info: {
    en: "{{word:xue2}} + verb, learn to: {{Word:wo3}} {{word:xue2}} {{word:xie3}}. (I'm learning to write.)",
    ru: "{{word:xue2}} + глагол — учиться: {{Word:wo3}} {{word:xue2}} {{word:xie3}}. (Я учусь писать.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xue2}} {{word:xie3}}.",
      hanzi: "我学写。",
      en: "I'm learning to write.",
      ru: "Я учусь писать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xue2}} {{word:shuo1}}.",
      hanzi: "她学说。",
      en: "She's learning to speak.",
      ru: "Она учится говорить.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:xue2}} {{word:xie3}} {{word:ma}}?",
      hanzi: "你要学写吗？",
      en: "Do you want to learn to write?",
      ru: "Ты хочешь научиться писать?",
    },
  ],
  exercises: [
    {
      en: "He's learning to write.",
      ru: "Он учится писать.",
      answer: "{{Word:ta1}} {{word:xue2}} {{word:xie3}}.",
      hanzi: "他学写。",
    },
  ],
});
