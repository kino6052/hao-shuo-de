import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6709,
  phase: 4,
  zh: "及格",
  py: "jígé",
  en: "pass (an exam)",
  ru: "сдать экзамен",
  pos: "verb",
  hsd: [
    "{{word:de2}}-{{word:dao4}}-{{word:de}} {{word:fen1}}-{{word:shu4}} {{word:bu4}} {{word:huai4}}",
    "{{word:zuo4}}-{{word:dui4}}-{{word:de}} {{word:ti2}} {{word:bu4}} {{word:shao3}}",
  ],
  tts: ["得到的分数不坏", "做对的题不少"],
  literal: "the score you got is not bad; the questions done right are not few",
  fit: "plain",
  topics: ["exams-and-marks"],
  isA: ["receiving"],
  proposed: true,
});
