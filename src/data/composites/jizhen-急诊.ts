import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7591,
  phase: 4,
  zh: "急诊",
  py: "jízhěn",
  en: "emergency treatment; emergency room",
  ru: "неотложная помощь",
  pos: "noun",
  hsd: [
    "{{word:bu4}} {{word:neng2}} {{word:deng3}}, {{word:kuai4}} {{word:qu4}} {{word:zhao3}} {{word:ren2}} {{word:kan4}} {{word:shen1ti3}}",
    "{{word:shen1ti3}} {{word:hen3}} {{word:huai4}}-{{word:de}} {{word:ren2}} {{word:kuai4}} {{word:kan4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["不能等，快去找人看身体", "身体很坏的人快看的地方"],
  literal: "can't wait, quickly go find someone to look at the body / the place where people with a very bad body are looked at fast",
  fit: "plain",
  topics: ["at-the-hospital"],
  isA: ["activity-name"],
  proposed: true,
});
