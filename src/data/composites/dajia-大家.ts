import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 163,
  phase: 1,
  zh: "大家",
  py: "dàjiā",
  en: "everyone",
  ru: "все",
  pos: "pronoun",
  hsd: ["{{word:da4}}-{{word:jia1}}", "{{word:ren2}}-{{word:ren2}} {{word:dou1}}"],
  tts: ["大家", "人人都"],
  literal: "big home / person-person all",
  fit: "natural",
  note: "Lesson {{lesson:doubling-words}}.",
  examples: [
    {
      pinyin: "{{Word:da4}}-{{word:jia1}} {{word:hao3}}!",
      hanzi: "大家好！",
      en: "Hello, everyone!",
      ru: "Всем привет!",
    },
    {
      pinyin: "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}.",
      hanzi: "人人都知道。",
      en: "Everybody knows.",
      ru: "Все знают.",
    },
  ],
});
