import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8610,
  phase: 4,
  zh: "贷款",
  py: "dàikuǎn",
  en: "loan; take out a loan",
  ru: "кредит; брать кредит",
  pos: "verb",
  hsd: [
    "{{word:cong2}} {{word:fang4}}-{{word:jin1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:na2}} {{word:jin1}}, {{word:yi3}}-{{word:hou4}} {{word:gei3}} {{word:hui2}}-{{word:qu4}}",
    "{{word:na2}}-{{word:lai2}}-{{word:de}} {{word:jin1}}, {{word:yi3}}-{{word:hou4}} {{word:yao4}} {{word:gei3}} {{word:hui2}}-{{word:qu4}}",
  ],
  tts: ["从放金的地方拿金，以后给回去", "拿来的金，以后要给回去"],
  literal: "take money from the place that keeps money and give it back later / money taken that has to be given back later",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["trade-action"],
  proposed: true,
});
