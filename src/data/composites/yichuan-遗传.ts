import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8865,
  phase: 4,
  zh: "遗传",
  py: "yíchuán",
  en: "be inherited (genetically); heredity",
  ru: "передаваться по наследству; наследственность",
  pos: "verb",
  hsd: [
    "{{word:hai2}}-{{word:zi}} {{word:you3}} {{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} X",
    "{{word:ba4ba}}-{{word:ma1ma}}-{{word:de}} X, {{word:hai2}}-{{word:zi}} {{word:ye3}} {{word:you3}}",
  ],
  tts: ["孩子有爸爸妈妈的X", "爸爸妈妈的X，孩子也有"],
  literal: "the child has the parents' X / the parents' X, the child has it too",
  fit: "plain",
  topics: ["parents-and-children"],
  isA: ["owning"],
  proposed: true,
});
