import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8231,
  phase: 4,
  zh: "加重",
  py: "jiāzhòng",
  en: "make heavier; aggravate; worsen",
  ru: "отягощать; усугублять",
  pos: "verb",
  hsd: [
    "{{word:rang4}} X {{word:hai2}} {{word:zhong4}} {{word:yi1}}-{{word:dian3}}",
    "{{word:rang4}} X {{word:bian4}} {{word:zhong4}}",
    "{{word:rang4}} X {{word:hai2}} {{word:huai4}}",
  ],
  tts: ["让X还重一点", "让X变重", "让X还坏"],
  literal: "make X a bit heavier still / make X become heavy / make X even worse",
  fit: "plain",
  topics: ["increasing-and-rising"],
  isA: ["becoming"],
  proposed: true,
});
