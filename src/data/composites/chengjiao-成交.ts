import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8596,
  phase: 4,
  zh: "成交",
  py: "chéngjiāo",
  en: "close a deal; strike a bargain",
  ru: "заключить сделку",
  pos: "verb",
  hsd: [
    "{{word:mai3}}-{{word:de}} {{word:ren2}} {{word:he2}} {{word:gei3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ren2}} {{word:dou1}} {{word:shuo1}} {{word:hao3}}",
    "{{word:liang3}}-{{word:bian1}} {{word:dou1}} {{word:shuo1}} {{word:hao3}}, {{word:mai3}}-{{word:dao4}} {{word:le}}",
  ],
  tts: ["买的人和给东西的人都说好", "两边都说好，买到了"],
  literal: "the person who buys and the person who gives the thing both say good / both sides say good, it is bought",
  fit: "plain",
  topics: ["shopping"],
  isA: ["trade-action"],
  proposed: true,
});
