import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1132,
  phase: 3,
  zh: "水平",
  py: "shuǐpíng",
  en: "level, standard",
  ru: "уровень",
  pos: "noun",
  hsd: ["{{word:shui3}}-{{word:ping2}}", "{{word:duo1}} {{word:hao3}}"],
  tts: ["水平", "多好"],
  literal: "how good",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["how-good"],
  isA: ["value-quality"],
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:shui3}}-{{word:ping2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的水平很好。",
      en: "His level is good.",
      ru: "У него хороший уровень.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:shui3}}-{{word:ping2}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "你的水平很高。",
      en: "Your level is high.",
      ru: "У тебя высокий уровень.",
    },
  ],
});
