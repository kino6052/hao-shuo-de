import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 288,
  phase: 1,
  zh: "部分",
  py: "bùfen",
  en: "part",
  ru: "часть",
  pos: "noun",
  hsd: ["{{word:bu4}}-{{light:fen1}}"],
  tts: ["部分"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "这是一部分。",
      en: "This is one part.",
      ru: "Это одна часть.",
    },
    {
      pinyin: "{{Word:da4}} {{word:bu4}}-{{light:fen1}} {{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}.",
      hanzi: "大部分人都知道。",
      en: "Most people know.",
      ru: "Большинство людей знает.",
    },
  ],
});
