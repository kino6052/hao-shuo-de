import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 938,
  phase: 2,
  zh: "戴",
  py: "dài",
  en: "wear (hat, glasses)",
  ru: "носить",
  pos: "verb",
  hsd: ["{{word:ba3}} X {{word:fang4}} {{word:zai4}} {{word:shen1ti3}}-{{word:shang4}}"],
  tts: ["把X放在身体上"],
  literal: "put X on the body",
  fit: "plain",
  topics: ["accessories"],
  isA: ["wearing"],
  note: "Same as 穿.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} X {{word:fang4}} {{word:zai4}} {{word:shen1ti3}}-{{word:shang4}}.",
      hanzi: "我把X放在身体上。",
      en: "I put X on.",
      ru: "Я надеваю X.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} X {{word:fang4}} {{word:zai4}} {{word:shen1ti3}}-{{word:shang4}}.",
      hanzi: "他把X放在身体上。",
      en: "He puts X on.",
      ru: "Он надевает X.",
    },
  ],
});
