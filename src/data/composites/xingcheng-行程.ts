import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7495,
  phase: 4,
  zh: "行程",
  py: "xíngchéng",
  en: "itinerary; route and schedule",
  ru: "маршрут; программа поездки",
  pos: "noun",
  hsd: [
    "{{word:yao4}} {{word:zou3}}-{{word:de}} {{word:lu4}} {{word:he2}} {{word:shi2}}-{{word:jian1}}",
    "{{word:qu4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}}, {{word:yao4}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["要走的路和时间", "去别的地方，要做的东西"],
  literal: "the road and the time you will walk / going to other places, what has to be done",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["idea"],
  proposed: true,
});
