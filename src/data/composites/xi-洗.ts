import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 431,
  phase: 1,
  zh: "洗",
  py: "xǐ",
  en: "wash",
  ru: "мыть",
  pos: "verb",
  hsd: ["{{word:yong4}} {{word:shui3}} {{word:rang4}} X {{word:gan1jing4}}"],
  tts: ["用水让X干净"],
  literal: "use water to make X clean",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:yong4}} {{word:shui3}} {{word:rang4}} {{word:yi1fu}} {{word:gan1jing4}}.",
      hanzi: "用水让衣服干净。",
      en: "Wash the clothes.",
      ru: "Постирай одежду.",
    },
    {
      pinyin: "{{Word:chi1}}-{{word:fan4}} {{word:qian2}}, {{word:yong4}} {{word:shui3}} {{word:rang4}} {{word:shou3}} {{word:gan1jing4}}.",
      hanzi: "吃饭前，用水让手干净。",
      en: "Wash your hands before eating.",
      ru: "Помой руки перед едой.",
    },
  ],
});
