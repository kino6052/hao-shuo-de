import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7641,
  phase: 4,
  zh: "时差",
  py: "shíchā",
  en: "time difference; jet lag",
  ru: "разница во времени",
  pos: "noun",
  hsd: [
    "{{word:liang3}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:shi2}}-{{word:jian1}}-{{word:de}} {{word:bu4}}-{{word:tong2}}",
    "{{word:liang3}}-{{light:ge4}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}",
  ],
  tts: ["两个地方时间的不同", "两个地方的时间不一样"],
  literal: "the difference in time between two places / the time of two places is not the same",
  fit: "plain",
  topics: ["clock"],
  isA: ["time-span"],
  proposed: true,
});
