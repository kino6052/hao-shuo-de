import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8684,
  phase: 4,
  zh: "定价",
  py: "dìngjià",
  en: "set a price; pricing; fixed price",
  ru: "назначать цену; цена",
  pos: "verb",
  hsd: [
    "{{word:ding4}} {{word:mai3}} X {{word:yao4}} {{word:gei3}} {{word:duo1}}-{{word:shao3}} {{word:jin1}}",
    "{{word:mai3}} X {{word:yao4}} {{word:gei3}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["定买X要给多少金", "买X要给的金"],
  literal: "settle how much money must be given to buy X / the money that must be given to buy X",
  fit: "plain",
  topics: ["prices-and-discounts"],
  isA: ["trade-action"],
  proposed: true,
});
