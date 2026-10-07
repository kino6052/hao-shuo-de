import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 379,
  phase: 1,
  zh: "天气",
  py: "tiānqì",
  en: "weather",
  ru: "погода",
  pos: "noun",
  hsd: [
    "{{word:tian1}}-{{word:qi4}}",
    "{{word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kong1}}-{{word:qi4}}",
  ],
  tts: ["天气", "外面的空气"],
  literal: "day-air / the air outside",
  fit: "natural",
  note: "wài-miàn-de kōng-qì hěn rè: the weather is hot.",
  examples: [
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:tian1}}-{{word:qi4}} {{word:zen3me}}-{{word:yang4}}?",
      hanzi: "明天天气怎么样？",
      en: "What's the weather tomorrow?",
      ru: "Какая завтра погода?",
    },
    {
      pinyin: "{{Word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kong1}}-{{word:qi4}} {{word:hen3}} {{word:re4}}.",
      hanzi: "外面的空气很热。",
      en: "The weather is hot.",
      ru: "На улице жарко.",
    },
  ],
});
