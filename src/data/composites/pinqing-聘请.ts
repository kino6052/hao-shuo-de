import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7465,
  phase: 4,
  zh: "聘请",
  py: "pìnqǐng",
  en: "hire",
  ru: "нанимать",
  pos: "verb",
  hsd: [
    "{{word:gei3}} X {{word:jin1}}, {{word:jiao4}} X {{word:lai2}} {{word:gong1}}-{{word:zuo4}}",
    "{{word:jiao4}} {{word:ren2}} {{word:lai2}} {{word:gong1}}-{{word:zuo4}}",
  ],
  tts: ["给X金，叫X来工作", "叫人来工作"],
  literal: "give X money, have X come to work / have a person come to work",
  fit: "plain",
  topics: ["jobs-and-hiring"],
  isA: ["working"],
  proposed: true,
});
