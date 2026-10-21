import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7177,
  phase: 4,
  zh: "院子",
  py: "yuànzi",
  en: "yard; courtyard",
  ru: "двор",
  pos: "noun",
  hsd: [
    "{{word:jia1}} {{word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kong1}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:zai4}} {{word:jia1}} {{word:wai4}}-{{word:mian4}}, {{word:mei2}} {{word:you3}} {{word:fang2}}-{{word:zi}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["家外面的空的地方", "在家外面，没有房子的地方"],
  literal: "the empty place outside the home / a place outside the home with no house",
  fit: "plain",
  topics: ["housing"],
  isA: ["outdoor-place"],
  proposed: true,
});
