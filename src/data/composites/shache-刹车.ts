import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8007,
  phase: 4,
  zh: "刹车",
  py: "shāchē",
  en: "brake; stop the car",
  ru: "тормозить; тормоз",
  pos: "verb",
  hsd: [
    "{{word:rang4}} {{word:che1}} {{word:bu4}} {{word:dong4}}",
    "{{word:rang4}} {{word:che1}} {{word:bu4}} {{word:dong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["让车不动", "让车不动的东西"],
  literal: "make the car not move / the thing that makes the car not move",
  fit: "plain",
  topics: ["the-road"],
  isA: ["starting-and-stopping"],
  proposed: true,
});
