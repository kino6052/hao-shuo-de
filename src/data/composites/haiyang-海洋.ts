import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1368,
  phase: 3,
  zh: "海洋",
  py: "hǎiyáng",
  en: "ocean",
  ru: "океан",
  pos: "noun",
  hsd: [
    "{{word:hen3}}-{{word:da4}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:hen3}}-{{word:da4}}-{{word:de}} {{word:shui3}}",
  ],
  tts: ["很大的有水的地方", "很大的水"],
  literal: "very big water",
  fit: "plain",
  topics: ["sea-coast-and-islands"],
  isA: ["landform"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我爱很大的有水的地方。",
      en: "I love the ocean.",
      ru: "Я люблю океан.",
    },
    {
      pinyin: "{{Word:hen3}}-{{word:da4}}-{{word:de}} {{word:shui3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "很大的水很冷。",
      en: "The ocean is cold.",
      ru: "Океан холодный.",
    },
  ],
});
