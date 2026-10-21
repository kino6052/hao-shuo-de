import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1324,
  phase: 3,
  zh: "差别",
  py: "chābié",
  en: "difference",
  ru: "разница",
  pos: "noun",
  hsd: ["{{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["不一样的地方"],
  literal: "where they're different",
  fit: "plain",
  topics: ["different-and-varied"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我看到不一样的地方。",
      en: "I see the difference.",
      ru: "Я вижу разницу.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:liang3}}-{{light:ge4}} {{word:you3}} {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "这两个有不一样的地方。",
      en: "There is a difference between these two.",
      ru: "Между этими двумя есть разница.",
    },
  ],
});
