import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 470,
  phase: 1,
  zh: "走路",
  py: "zǒulù",
  en: "walk",
  ru: "ходить пешком",
  pos: "verb",
  hsd: ["{{word:zou3}}-{{word:lu4}}"],
  tts: ["走路"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zou3}}-{{word:lu4}}.",
      hanzi: "我爱走路。",
      en: "I love walking.",
      ru: "Я люблю ходить пешком.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}} {{word:xue2}} {{word:zou3}}-{{word:lu4}}.",
      hanzi: "孩子学走路。",
      en: "The child is learning to walk.",
      ru: "Ребёнок учится ходить.",
    },
  ],
});
