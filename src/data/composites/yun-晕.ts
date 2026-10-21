import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8083,
  phase: 4,
  zh: "晕",
  py: "yūn",
  en: "dizzy; faint",
  ru: "кружится голова; терять сознание",
  pos: "adjective",
  hsd: [
    "{{word:tou2}} {{word:hen3}} {{word:luan4}}, {{word:xiang3}} {{word:tang3}}-{{word:xia4}}",
    "{{word:tou2}} {{word:luan4}} {{word:le}}, {{word:shen2me}} {{word:dou1}} {{word:bu4}} {{word:zhi1dao4}}",
  ],
  tts: ["头很乱，想躺下", "头乱了，什么都不知道"],
  literal: "the head is very messy, I want to lie down / the head went messy, I know nothing",
  fit: "plain",
  topics: ["illness"],
  isA: ["bodily-state"],
  proposed: true,
});
