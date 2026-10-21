import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8020,
  phase: 4,
  zh: "雪糕",
  py: "xuěgāo",
  en: "ice cream bar; ice lolly; ice cream",
  ru: "мороженое",
  pos: "noun",
  hsd: [
    "{{word:tian2}}-{{word:tian2}}-{{word:de}}-{{word:chi1}}-{{word:de}} {{word:hen3}}-{{word:leng3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:tian1}} {{word:re4}}-{{word:de}} {{word:shi2}}-{{light:hou4}} {{word:chi1}}-{{word:de}} {{word:leng3}}-{{word:de}} {{word:tian2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["甜甜地吃的很冷的东西", "天热的时候吃的冷的甜的东西"],
  literal: "a very cold sweet food / a cold sweet food eaten when the day is hot",
  fit: "plain",
  topics: ["sweets-and-snacks"],
  isA: ["snack-or-sweet"],
  proposed: true,
});
