import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8021,
  phase: 4,
  zh: "团圆",
  py: "tuányuán",
  en: "reunite; family reunion",
  ru: "воссоединиться; семейное воссоединение",
  pos: "verb",
  hsd: [
    "{{word:fen1}}-{{word:kai1}}-{{word:de}} {{word:ren2}} {{word:you4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}",
    "{{word:yi1}}-{{word:jia1}} {{word:ren2}} {{word:you4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}",
  ],
  tts: ["分开的人又在一起", "一家人又在一起"],
  literal: "people who were apart are together again / a family is together again",
  fit: "plain",
  topics: ["meeting-and-parting"],
  isA: ["social-action"],
  proposed: true,
});
