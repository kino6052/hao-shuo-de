import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6205,
  phase: 4,
  zh: "年代",
  py: "niándài",
  en: "era; decade",
  ru: "эпоха; десятилетие",
  pos: "noun",
  hsd: [
    "X-{{word:de}} {{word:shi2}}-{{word:jian1}}",
    "{{word:hen3}} {{word:chang2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["X的时间", "很长的时间"],
  literal: "the time of X / a long time",
  fit: "plain",
  topics: ["history-and-culture"],
  isA: ["time-span"],
  proposed: true,
});
