import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 530,
  phase: 2,
  zh: "猫",
  py: "māo",
  en: "cat",
  ru: "кошка",
  pos: "noun",
  hsd: ["{{word:jiao4}} \"miāo\"-{{word:de}} {{word:dong4}}-{{word:wu4}}"],
  tts: ["叫喵的动物"],
  literal: "the animal that says \"miao\"",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:jiao4}} \"miāo\"-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "叫“喵”的动物很小。",
      en: "The cat is very small.",
      ru: "Кошка очень маленькая.",
    },
    {
      pinyin: "{{Word:jiao4}} \"miāo\"-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:zai4}} {{word:shui4jiao4}}.",
      hanzi: "叫“喵”的动物在睡觉。",
      en: "The cat is sleeping.",
      ru: "Кошка спит.",
    },
  ],
});
