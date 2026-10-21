import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8572,
  phase: 4,
  zh: "中暑",
  py: "zhòngshǔ",
  en: "heatstroke; suffer heatstroke",
  ru: "тепловой удар",
  pos: "verb",
  hsd: [
    "{{word:re4}} {{word:dao4}} {{word:shen1ti3}} {{word:bu4}} {{word:hao3}}",
    "{{word:re4}} {{word:dao4}} {{word:tou2}} {{word:hen3}} {{word:luan4}}, {{word:shen1ti3}} {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["热到身体不好", "热到头很乱，身体不好"],
  literal: "so hot that the body is not well / so hot that the head is very confused and the body is not well",
  fit: "plain",
  topics: ["illness"],
  isA: ["being-affected"],
  proposed: true,
});
