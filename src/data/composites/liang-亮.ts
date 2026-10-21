import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 802,
  phase: 2,
  zh: "亮",
  py: "liàng",
  en: "bright",
  ru: "яркий",
  pos: "adjective",
  hsd: ["{{word:ming2}}"],
  tts: ["明"],
  fit: "word",
  topics: ["how-it-feels"],
  isA: ["sound-or-light-quality"],
  examples: [
    {
      pinyin: "{{Word:yue4}} {{word:hen3}} {{word:ming2}}.",
      hanzi: "月很明。",
      en: "The moon is bright.",
      ru: "Луна яркая.",
    },
    {
      pinyin: "{{Word:ri4}} {{word:hen3}} {{word:ming2}}.",
      hanzi: "日很明。",
      en: "The sun is bright.",
      ru: "Солнце яркое.",
    },
  ],
});
