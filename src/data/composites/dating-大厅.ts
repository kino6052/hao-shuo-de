import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6873,
  phase: 4,
  zh: "大厅",
  py: "dàtīng",
  en: "hall; lobby",
  ru: "холл, вестибюль, зал",
  pos: "noun",
  hsd: [
    "{{word:jin4}} {{word:men2}} {{word:jiu4}} {{word:dao4}}-{{word:de}} {{word:da4}}-{{word:de}} {{word:fang2}}-{{word:jian1}}",
    "{{word:deng3}} {{word:ren2}}-{{word:de}} {{word:da4}}-{{word:de}} {{word:fang2}}-{{word:jian1}}",
  ],
  tts: ["进门就到的大的房间", "等人的大的房间"],
  literal: "the big room you reach as soon as you go in / a big room for waiting",
  fit: "plain",
  topics: ["buildings"],
  isA: ["room"],
  proposed: true,
});
