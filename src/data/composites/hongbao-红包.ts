import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7092,
  phase: 4,
  zh: "红包",
  py: "hóngbāo",
  en: "red envelope (gift of money)",
  ru: "красный конверт (с деньгами)",
  pos: "noun",
  hsd: [
    "{{word:hong2}}-{{word:bao1}}",
    "{{word:li3}}-{{word:mian4}} {{word:fang4}} {{word:jin1}} {{word:gei3}} {{word:ren2}}-{{word:de}} {{word:hong2}}-{{word:de}} {{word:bao1}}",
  ],
  tts: ["红包", "里面放金给人的红的包"],
  literal: "a red bag with money in it that one gives to people",
  fit: "natural",
  topics: ["parties-and-gifts"],
  isA: ["container"],
  proposed: true,
});
