import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1429,
  phase: 3,
  zh: "道",
  py: "dào",
  en: "path, way",
  ru: "дорога, путь",
  pos: "noun",
  hsd: ["{{word:lu4}}"],
  tts: ["路"],
  fit: "word",
  topics: ["the-road"],
  isA: ["outdoor-place"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:zou3}} {{word:zhe4}}-{{light:ge4}} {{word:lu4}}.",
      hanzi: "我们走这个路。",
      en: "We take this path.",
      ru: "Мы идём по этому пути.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:lu4}} {{word:hen3}} {{word:chang2}}.",
      hanzi: "这个路很长。",
      en: "This path is long.",
      ru: "Этот путь длинный.",
    },
  ],
});
