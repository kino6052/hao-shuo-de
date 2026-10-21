import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8512,
  phase: 4,
  zh: "求救",
  py: "qiújiù",
  en: "call for help; ask to be rescued",
  ru: "звать на помощь",
  pos: "verb",
  hsd: [
    "{{word:jiao4}} {{word:ren2}} {{word:lai2}} {{word:bang1}} {{word:wo3}}",
    "{{word:jiao4}} {{word:ren2}} {{word:bang1}} {{word:wo3}} {{word:bu4}} {{word:si3}}",
  ],
  tts: ["叫人来帮我", "叫人帮我不死"],
  literal: "call people to come help me / call people to help me not die",
  fit: "plain",
  topics: ["police-and-safety"],
  isA: ["social-action"],
  proposed: true,
});
