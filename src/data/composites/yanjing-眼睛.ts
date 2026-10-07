import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 239,
  phase: 1,
  zh: "眼睛",
  py: "yǎnjing",
  en: "eye",
  ru: "глаз",
  pos: "noun",
  hsd: ["{{word:yan3jing}}"],
  tts: ["眼睛"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ba3}} {{word:yan3jing}} {{word:guan1}}-{{word:shang4}}.",
      hanzi: "把眼睛关上。",
      en: "Close your eyes.",
      ru: "Закрой глаза.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:yan3jing}} {{word:shi4}} {{word:lan2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "她的眼睛是蓝色的。",
      en: "Her eyes are blue.",
      ru: "У неё голубые глаза.",
    },
  ],
});
