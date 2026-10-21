import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8784,
  phase: 4,
  zh: "前期",
  py: "qiánqī",
  en: "early stage; first phase",
  ru: "ранний период; начальный этап",
  pos: "noun",
  hsd: [
    "{{word:qian2}}-{{word:mian4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:shi2}}-{{word:jian1}} {{word:zui4}} {{word:qian2}}-{{word:mian4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["前面的时间", "时间最前面的部分"],
  literal: "the earlier time / the very front part of a time",
  fit: "plain",
  topics: ["before-and-after"],
  isA: ["time-span"],
  proposed: true,
});
