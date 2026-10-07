import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 346,
  phase: 1,
  zh: "中午",
  py: "zhōngwǔ",
  en: "noon",
  ru: "полдень",
  pos: "noun",
  hsd: ["{{word:shi2}}-{{word:er4}}-{{word:dian3}}"],
  tts: ["十二点"],
  literal: "twelve o'clock",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "我们十二点吃饭。",
      en: "We eat at noon.",
      ru: "Мы обедаем в полдень.",
    },
    {
      pinyin: "{{Word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:hen3}} {{word:re4}}.",
      hanzi: "十二点很热。",
      en: "It's hot at noon.",
      ru: "В полдень жарко.",
    },
  ],
});
