import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8778,
  phase: 4,
  zh: "期限",
  py: "qīxiàn",
  en: "deadline; time limit; term",
  ru: "срок; крайний срок",
  pos: "noun",
  hsd: [
    "{{word:yao4}} {{word:zuo4}}-{{word:wan2}}-{{word:de}} {{word:zui4}}-{{word:hou4}} {{word:yi1}}-{{word:tian1}}",
    "{{word:zui4}} {{word:wan3}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["要做完的最后一天", "最晚的时间"],
  literal: "the last day by which it must be finished / the latest time",
  fit: "plain",
  topics: ["weeks-months-and-deadlines"],
  isA: ["time-point"],
  proposed: true,
});
