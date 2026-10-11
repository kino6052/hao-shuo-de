import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 807,
  phase: 2,
  zh: "养",
  py: "yǎng",
  en: "raise, keep (animals)",
  ru: "держать (животных)",
  pos: "verb",
  hsd: ["{{word:zai4}} {{word:jia1}}-{{word:li3}} {{word:you3}}", "{{word:kan4}}-{{word:hao3}} X"],
  tts: ["在家里有", "看好X"],
  literal: "have at home / look after well",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:jia1}}-{{word:li3}} {{word:you3}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "我在家里有动物。",
      en: "I keep an animal at home.",
      ru: "Я держу дома животное.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:hao3}} X.",
      hanzi: "你看好X。",
      en: "You take care of it.",
      ru: "Ты ухаживаешь за ним.",
    },
  ],
});
