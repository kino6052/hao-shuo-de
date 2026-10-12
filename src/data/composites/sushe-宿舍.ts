import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1483,
  phase: 3,
  zh: "宿舍",
  py: "sùshè",
  en: "dormitory",
  ru: "общежитие",
  pos: "noun",
  hsd: [
    "{{word:xue2}}-{{word:de}} {{word:ren2}} {{word:shui4jiao4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["学的人睡觉的地方"],
  literal: "where students sleep",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:xue2}}-{{word:de}} {{word:ren2}} {{word:shui4jiao4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我在学的人睡觉的地方。",
      en: "I am in the dormitory.",
      ru: "Я в общежитии.",
    },
    {
      pinyin: "{{Word:xue2}}-{{word:de}} {{word:ren2}} {{word:shui4jiao4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "学的人睡觉的地方很小。",
      en: "The dormitory is small.",
      ru: "Общежитие маленькое.",
    },
  ],
});
