import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 274,
  phase: 1,
  zh: "大学",
  py: "dàxué",
  en: "university",
  ru: "университет",
  pos: "noun",
  hsd: ["{{word:da4}}-{{word:xue2}}"],
  tts: ["大学"],
  literal: "big learning",
  fit: "natural",
  note: "A real word: dà + xué.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:da4}}-{{word:xue2}} {{word:xue2}}.",
      hanzi: "他在大学学。",
      en: "He studies at university.",
      ru: "Он учится в университете.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:da4}}-{{word:xue2}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "我的大学很远。",
      en: "My university is far away.",
      ru: "Мой университет далеко.",
    },
  ],
});
