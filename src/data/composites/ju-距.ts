import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7455,
  phase: 4,
  zh: "距",
  py: "jù",
  en: "be apart from; distance between",
  ru: "отстоять от; расстояние между",
  pos: "verb",
  hsd: [
    "X {{word:he2}} Y {{word:zhong1}}-{{word:jian1}} {{word:you3}} …",
    "X {{word:he2}} Y {{word:you3}} {{word:duo1}} {{word:yuan3}}",
  ],
  tts: ["X和Y中间有…", "X和Y有多远"],
  literal: "between X and Y there is … / how far X and Y are",
  fit: "plain",
  topics: ["near-far-and-distance"],
  isA: ["distance"],
  proposed: true,
});
