import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 429,
  phase: 1,
  zh: "每",
  py: "měi",
  en: "every",
  ru: "каждый",
  pos: "pronoun",
  hsd: ["{{word:ren2}}-{{word:ren2}}", "{{word:ge4}}-{{word:ge4}} … {{word:dou1}}"],
  tts: ["人人", "个个…都"],
  literal: "person-person / one-one … all",
  fit: "natural",
  note: "Lesson {{lesson:doubling-words}}: rén-rén dōu yào shuǐ.",
  examples: [
    {
      pinyin: "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}}.",
      hanzi: "人人都要水。",
      en: "Everyone needs water.",
      ru: "Всем нужна вода.",
    },
    {
      pinyin: "{{Word:ge4}}-{{word:ge4}} {{word:xue2}}-{{word:sheng1}} {{word:dou1}} {{word:lai2}} {{word:le}}.",
      hanzi: "个个学生都来了。",
      en: "Every student came.",
      ru: "Пришёл каждый студент.",
    },
  ],
});
