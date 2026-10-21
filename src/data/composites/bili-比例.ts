import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7389,
  phase: 4,
  zh: "比例",
  py: "bǐlì",
  en: "proportion; ratio",
  ru: "пропорция; соотношение",
  pos: "noun",
  hsd: [
    "{{word:liang3}}-{{light:ge4}} {{word:shu4}} {{word:zhong1}}-{{word:jian1}}-{{word:de}} {{word:guan1xi}}",
    "X {{word:bi3}} Y {{word:duo1}}-{{word:shao3}}",
  ],
  tts: ["两个数中间的关系", "X比Y多少"],
  literal: "the relation between two numbers / how much X is compared with Y",
  fit: "plain",
  topics: ["sums"],
  isA: ["idea"],
  proposed: true,
});
