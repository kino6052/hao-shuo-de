import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1186,
  phase: 3,
  zh: "营养",
  py: "yíngyǎng",
  en: "nutrition",
  ru: "питание (питательные вещества)",
  pos: "noun",
  hsd: ["{{word:shen1ti3}} {{word:yao4}}-{{word:de}} {{word:chi1}}-{{word:de}}"],
  tts: ["身体要的吃的"],
  literal: "the food the body needs",
  fit: "plain",
  topics: ["healthy-habits"],
  isA: ["abstract-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:shen1ti3}} {{word:yao4}}-{{word:de}} {{word:chi1}}-{{word:de}}.",
      hanzi: "我要身体要的吃的。",
      en: "I want nutrition.",
      ru: "Мне нужно питание.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:you3}} {{word:shen1ti3}} {{word:yao4}}-{{word:de}} {{word:chi1}}-{{word:de}}.",
      hanzi: "这有身体要的吃的。",
      en: "This has nutrition.",
      ru: "Здесь есть питательные вещества.",
    },
  ],
});
