import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9070,
  phase: 4,
  zh: "出境",
  py: "chūjìng",
  en: "leave the country; exit across the border",
  ru: "выезжать за границу",
  pos: "verb",
  hsd: [
    "{{word:chu1}}-{{word:guo2}}",
    "{{word:cong2}} {{word:zhe4}}-{{light:ge4}} {{word:guo2}} {{word:qu4}} {{word:bie2}}-{{word:de}} {{word:guo2}}",
  ],
  tts: ["出国", "从这个国去别的国"],
  literal: "go out of the country / go from this country to another country",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["moving-action"],
  proposed: true,
});
