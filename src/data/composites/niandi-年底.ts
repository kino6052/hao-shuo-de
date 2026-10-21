import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6711,
  phase: 4,
  zh: "年底",
  py: "niándǐ",
  en: "end of the year",
  ru: "конец года",
  pos: "noun",
  hsd: [
    "{{word:nian2}}-{{word:de}} {{word:zui4}}-{{word:hou4}}",
    "{{word:zui4}}-{{word:hou4}} {{word:yi1}}-{{light:ge4}} {{word:yue4}}",
  ],
  tts: ["年的最后", "最后一个月"],
  literal: "the last of the year; the last month",
  fit: "plain",
  topics: ["calendar"],
  isA: ["time-point"],
  proposed: true,
});
