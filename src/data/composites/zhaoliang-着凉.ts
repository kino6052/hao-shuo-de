import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7216,
  phase: 4,
  zh: "着凉",
  py: "zháoliáng",
  en: "catch a cold; get chilled",
  ru: "простудиться, замёрзнуть",
  pos: "verb",
  hsd: [
    "{{word:yin1wei4}} {{word:leng3}}, {{word:shen1ti3}} {{word:bu4}} {{word:hao3}}",
    "{{word:leng3}} {{word:le}}, {{word:shen1ti3}} {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["因为冷，身体不好", "冷了，身体不好"],
  literal: "because of the cold, the body is not good / it got cold, the body is not good",
  fit: "plain",
  topics: ["pain-and-feeling-unwell"],
  isA: ["being-affected"],
  proposed: true,
});
