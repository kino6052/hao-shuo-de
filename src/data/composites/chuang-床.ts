import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 233,
  phase: 1,
  zh: "床",
  py: "chuáng",
  en: "bed",
  ru: "кровать",
  pos: "noun",
  hsd: ["{{word:shui4jiao4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["睡觉的地方"],
  literal: "sleeping place",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shui4jiao4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的睡觉的地方很大。",
      en: "My bed is big.",
      ru: "У меня большая кровать.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}} {{word:zai4}} {{word:shui4jiao4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "孩子在睡觉的地方。",
      en: "The child is in bed.",
      ru: "Ребёнок в кровати.",
    },
  ],
});
