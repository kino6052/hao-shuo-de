import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 982,
  phase: 2,
  zh: "建筑",
  py: "jiànzhù",
  en: "building",
  ru: "здание",
  pos: "verb",
  hsd: ["{{word:da4}}-{{word:de}} {{word:jia1}}"],
  tts: ["大的家"],
  literal: "a big house",
  fit: "plain",
  topics: ["buildings"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:da4}}-{{word:de}} {{word:jia1}}.",
      hanzi: "我看到大的家。",
      en: "I see a building.",
      ru: "Я вижу здание.",
    },
    {
      pinyin: "{{Word:da4}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:na4}}-{{word:li3}}.",
      hanzi: "大的家在那里。",
      en: "The building is over there.",
      ru: "Здание вон там.",
    },
  ],
});
