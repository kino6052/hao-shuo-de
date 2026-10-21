import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7520,
  phase: 4,
  zh: "保修",
  py: "bǎoxiū",
  en: "guarantee free repair",
  ru: "гарантийный ремонт",
  pos: "verb",
  hsd: [
    "{{word:shuo1}} {{word:huai4}} {{word:le}} {{word:jiu4}} {{word:bu4}} {{word:yao4}} {{word:jin1}} {{word:zuo4}} {{word:hao3}}",
  ],
  tts: ["说坏了就不要金做好"],
  literal: "say that if it breaks, it is made good without money",
  fit: "plain",
  topics: ["repairs"],
  isA: ["making"],
  proposed: true,
});
