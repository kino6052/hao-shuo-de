import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 858,
  phase: 2,
  zh: "河",
  py: "hé",
  en: "river",
  ru: "река",
  pos: "noun",
  hsd: [
    "{{word:chang2}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["长的有水的地方"],
  literal: "a long place with water",
  fit: "plain",
  topics: ["rivers-lakes-and-floods"],
  isA: ["landform"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:chang2}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我看到长的有水的地方。",
      en: "I see a river.",
      ru: "Я вижу реку.",
    },
    {
      pinyin: "{{Word:na4}}-{{word:li3}} {{word:you3}} {{word:chang2}}-{{word:de}} {{word:you3}}-{{word:shui3}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "那里有长的有水的地方。",
      en: "There is a river there.",
      ru: "Там есть река.",
    },
  ],
});
