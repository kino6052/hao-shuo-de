import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9001,
  phase: 4,
  zh: "诚信",
  py: "chéngxìn",
  en: "honest and trustworthy; integrity",
  ru: "честный и надёжный; добросовестный",
  pos: "adjective",
  hsd: [
    "{{word:dui4}} {{word:ren2}} {{word:shuo1}} {{word:zhen1}}-{{word:de}} {{word:hua4}}, {{word:shuo1}} {{word:le}} {{word:jiu4}} {{word:zuo4}}",
    "{{word:shuo1}} {{word:zhen1}}-{{word:de}} {{word:hua4}}",
  ],
  tts: ["对人说真的话，说了就做", "说真的话"],
  literal: "tell people true words, and do what you said / say true words",
  fit: "plain",
  topics: ["kind-honest-and-mean"],
  isA: ["character-quality"],
  proposed: true,
});
