import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8943,
  phase: 4,
  zh: "免税",
  py: "miǎnshuì",
  en: "tax-free; duty-free; exempt from tax",
  ru: "освобождённый от налога; беспошлинный",
  pos: "verb",
  hsd: [
    "{{word:bu4}} {{word:yong4}} {{word:gei3}} {{word:guo2}}-{{word:jia1}} {{word:jin1}}",
    "{{word:mei2}}-{{word:you3}} {{word:yao4}} {{word:gei3}} {{word:guo2}}-{{word:jia1}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["不用给国家金", "没有要给国家的金"],
  literal: "no need to give the country money / there is no money to give the country",
  fit: "plain",
  topics: ["money-and-paying"],
  isA: ["trade-action"],
  proposed: true,
});
