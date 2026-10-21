import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7790,
  phase: 4,
  zh: "指挥",
  py: "zhǐhuī",
  en: "command; direct; conduct; commander",
  ru: "командовать; дирижировать",
  pos: "verb",
  hsd: [
    "{{word:jiao4}} X {{word:zuo4}} {{word:shen2me}}",
    "{{word:yong4}} {{word:shou3}} {{word:rang4}} {{word:ren2}} {{word:zhi1dao4}} {{word:zuo4}} {{word:shen2me}}",
  ],
  tts: ["叫X做什么", "用手让人知道做什么"],
  literal: "tell X what to do / use the hand to let people know what to do",
  fit: "plain",
  topics: ["working-life"],
  isA: ["social-action"],
  proposed: true,
});
