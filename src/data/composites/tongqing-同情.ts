import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6819,
  phase: 4,
  zh: "同情",
  py: "tóngqíng",
  en: "sympathize with; sympathy",
  ru: "сочувствовать; сочувствие",
  pos: "verb",
  hsd: [
    "{{word:wei4}} X {{word:jue2}}-{{word:de}} {{word:nan2}}-{{word:guo4}}",
    "X {{word:bu4}} {{word:hao3}}, {{word:wo3}} {{word:ye3}} {{word:jue2}}-{{word:de}} {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["为X觉得难过", "X不好，我也觉得不好"],
  literal: "for X feel sad / X is not well, I also feel it is not good",
  fit: "plain",
  topics: ["sad-and-angry"],
  isA: ["feeling-and-wanting"],
  proposed: true,
});
