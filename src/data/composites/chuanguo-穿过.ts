import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6121,
  phase: 4,
  zh: "穿过",
  py: "chuānguò",
  en: "cross; pass through; across",
  ru: "пересекать; проходить сквозь",
  pos: "verb",
  hsd: [
    "{{word:cong2}} X {{word:zhong1}}-{{word:jian1}} {{word:zou3}}-{{word:guo4}}-{{word:qu4}}",
    "{{word:cong2}} {{word:zhe4}}-{{word:bian1}} {{word:zou3}} {{word:dao4}} {{word:na4}}-{{word:bian1}}",
  ],
  tts: ["从X中间走过去", "从这边走到那边"],
  literal: "go from the middle of X to the other side / go from this side to that side",
  fit: "plain",
  topics: ["going-and-coming"],
  isA: ["moving-action"],
  proposed: true,
});
