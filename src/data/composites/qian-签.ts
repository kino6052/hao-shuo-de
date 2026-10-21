import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6464,
  phase: 4,
  zh: "签",
  py: "qiān",
  en: "sign",
  ru: "подписывать",
  pos: "verb",
  hsd: [
    "{{word:xie3}} {{word:ni3}}-{{word:de}} {{word:ming2}}-{{word:zi4}}",
    "{{word:xie3}} {{word:ming2}}-{{word:zi4}}, {{word:shuo1}} {{word:hao3}}",
  ],
  tts: ["写你的名字", "写名字，说好"],
  literal: "write your name / write the name, say it is fine",
  fit: "plain",
  topics: ["office"],
  isA: ["social-action"],
  proposed: true,
});
