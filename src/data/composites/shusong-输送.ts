import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9243,
  phase: 4,
  zh: "输送",
  py: "shūsòng",
  en: "transport; convey; deliver",
  ru: "транспортировать; доставлять",
  pos: "verb",
  hsd: [
    "{{word:ba3}} X {{word:na2}} {{word:dao4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:ba3}} X {{word:cong2}} {{word:zhe4}}-{{word:li3}} {{word:gei3}} {{word:dao4}} {{word:na4}}-{{word:li3}}",
  ],
  tts: ["把X拿到别的地方", "把X从这里给到那里"],
  literal: "take X to another place / give X from here to there",
  fit: "plain",
  topics: ["giving-and-getting"],
  isA: ["handling-action"],
  proposed: true,
});
