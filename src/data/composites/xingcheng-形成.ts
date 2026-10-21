import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1089,
  phase: 3,
  zh: "形成",
  py: "xíngchéng",
  en: "form, take shape",
  ru: "образоваться",
  pos: "verb",
  hsd: ["{{word:bian4}}"],
  tts: ["变"],
  fit: "word",
  topics: ["changing"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bian4}} {{word:da4}} {{word:le}}.",
      hanzi: "它变大了。",
      en: "It has taken shape.",
      ru: "Это приняло форму.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:bian4}} {{word:leng3}} {{word:le}}.",
      hanzi: "水变冷了。",
      en: "The water has formed ice.",
      ru: "Вода остыла и образовалась.",
    },
  ],
});
