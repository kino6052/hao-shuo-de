import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7359,
  phase: 4,
  zh: "利润",
  py: "lìrùn",
  en: "profit",
  ru: "прибыль",
  pos: "noun",
  hsd: [
    "{{word:duo1}} {{word:de2}}-{{word:dao4}}-{{word:de}} {{word:jin1}}",
    "{{word:de2}}-{{word:dao4}}-{{word:de}} {{word:jin1}} {{word:bi3}} {{word:gei3}}-{{word:chu1}}-{{word:de}} {{word:jin1}} {{word:duo1}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["多得到的金", "得到的金比给出的金多的部分"],
  literal: "the extra money got / the part where the money got is more than the money given out",
  fit: "plain",
  topics: ["profit-loss-and-bankruptcy"],
  isA: ["money-thing"],
  proposed: true,
});
