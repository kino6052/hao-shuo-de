import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6387,
  phase: 4,
  zh: "课程",
  py: "kèchéng",
  en: "course, curriculum",
  ru: "курс, программа",
  pos: "noun",
  hsd: [
    "{{word:yao4}} {{word:xue2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:xue2}}-{{word:xiao4}}-{{word:li3}} {{word:yao4}} {{word:xue2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["要学的东西", "学校里要学的东西"],
  literal: "the things that are to be learned",
  fit: "plain",
  topics: ["school-subjects-and-courses"],
  isA: ["activity-name"],
  proposed: true,
});
