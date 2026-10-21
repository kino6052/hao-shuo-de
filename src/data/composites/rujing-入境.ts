import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8954,
  phase: 4,
  zh: "入境",
  py: "rùjìng",
  en: "enter a country; cross the border in",
  ru: "въезжать в страну",
  pos: "verb",
  hsd: [
    "{{word:jin4}}-{{word:dao4}} {{word:guo2}}-{{word:jia1}}-{{word:li3}}",
    "{{word:cong2}} {{word:bie2}}-{{word:de}} {{word:guo2}} {{word:dao4}} {{word:zhe4}}-{{light:ge4}} {{word:guo2}}",
  ],
  tts: ["进到国家里", "从别的国到这个国"],
  literal: "go into the country / from another country to this country",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["moving-action"],
  proposed: true,
});
