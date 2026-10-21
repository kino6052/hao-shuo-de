import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8547,
  phase: 4,
  zh: "酒水",
  py: "jiǔshuǐ",
  en: "drinks (alcohol and other beverages)",
  ru: "напитки (спиртные и прочие)",
  pos: "noun",
  hsd: [
    "{{word:he1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:he1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, {{word:you3}} {{word:rang4}}-{{word:tou2}}-{{word:bian4}}-{{word:luan4}}-{{word:de}} {{word:shui3}}",
  ],
  tts: ["喝的东西", "喝的东西，有让头变乱的水"],
  literal: "things to drink / things to drink, including the water that makes the head messy",
  fit: "plain",
  topics: ["drinks"],
  isA: ["drink"],
  proposed: true,
});
