import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9050,
  phase: 4,
  zh: "课题",
  py: "kètí",
  en: "research topic; project; problem to study",
  ru: "тема исследования; проблема для изучения",
  pos: "noun",
  hsd: [
    "{{word:yao4}} {{word:hao3}}-{{word:hao3}} {{word:xue2}}-{{word:de}} {{word:wen4}}-{{word:ti2}}",
    "{{word:xue2}}-{{word:zhe3}} {{word:yao4}} {{word:xiang3}}-{{word:de}} {{word:ti2}}",
  ],
  tts: ["要好好学的问题", "学者要想的题"],
  literal: "a problem that is to be studied carefully / a question a scholar has to think about",
  fit: "plain",
  topics: ["school-subjects-and-courses"],
  isA: ["idea"],
  proposed: true,
});
