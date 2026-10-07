import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 53,
  phase: 1,
  zh: "对",
  py: "duì",
  en: "facing",
  ru: "лицом к",
  pos: "adjective",
  hsd: ["{{word:dui4}}"],
  tts: ["对"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:de}} {{word:dui4}}.",
      hanzi: "你说得对。",
      en: "You're right.",
      ru: "Ты прав.",
    },
    {
      pinyin: "{{Word:dui4}}, {{word:wo3}} {{word:shi4}} {{word:xue2}}-{{word:sheng1}}.",
      hanzi: "对，我是学生。",
      en: "Yes, I'm a student.",
      ru: "Да, я студент.",
    },
  ],
});
