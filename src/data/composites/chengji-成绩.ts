import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6330,
  phase: 4,
  zh: "成绩",
  py: "chéngjì",
  en: "score, grade; achievement",
  ru: "оценка, успехи",
  pos: "noun",
  hsd: [
    "{{word:xue2}}-{{word:de}} {{word:jie2}}-{{word:guo3}}",
    "{{word:zuo4}}-{{word:hao3}}-{{word:de}} {{word:jie2}}-{{word:guo3}}",
  ],
  tts: ["学的结果", "做好的结果"],
  literal: "the result of learning",
  fit: "plain",
  topics: ["exams-and-marks"],
  isA: ["idea"],
  proposed: true,
});
