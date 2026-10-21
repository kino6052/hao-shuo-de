import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1495,
  phase: 3,
  zh: "开学",
  py: "kāixué",
  en: "school starts",
  ru: "начало учёбы",
  pos: "verb",
  hsd: ["{{word:kai1}}-{{word:xue2}}"],
  tts: ["开学"],
  literal: "open learning",
  fit: "natural",
  topics: ["studying"],
  isA: ["starting-and-stopping"],
  note: "Real Mandarin: 开学.",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:kai1}}-{{word:xue2}}.",
      hanzi: "今天开学。",
      en: "School starts today.",
      ru: "Сегодня начинается учёба.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:kai1}}-{{word:xue2}}.",
      hanzi: "明天开学。",
      en: "School starts tomorrow.",
      ru: "Завтра начинается учёба.",
    },
  ],
});
