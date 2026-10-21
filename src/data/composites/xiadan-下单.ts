import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8455,
  phase: 4,
  zh: "下单",
  py: "xiàdān",
  en: "place an order",
  ru: "сделать заказ",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} {{word:wo3}} {{word:yao4}} {{word:mai3}} X",
    "{{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:shuo1}} {{word:wo3}} {{word:yao4}} {{word:mai3}} X",
  ],
  tts: ["说我要买X", "在网上说我要买X"],
  literal: "say I want to buy X / say online that I want to buy X",
  fit: "plain",
  topics: ["shopping"],
  isA: ["trade-action"],
  proposed: true,
});
