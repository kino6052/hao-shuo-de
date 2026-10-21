import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6627,
  phase: 4,
  zh: "订",
  py: "dìng",
  en: "book; order; reserve",
  ru: "заказывать; бронировать",
  pos: "verb",
  hsd: [
    "{{word:xian4}}-{{word:zai4}} {{word:shuo1}} {{word:yi3}}-{{word:hou4}} {{word:yao4}} X",
    "{{word:rang4}} {{word:ta1}} {{word:ba3}} X {{word:liu2}}-{{word:gei3}} {{word:wo3}}",
  ],
  tts: ["现在说以后要X", "让他把X留给我"],
  literal: "say now that later one wants X / have them keep X for me",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["trade-action"],
  proposed: true,
});
