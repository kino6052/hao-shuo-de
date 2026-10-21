import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6375,
  phase: 4,
  zh: "教授",
  py: "jiàoshòu",
  en: "professor",
  ru: "профессор",
  pos: "noun",
  hsd: [
    "{{word:da4}}-{{word:xue2}}-{{word:li3}} {{word:bang1}}-{{word:ren2}}-{{word:xue2}}-{{word:de}} {{word:ren2}}",
    "{{word:bang1}} {{word:da4}}-{{word:xue2}}-{{word:sheng1}} {{word:xue2}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["大学里帮人学的人", "帮大学生学的人"],
  literal: "a person in a university who helps people learn",
  fit: "plain",
  topics: ["jobs"],
  isA: ["worker"],
  proposed: true,
});
