import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9184,
  phase: 4,
  zh: "选修",
  py: "xuǎnxiū",
  en: "take as an elective; choose a course to study",
  ru: "изучать по выбору; факультативный курс",
  pos: "verb",
  hsd: [
    "{{word:xue2}} {{word:wo3}} {{word:xiang3}} {{word:xue2}}-{{word:de}}",
    "{{word:wo3}} {{word:jue2}}-{{word:ding4}} {{word:xue2}} {{word:shen2me}}, {{word:jiu4}} {{word:xue2}} {{word:shen2me}}",
  ],
  tts: ["学我想学的", "我决定学什么，就学什么"],
  literal: "study what I want to study / I decide what to study, and study that",
  fit: "plain",
  topics: ["studying"],
  isA: ["learning-and-teaching"],
  proposed: true,
});
