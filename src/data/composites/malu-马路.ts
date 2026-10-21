import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 915,
  phase: 2,
  zh: "马路",
  py: "mǎlù",
  en: "road",
  ru: "дорога",
  pos: "noun",
  hsd: ["{{word:lu4}}"],
  tts: ["路"],
  fit: "word",
  topics: ["the-road"],
  isA: ["outdoor-place"],
  examples: [
    {
      pinyin: "{{Word:lu4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "路很大。",
      en: "The road is wide.",
      ru: "Дорога широкая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:lu4}}-{{word:shang4}} {{word:zou3}}.",
      hanzi: "我在路上走。",
      en: "I'm walking on the road.",
      ru: "Я иду по дороге.",
    },
  ],
});
