import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6555,
  phase: 4,
  zh: "预约",
  py: "yùyuē",
  en: "make an appointment; book a time",
  ru: "записаться; договориться заранее",
  pos: "verb",
  hsd: [
    "{{word:yi3}}-{{word:qian2}} {{word:shuo1}} {{word:hao3}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:jian4}}-{{word:mian4}}",
    "{{word:yi3}}-{{word:qian2}} {{word:he2}} X {{word:shuo1}} {{word:hao3}}",
  ],
  tts: ["以前说好什么时间见面", "以前和X说好"],
  literal: "agree beforehand what time to meet",
  fit: "plain",
  topics: ["meeting-and-parting"],
  isA: ["social-action"],
  proposed: true,
});
