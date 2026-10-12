import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1371,
  phase: 3,
  zh: "涨价",
  py: "zhǎngjià",
  en: "go up in price",
  ru: "дорожать",
  pos: "verb",
  hsd: ["{{word:yao4}}-{{word:de}} {{word:jin1}} {{word:bian4}} {{word:duo1}}"],
  tts: ["要的金变多"],
  literal: "it costs more money",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:yao4}}-{{word:de}} {{word:jin1}} {{word:bian4}} {{word:duo1}} {{word:le}}.",
      hanzi: "要的金变多了。",
      en: "The price has gone up.",
      ru: "Цена выросла.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}}-{{word:de}} {{word:jin1}} {{word:bian4}} {{word:duo1}} {{word:le}}.",
      hanzi: "这个要的金变多了。",
      en: "The price of this has gone up.",
      ru: "Цена на это выросла.",
    },
  ],
});
