import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9110,
  phase: 4,
  zh: "密度",
  py: "mìdù",
  en: "density",
  ru: "плотность",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:you3}} {{word:duo1}}-{{word:shao3}}",
    "{{word:tong2}}-{{word:yang4}} {{word:da4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:you3}} {{word:duo1}}-{{word:shao3}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["一个地方有多少", "同样大的地方有多少东西"],
  literal: "how much there is in one place / how many things in a place of the same size",
  fit: "plain",
  topics: ["measures"],
  isA: ["measure-unit"],
  proposed: true,
});
