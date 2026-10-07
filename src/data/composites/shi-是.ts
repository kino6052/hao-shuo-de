import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9,
  phase: 1,
  zh: "是",
  py: "shì",
  en: "be",
  ru: "быть",
  pos: "verb",
  hsd: ["{{word:shi4}}"],
  tts: ["是"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shi4}} {{word:xue2}}-{{word:sheng1}}.",
      hanzi: "我是学生。",
      en: "I'm a student.",
      ru: "Я студент.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:shu1}}.",
      hanzi: "这是我的书。",
      en: "This is my book.",
      ru: "Это моя книга.",
    },
  ],
});
