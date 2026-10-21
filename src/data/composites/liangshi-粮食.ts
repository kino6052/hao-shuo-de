import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1391,
  phase: 3,
  zh: "粮食",
  py: "liángshi",
  en: "grain, food crops",
  ru: "зерно, продовольствие",
  pos: "noun",
  hsd: ["{{word:chi1}}-{{word:de}} {{word:zhi2wu4}}"],
  tts: ["吃的植物"],
  literal: "plants we eat",
  fit: "plain",
  topics: ["crops-and-farming"],
  isA: ["crop"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:chi1}}-{{word:de}} {{word:zhi2wu4}}.",
      hanzi: "这是吃的植物。",
      en: "This is grain.",
      ru: "Это зерно.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:chi1}}-{{word:de}} {{word:zhi2wu4}}.",
      hanzi: "我买吃的植物。",
      en: "I buy grain.",
      ru: "Я покупаю зерно.",
    },
  ],
});
