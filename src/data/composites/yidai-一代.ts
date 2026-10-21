import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6543,
  phase: 4,
  zh: "一代",
  py: "yídài",
  en: "generation",
  ru: "поколение",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{word:yang4}} {{word:lao3}}-{{word:de}} {{word:ren2}}",
    "{{word:tong2}}-{{word:yi1}}-{{light:ge4}} {{word:shi2}}-{{word:jian1}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["一样老的人", "同一个时间的人"],
  literal: "people of the same age",
  fit: "plain",
  topics: ["peoples-and-generations"],
  isA: ["group-of-people"],
  proposed: true,
});
