import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7143,
  phase: 4,
  zh: "酒吧",
  py: "jiǔbā",
  en: "bar; pub",
  ru: "бар",
  pos: "noun",
  hsd: [
    "{{word:he1}} {{word:rang4}}-{{word:tou2}}-{{word:bian4}}-{{word:luan4}}-{{word:de}} {{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:he1}} \"jiǔ\"-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["喝让头变乱的水的地方", "喝酒的地方"],
  literal: "a place to drink the water that makes the head messy / a place to drink 'jiǔ'",
  fit: "plain",
  topics: ["at-a-restaurant"],
  isA: ["building"],
  proposed: true,
});
