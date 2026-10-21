import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7496,
  phase: 4,
  zh: "学年",
  py: "xuénián",
  en: "academic year; school year",
  ru: "учебный год",
  pos: "noun",
  hsd: [
    "{{word:xue2}}-{{word:nian2}}",
    "{{word:xue2}}-{{word:xiao4}}-{{word:de}} {{word:yi1}}-{{word:nian2}}",
  ],
  tts: ["学年", "学校的一年"],
  literal: "learn-year / one year of school",
  fit: "plain",
  topics: ["years-and-centuries"],
  isA: ["time-span"],
  proposed: true,
});
