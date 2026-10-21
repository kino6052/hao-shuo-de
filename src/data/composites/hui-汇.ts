import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8719,
  phase: 4,
  zh: "汇",
  py: "huì",
  en: "remit (money); flow together; gather",
  ru: "переводить (деньги); стекаться",
  pos: "verb",
  hsd: [
    "{{word:ba3}} {{word:jin1}} {{word:cong2}} {{word:yi1}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:gei3}} {{word:dao4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:hen3}} {{word:duo1}} X {{word:zou3}} {{word:dao4}} {{word:yi1}}-{{word:qi3}}",
  ],
  tts: ["把金从一个地方给到别的地方", "很多X走到一起"],
  literal: "give money from one place to another place / many X go to one place together",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["trade-action"],
  proposed: true,
});
