import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8461,
  phase: 4,
  zh: "消防",
  py: "xiāofáng",
  en: "fire fighting; fire protection",
  ru: "пожарная охрана; тушение пожаров",
  pos: "noun",
  hsd: [
    "{{word:bu4}} {{word:rang4}} {{word:huo3}} {{word:bian4}} {{word:da4}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}",
    "{{word:rang4}} {{word:huo3}} {{word:mei2}}-{{word:you3}}-{{word:de}} {{word:gong1}}-{{word:zuo4}}",
  ],
  tts: ["不让火变大的工作", "让火没有的工作"],
  literal: "the work of not letting the fire get big / the work of making fire be gone",
  fit: "plain",
  topics: ["police-and-safety"],
  isA: ["activity-name"],
  proposed: true,
});
