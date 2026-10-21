import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6863,
  phase: 4,
  zh: "车位",
  py: "chēwèi",
  en: "parking space",
  ru: "парковочное место",
  pos: "noun",
  hsd: [
    "{{word:fang4}}-{{word:che1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:che1}} {{word:bu4}} {{word:dong4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["放车的地方", "车不动的地方"],
  literal: "a place to put a car / a place where the car does not move",
  fit: "plain",
  topics: ["the-road"],
  isA: ["place"],
  proposed: true,
});
