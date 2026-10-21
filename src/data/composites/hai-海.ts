import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 860,
  phase: 2,
  zh: "海",
  py: "hǎi",
  en: "sea",
  ru: "море",
  pos: "noun",
  hsd: [
    "{{word:hen3}}-{{word:da4}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["很大的有水的地方"],
  literal: "a very big place with water",
  fit: "plain",
  topics: ["sea-coast-and-islands"],
  isA: ["landform"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:hen3}}-{{word:da4}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我看到很大的有水的地方。",
      en: "I see the sea.",
      ru: "Я вижу море.",
    },
    {
      pinyin: "{{Word:hen3}}-{{word:da4}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "很大的有水的地方很远。",
      en: "The sea is far away.",
      ru: "Море далеко.",
    },
  ],
});
