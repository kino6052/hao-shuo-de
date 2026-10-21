import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8329,
  phase: 4,
  zh: "中断",
  py: "zhōngduàn",
  en: "interrupt; break off; cut short",
  ru: "прерывать; прекращать",
  pos: "verb",
  hsd: [
    "{{word:zai4}} {{word:zhong1}}-{{word:jian1}} {{word:bu4}} {{word:zuo4}} {{word:le}}",
    "{{word:rang4}} X {{word:zai4}} {{word:zhong1}}-{{word:jian1}} {{word:bu4}} {{word:dong4}}",
  ],
  tts: ["在中间不做了", "让X在中间不动"],
  literal: "stop doing it in the middle / make X not move in the middle",
  fit: "plain",
  topics: ["breaking-and-taking-apart"],
  isA: ["starting-and-stopping"],
  proposed: true,
});
