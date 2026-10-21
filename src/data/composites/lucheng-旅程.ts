import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8940,
  phase: 4,
  zh: "旅程",
  py: "lǚchéng",
  en: "journey; trip; itinerary",
  ru: "путешествие; маршрут",
  pos: "noun",
  hsd: [
    "{{word:qu4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:wan2r}}-{{word:de}} {{word:lu4}}",
    "{{word:cong2}} {{word:jia1}} {{word:dao4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:lu4}}",
  ],
  tts: ["去别的地方玩儿的路", "从家到别的地方的路"],
  literal: "the road for going to other places to play / the road from home to other places",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["event"],
  proposed: true,
});
