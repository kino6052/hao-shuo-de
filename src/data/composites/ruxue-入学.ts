import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6732,
  phase: 4,
  zh: "入学",
  py: "rùxué",
  en: "enroll; start school",
  ru: "поступать в школу, зачисляться",
  pos: "verb",
  hsd: [
    "{{word:jin4}} {{word:xue2}}-{{word:xiao4}} {{word:xue2}}",
    "{{word:kai1shi3}} {{word:zai4}} {{word:xue2}}-{{word:xiao4}} {{word:xue2}}",
  ],
  tts: ["进学校学", "开始在学校学"],
  literal: "enter school to learn / start learning at school",
  fit: "plain",
  topics: ["school-days-and-years"],
  isA: ["learning-and-teaching"],
  proposed: true,
});
