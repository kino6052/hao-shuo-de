import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 357,
  phase: 1,
  zh: "公交车",
  py: "gōngjiāochē",
  en: "bus",
  ru: "автобус",
  pos: "noun",
  hsd: ["{{word:hen3}}-{{word:duo1}}-{{word:ren2}}-{{word:de}} {{word:che1}}"],
  tts: ["很多人的车"],
  literal: "many people's car",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:hen3}}-{{word:duo1}}-{{word:ren2}}-{{word:de}} {{word:che1}} {{word:lai2}} {{word:le}}.",
      hanzi: "很多人的车来了。",
      en: "The bus is here.",
      ru: "Автобус пришёл.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:hen3}}-{{word:duo1}}-{{word:ren2}}-{{word:de}} {{word:che1}} {{word:qu4}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "我用很多人的车去工作。",
      en: "I take the bus to work.",
      ru: "Я езжу на работу на автобусе.",
    },
  ],
});
