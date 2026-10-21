import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9002,
  phase: 4,
  zh: "筹备",
  py: "chóubèi",
  en: "prepare; make arrangements for",
  ru: "готовить; подготавливать",
  pos: "verb",
  hsd: [
    "{{word:kai1shi3}} {{word:yi3}}-{{word:qian2}}, {{word:ba3}} X {{word:yao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:zuo4}}-{{word:hao3}}",
    "{{word:wei4}} X {{word:zuo4}}-{{word:hao3}}",
  ],
  tts: ["开始以前，把X要的东西做好", "为X做好"],
  literal: "before it starts, make ready the things X needs / make ready for X",
  fit: "plain",
  topics: ["making-and-doing"],
  isA: ["making"],
  proposed: true,
});
