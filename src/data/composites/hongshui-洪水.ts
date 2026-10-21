import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8220,
  phase: 4,
  zh: "洪水",
  py: "hóngshuǐ",
  en: "flood",
  ru: "наводнение; паводок",
  pos: "noun",
  hsd: [
    "{{word:di4}}-{{word:shang4}} {{word:hen3}} {{word:duo1}} {{word:hen3}} {{word:duo1}}-{{word:de}} {{word:shui3}}",
    "{{word:shui3}} {{word:duo1}} {{word:dao4}} {{word:lu4}} {{word:he2}} {{word:fang2}}-{{word:zi}} {{word:dou1}} {{word:zai4}} {{word:shui3}}-{{word:li3}}",
  ],
  tts: ["地上很多很多的水", "水多到路和房子都在水里"],
  literal: "very very much water on the ground / so much water that the roads and houses are all in the water",
  fit: "plain",
  topics: ["rivers-lakes-and-floods"],
  isA: ["weather-thing"],
  proposed: true,
});
