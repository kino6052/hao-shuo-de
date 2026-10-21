import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9221,
  phase: 4,
  zh: "青春期",
  py: "qīngchūnqī",
  en: "adolescence; puberty",
  ru: "подростковый возраст; пубертат",
  pos: "noun",
  hsd: [
    "{{word:hai2}}-{{word:zi}}-{{word:de}} {{word:shen1ti3}} {{word:bian4}} {{word:da4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:hai2}}-{{word:zi}} {{word:he2}} {{word:da4}}-{{word:ren2}} {{word:zhong1}}-{{word:jian1}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["孩子的身体变大的时间", "孩子和大人中间的时间"],
  literal: "the time when a child's body grows big / the time between child and grown-up",
  fit: "plain",
  topics: ["young-and-old"],
  isA: ["time-span"],
  proposed: true,
});
