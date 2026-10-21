import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6411,
  phase: 4,
  zh: "讲座",
  py: "jiǎngzuò",
  en: "lecture",
  ru: "лекция",
  pos: "noun",
  hsd: [
    "{{word:bang1}} {{word:hen3}}-{{word:duo1}} {{word:ren2}} {{word:xue2}}-{{word:de}} {{word:hua4}}",
    "{{word:yi1}}-{{light:ge4}} {{word:ren2}} {{word:dui4}} {{word:hen3}}-{{word:duo1}} {{word:ren2}} {{word:shuo1}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["帮很多人学的话", "一个人对很多人说的话"],
  literal: "words that help many people learn / words one person says to many people",
  fit: "plain",
  topics: ["studying"],
  isA: ["event"],
  proposed: true,
});
