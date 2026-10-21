import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6570,
  phase: 4,
  zh: "住址",
  py: "zhùzhǐ",
  en: "address (where one lives)",
  ru: "домашний адрес",
  pos: "noun",
  hsd: [
    "{{word:di4}}-{{light:fang1}}-{{word:de}} {{word:hao4}}",
    "{{word:jia1}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:hao4}}",
  ],
  tts: ["地方的号", "家的地方的号"],
  literal: "the number of the place / the number of the place of the home",
  fit: "plain",
  topics: ["housing"],
  isA: ["idea"],
  proposed: true,
});
