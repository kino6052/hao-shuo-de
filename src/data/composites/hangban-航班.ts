import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6900,
  phase: 4,
  zh: "航班",
  py: "hángbān",
  en: "flight (a scheduled trip by plane)",
  ru: "рейс",
  pos: "noun",
  hsd: ["{{word:fei1}}-{{word:ji1}} {{word:qu4}} X-{{word:de}} {{word:yi1}}-{{word:ci4}}"],
  tts: ["飞机去X的一次"],
  literal: "one time the plane goes to X",
  fit: "plain",
  topics: ["planes-and-airports"],
  isA: ["event"],
  proposed: true,
});
