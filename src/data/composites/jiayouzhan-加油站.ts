import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7105,
  phase: 4,
  zh: "加油站",
  py: "jiāyóuzhàn",
  en: "gas station",
  ru: "заправка",
  pos: "noun",
  hsd: [
    "{{word:mai3}} {{word:che1}} {{word:yong4}}-{{word:de}} {{word:you2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:gei3}} {{word:che1}} {{word:fang4}} {{word:you2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["买车用的油的地方", "给车放油的地方"],
  literal: "a place to buy the oil a car uses / a place to put oil in the car",
  fit: "plain",
  topics: ["the-road"],
  isA: ["place"],
  proposed: true,
});
