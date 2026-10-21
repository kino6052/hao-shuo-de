import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8959,
  phase: 4,
  zh: "湿度",
  py: "shīdù",
  en: "humidity; moisture level",
  ru: "влажность",
  pos: "noun",
  hsd: [
    "{{word:kong1}}-{{word:qi4}}-{{word:li3}} {{word:you3}} {{word:duo1}}-{{word:shao3}} {{word:shui3}}",
    "{{word:you3}} {{word:duo1}}-{{word:shao3}} {{word:shui3}}",
  ],
  tts: ["空气里有多少水", "有多少水"],
  literal: "how much water there is in the air / how much water there is",
  fit: "plain",
  topics: ["weather"],
  isA: ["weather-thing"],
  proposed: true,
});
