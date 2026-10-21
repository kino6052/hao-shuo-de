import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7310,
  phase: 4,
  zh: "岁数",
  py: "suìshu",
  en: "age; years of age",
  ru: "возраст",
  pos: "noun",
  hsd: [
    "{{word:duo1}} {{word:da4}}",
    "{{word:huo2}} {{word:le}} {{word:duo1}}-{{word:shao3}} {{word:nian2}}",
  ],
  tts: ["多大", "活了多少年"],
  literal: "how big / has lived how many years",
  fit: "natural",
  topics: ["young-and-old"],
  isA: ["time-span"],
  proposed: true,
});
