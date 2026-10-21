import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7222,
  phase: 4,
  zh: "醉",
  py: "zuì",
  en: "be drunk",
  ru: "быть пьяным",
  pos: "verb",
  hsd: [
    "{{word:he1}} {{word:le}} {{word:hen3}} {{word:duo1}} {{word:rang4}}-{{word:tou2}}-{{word:bian4}}-{{word:luan4}}-{{word:de}} {{word:shui3}}",
    "{{word:he1}} {{word:le}} {{word:rang4}}-{{word:tou2}}-{{word:bian4}}-{{word:luan4}}-{{word:de}} {{word:shui3}}, {{word:tou2}} {{word:hen3}} {{word:luan4}}",
  ],
  tts: ["喝了很多让头变乱的水", "喝了让头变乱的水，头很乱"],
  literal: "drank a lot of the water that makes the head messy / drank the water that makes the head messy, the head is very messy",
  fit: "plain",
  topics: ["drinks"],
  isA: ["being-affected"],
  proposed: true,
});
