import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 98,
  phase: 1,
  zh: "你好",
  py: "nǐ hǎo",
  en: "hello",
  ru: "здравствуйте",
  pos: "phrase",
  hsd: ["{{word:ni3}} {{word:hao3}}"],
  tts: ["你好"],
  literal: "you good",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hao3}}! {{Word:wo3}} {{word:jiao4}} \"Ānnà\".",
      hanzi: "你好！我叫安娜。",
      en: "Hello! My name is Anna.",
      ru: "Привет! Меня зовут Анна.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hao3}}, {{word:ni3}} {{word:shi4}} {{word:xue2}}-{{word:sheng1}} {{word:ma}}?",
      hanzi: "你好，你是学生吗？",
      en: "Hello, are you a student?",
      ru: "Здравствуй, ты студент?",
    },
  ],
});
