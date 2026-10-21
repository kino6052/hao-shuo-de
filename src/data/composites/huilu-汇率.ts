import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8104,
  phase: 4,
  zh: "汇率",
  py: "huìlǜ",
  en: "exchange rate",
  ru: "курс обмена валют",
  pos: "noun",
  hsd: [
    "{{word:gei3}} {{word:yi1}}-{{light:ge4}} {{word:guo2}}-{{word:de}} {{word:jin1}}, {{word:neng2}} {{word:de2}}-{{word:dao4}} {{word:duo1}}-{{word:shao3}} {{word:bie2}}-{{word:de}} {{word:guo2}}-{{word:de}} {{word:jin1}}",
  ],
  tts: ["给一个国的金，能得到多少别的国的金"],
  literal: "give one country's money, how much of another country's money you can get",
  fit: "plain",
  topics: ["money-and-cards"],
  isA: ["idea"],
  proposed: true,
});
