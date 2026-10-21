import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9189,
  phase: 4,
  zh: "炎症",
  py: "yánzhèng",
  en: "inflammation",
  ru: "воспаление",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}} {{word:you3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:hong2}}, {{word:hen3}} {{word:re4}}, {{word:hen3}} {{word:tong4}}",
    "{{word:shen1ti3}}-{{word:de}} {{word:yi1}}-{{word:dian3}} {{word:di4}}-{{light:fang1}} {{word:bu4}} {{word:hao3}}, {{word:hen3}} {{word:tong4}}",
  ],
  tts: ["身体有的地方很红，很热，很痛", "身体的一点地方不好，很痛"],
  literal: "some place on the body is very red, very hot and very painful / a little place on the body is not well, very painful",
  fit: "plain",
  topics: ["illness"],
  isA: ["state-name"],
  proposed: true,
});
