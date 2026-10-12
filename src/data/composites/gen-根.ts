import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1517,
  phase: 3,
  zh: "根",
  py: "gēn",
  en: "root",
  ru: "корень",
  pos: "noun",
  hsd: [
    "{{word:zhi2wu4}} {{word:zai4}} {{word:di4}}-{{word:xia4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}",
  ],
  tts: ["植物在地下的部分"],
  literal: "the part of a plant under the ground",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:zhi2wu4}} {{word:zai4}} {{word:di4}}-{{word:xia4}}-{{word:de}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "这是植物在地下的部分。",
      en: "This is the root.",
      ru: "Это корень.",
    },
    {
      pinyin: "{{Word:zhi2wu4}} {{word:zai4}} {{word:di4}}-{{word:xia4}}-{{word:de}} {{word:bu4}}-{{light:fen1}} {{word:hen3}} {{word:chang2}}.",
      hanzi: "植物在地下的部分很长。",
      en: "The root is long.",
      ru: "Корень длинный.",
    },
  ],
});
