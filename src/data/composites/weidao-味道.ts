import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 745,
  phase: 2,
  zh: "味道",
  py: "wèidào",
  en: "taste, flavor",
  ru: "вкус",
  pos: "noun",
  hsd: [
    "{{word:wei4}}-{{word:dao4}}",
    "{{word:kou3}}-{{word:li3}}-{{word:de}} {{word:yang4}}-{{light:zi}}",
  ],
  tts: ["味道", "口里的样子"],
  literal: "the way it is in the mouth",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["tastes"],
  isA: ["taste-quality"],
  note: "Lesson {{lesson:how-much}}. Good or not: wèi-dào hěn hǎo, wèi-dào bù hǎo.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:kou3}}-{{word:li3}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个口里的样子很好。",
      en: "This tastes good.",
      ru: "Это вкусно на вкус.",
    },
    {
      pinyin: "{{Word:shui3}}-{{word:de}} {{word:kou3}}-{{word:li3}}-{{word:de}} {{word:yang4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "水的口里的样子很好。",
      en: "The water tastes good.",
      ru: "У воды хороший вкус.",
    },
  ],
});
