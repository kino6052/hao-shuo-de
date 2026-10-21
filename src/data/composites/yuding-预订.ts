import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6554,
  phase: 4,
  zh: "预订",
  py: "yùdìng",
  en: "book; reserve",
  ru: "бронировать; заказывать заранее",
  pos: "verb",
  hsd: [
    "{{word:yi3}}-{{word:qian2}} {{word:shuo1}} {{word:wo3}} {{word:yao4}} X",
    "{{word:ba3}} X {{word:liu2}} {{word:gei3}} {{word:wo3}}",
  ],
  tts: ["以前说我要X", "把X留给我"],
  literal: "say beforehand that I want X",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["trade-action"],
  proposed: true,
});
