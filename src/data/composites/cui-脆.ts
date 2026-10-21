import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7805,
  phase: 4,
  zh: "脆",
  py: "cuì",
  en: "crisp; brittle",
  ru: "хрустящий; хрупкий",
  pos: "adjective",
  hsd: [
    "{{word:hen3}} {{word:ying4}}, {{word:yi1}} {{word:yong4}} {{word:li4}} {{word:jiu4}} {{word:bian4}} {{word:liang3}}-{{light:ge4}} {{word:bu4}}-{{light:fen1}}",
    "{{word:yi1}} {{word:yong4}} {{word:li4}} {{word:jiu4}} {{word:fen1}}-{{word:kai1}}",
  ],
  tts: ["很硬，一用力就变两个部分", "一用力就分开"],
  literal: "very hard, as soon as force is used it becomes two parts / as soon as force is used it comes apart",
  fit: "plain",
  topics: ["hard-soft-heavy-light"],
  isA: ["touch-quality"],
  proposed: true,
});
