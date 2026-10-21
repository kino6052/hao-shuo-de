import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9010,
  phase: 4,
  zh: "导师",
  py: "dǎoshī",
  en: "mentor; supervisor; tutor",
  ru: "наставник; научный руководитель",
  pos: "noun",
  hsd: [
    "{{word:bang1}} {{word:ni3}} {{word:xue2}}, {{word:bang1}} {{word:ni3}} {{word:zuo4}}-{{word:hao3}}-{{word:de}} {{word:ren2}}",
    "{{word:bang1}}-{{word:ren2}}-{{word:xue2}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["帮你学，帮你做好的人", "帮人学的人"],
  literal: "a person who helps you learn and do well / the one who helps people learn",
  fit: "plain",
  topics: ["studying"],
  isA: ["worker"],
  proposed: true,
});
