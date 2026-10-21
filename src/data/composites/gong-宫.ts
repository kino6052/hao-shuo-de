import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8910,
  phase: 4,
  zh: "宫",
  py: "gōng",
  en: "palace",
  ru: "дворец",
  pos: "noun",
  hsd: [
    "{{word:guo2}}-{{word:jia1}}-{{word:li3}} {{word:zui4}} {{word:da4}}-{{word:de}} {{word:ren2}}-{{word:de}} {{word:da4}} {{word:fang2}}-{{word:zi}}",
    "{{word:hen3}} {{word:da4}}, {{word:hen3}} {{word:hao3}}-{{word:kan4}}-{{word:de}} {{word:fang2}}-{{word:zi}}",
  ],
  tts: ["国家里最大的人的大房子", "很大，很好看的房子"],
  literal: "the big house of the biggest person in a country / a very big, very beautiful house",
  fit: "plain",
  topics: ["buildings"],
  isA: ["building"],
  proposed: true,
});
