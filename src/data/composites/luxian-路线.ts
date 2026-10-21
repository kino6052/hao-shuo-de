import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 6204,
  phase: 4,
  zh: "路线",
  py: "lùxiàn",
  en: "route",
  ru: "маршрут",
  pos: "noun",
  hsd: [
    "{{word:lu4}}-{{word:xian4}}",
    "{{word:zou3}}-{{word:de}} {{word:lu4}}",
    "{{word:cong2}} X {{word:dao4}} Y {{word:zou3}}-{{word:de}} {{word:lu4}}",
  ],
  tts: ["路线", "走的路", "从X到Y走的路"],
  literal: "the road you walk / the road you walk from X to Y",
  fit: "plain",
  topics: ["directions"],
  isA: ["place"],
  proposed: true,
});
