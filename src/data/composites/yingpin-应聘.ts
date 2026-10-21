import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7628,
  phase: 4,
  zh: "应聘",
  py: "yìngpìn",
  en: "apply for a job",
  ru: "подавать заявку на работу",
  pos: "verb",
  hsd: [
    "{{word:qu4}} X {{word:zhao3}} {{word:gong1}}-{{word:zuo4}}",
    "{{word:dui4}} X {{word:shuo1}} {{word:wo3}} {{word:xiang3}} {{word:gong1}}-{{word:zuo4}}",
  ],
  tts: ["去X找工作", "对X说我想工作"],
  literal: "go to X to look for work / tell X I want to work",
  fit: "plain",
  topics: ["jobs-and-hiring"],
  isA: ["working"],
  proposed: true,
});
