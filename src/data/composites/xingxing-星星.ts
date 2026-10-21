import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 855,
  phase: 2,
  zh: "星星",
  py: "xīngxing",
  en: "star",
  ru: "звезда",
  pos: "noun",
  hsd: [
    "{{word:zai4}}-{{word:tian1}}-{{word:shang4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:ri4}}",
  ],
  tts: ["在天上的小的日"],
  literal: "a small sun in the sky",
  fit: "plain",
  topics: ["sky-and-space"],
  isA: ["sky-body"],
  note: "yuè covers stars too.",
  examples: [
    {
      pinyin: "{{Word:zai4}}-{{word:tian1}}-{{word:shang4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:ri4}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "在天上的小的日很多。",
      en: "There are many stars.",
      ru: "Звёзд много.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:zai4}}-{{word:tian1}}-{{word:shang4}}-{{word:de}} {{word:xiao3}}-{{word:de}} {{word:ri4}}.",
      hanzi: "我看到在天上的小的日。",
      en: "I see the stars.",
      ru: "Я вижу звёзды.",
    },
  ],
});
