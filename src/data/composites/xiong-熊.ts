import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7172,
  phase: 4,
  zh: "熊",
  py: "xióng",
  en: "bear",
  ru: "медведь",
  pos: "noun",
  hsd: [
    "{{word:you3}}-{{word:hen3}}-{{word:duo1}}-{{word:de}}-{{word:mao2}}-{{word:de}} {{word:da4}}-{{word:de}} {{word:dong4}}-{{word:wu4}}",
    "{{word:hen3}} {{word:zhong4}}-{{word:de}} {{word:da4}} {{word:dong4}}-{{word:wu4}}",
  ],
  tts: ["有很多的毛的大的动物", "很重的大动物"],
  literal: "a big animal with much fur / a very heavy big animal",
  fit: "plain",
  topics: ["wild-animals"],
  isA: ["mammal"],
  proposed: true,
});
