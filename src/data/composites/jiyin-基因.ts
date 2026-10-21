import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9092,
  phase: 4,
  zh: "基因",
  py: "jīyīn",
  en: "gene",
  ru: "ген",
  pos: "noun",
  hsd: [
    "{{word:ba4ba}}-{{word:ma1ma}} {{word:gei3}} {{word:hai2}}-{{word:zi}}-{{word:de}} {{word:shen1ti3}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:shen1ti3}}-{{word:li3}}-{{word:de}}, {{word:rang4}} {{word:hai2}}-{{word:zi}} {{word:he2}} {{word:ba4ba}}-{{word:ma1ma}} {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["爸爸妈妈给孩子的身体里的东西", "身体里的，让孩子和爸爸妈妈一样的东西"],
  literal: "the thing in the body that parents give their child / the thing in the body that makes a child like its parents",
  fit: "plain",
  topics: ["inside-the-body"],
  isA: ["natural-thing"],
  proposed: true,
});
