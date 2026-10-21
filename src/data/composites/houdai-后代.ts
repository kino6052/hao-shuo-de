import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8710,
  phase: 4,
  zh: "后代",
  py: "hòudài",
  en: "descendants; later generations",
  ru: "потомки; последующие поколения",
  pos: "noun",
  hsd: [
    "{{word:hai2}}-{{word:zi}} {{word:he2}} {{word:hai2}}-{{word:zi}}-{{word:de}} {{word:hai2}}-{{word:zi}}",
    "{{word:yi3}}-{{word:hou4}}-{{word:de}} {{word:hai2}}-{{word:zi}}",
  ],
  tts: ["孩子和孩子的孩子", "以后的孩子"],
  literal: "children and the children of children / the children of later times",
  fit: "plain",
  topics: ["parents-and-children"],
  isA: ["relative"],
  proposed: true,
});
