import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 278,
  phase: 1,
  zh: "必须",
  py: "bìxū",
  en: "must",
  ru: "должен",
  pos: "adverb",
  hsd: ["{{word:yao4}}"],
  tts: ["要"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:lai2}}.",
      hanzi: "你要来。",
      en: "You must come.",
      ru: "Ты должен прийти.",
    },
    {
      pinyin: "{{Word:xue2}}-{{word:sheng1}} {{word:yao4}} {{word:xue2}}.",
      hanzi: "学生要学。",
      en: "Students must study.",
      ru: "Студенты должны учиться.",
    },
  ],
});
