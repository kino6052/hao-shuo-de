import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7511,
  phase: 4,
  zh: "中期",
  py: "zhōngqī",
  en: "mid-term; middle period",
  ru: "середина периода; среднесрочный",
  pos: "noun",
  hsd: [
    "{{word:zhong1}}-{{word:jian1}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:bu4}} {{word:zao3}} {{word:ye3}} {{word:bu4}} {{word:wan3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["中间的时间", "不早也不晚的时间"],
  literal: "the time in the middle / the time that is not early and not late",
  fit: "plain",
  topics: ["before-and-after"],
  isA: ["time-span"],
  proposed: true,
});
