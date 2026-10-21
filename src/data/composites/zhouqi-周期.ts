import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8885,
  phase: 4,
  zh: "周期",
  py: "zhōuqī",
  en: "cycle; period",
  ru: "цикл; период",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{word:ci4}} {{word:cong2}} {{word:kai1shi3}} {{word:dao4}} {{word:zui4}}-{{word:hou4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:yi1}}-{{word:ci4}} {{word:you4}} {{word:yi1}}-{{word:ci4}} {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["一次从开始到最后的时间", "一次又一次一样的时间"],
  literal: "the time of one go from the start to the end / the same time again and again",
  fit: "plain",
  topics: ["how-often"],
  isA: ["time-span"],
  proposed: true,
});
