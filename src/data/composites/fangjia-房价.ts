import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7720,
  phase: 4,
  zh: "房价",
  py: "fángjià",
  en: "house price; housing price",
  ru: "цена жилья",
  pos: "noun",
  hsd: [
    "{{word:mai3}} {{word:fang2}}-{{word:zi}} {{word:yao4}}-{{word:de}} {{word:jin1}}",
    "{{word:fang2}}-{{word:zi}} {{word:duo1}}-{{word:shao3}} {{word:jin1}}",
  ],
  tts: ["买房子要的金", "房子多少金"],
  literal: "the money needed to buy a house / how much money a house is",
  fit: "plain",
  topics: ["housing"],
  isA: ["amount-word"],
  proposed: true,
});
