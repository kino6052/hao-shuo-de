import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 36,
  phase: 1,
  zh: "东西",
  py: "dōngxi",
  en: "thing",
  ru: "вещь",
  pos: "noun",
  hsd: ["{{word:dong1}}-{{light:xi1}}", "{{word:wu4}}"],
  tts: ["东西", "物"],
  fit: "natural",
  role: "noun",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:mai3}} {{word:le}} {{word:shen2me}} {{word:dong1}}-{{light:xi1}}?",
      hanzi: "你买了什么东西？",
      en: "What did you buy?",
      ru: "Что ты купил?",
    },
    {
      pinyin: "{{Word:bao1}}-{{word:li3}} {{word:you3}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "包里有东西。",
      en: "There's something in the bag.",
      ru: "В сумке что-то есть.",
    },
  ],
});
