import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 491,
  phase: 1,
  zh: "鱼",
  py: "yú",
  en: "fish",
  ru: "рыба",
  pos: "noun",
  hsd: ["{{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4}}-{{word:wu4}}"],
  tts: ["在水里的动物"],
  literal: "animal in the water",
  fit: "plain",
  note: "Lesson {{lesson:roles-of-a-word}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:chi1}} {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "我爱吃在水里的动物。",
      en: "I love eating fish.",
      ru: "Я люблю рыбу.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:zai4}}-{{word:shui3}}-{{word:li3}}-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:ma}}?",
      hanzi: "这里有在水里的动物吗？",
      en: "Are there fish here?",
      ru: "Здесь есть рыба?",
    },
  ],
});
