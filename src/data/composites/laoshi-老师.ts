import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 201,
  phase: 1,
  zh: "老师",
  py: "lǎoshī",
  en: "teacher",
  ru: "учитель",
  hsd: [
    "{{word:jiao1}}-{{word:de}} {{word:ren2}}",
    "{{word:bang1}}-{{word:ren2}}-{{word:xue2}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["教的人", "帮人学的人"],
  literal: "the one who teaches / the one who helps people learn",
  fit: "plain",
});
