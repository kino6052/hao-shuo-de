import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9116,
  phase: 4,
  zh: "人均",
  py: "rénjūn",
  en: "per person; per capita",
  ru: "на душу населения; в среднем на человека",
  pos: "verb",
  hsd: [
    "{{word:yi1}}-{{light:ge4}} {{word:ren2}} {{word:you3}} {{word:duo1}}-{{word:shao3}}",
    "{{word:ba3}} X {{word:fen1}} {{word:gei3}} {{word:ren2}}-{{word:ren2}}, {{word:yi1}}-{{light:ge4}} {{word:ren2}} {{word:you3}} {{word:duo1}}-{{word:shao3}}",
  ],
  tts: ["一个人有多少", "把X分给人人，一个人有多少"],
  literal: "how much one person has / share X among everyone, how much does one person have",
  fit: "plain",
  topics: ["sums"],
  isA: ["thinking-action"],
  proposed: true,
});
