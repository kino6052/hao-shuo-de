import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1491,
  phase: 3,
  zh: "幼儿园",
  py: "yòu’éryuán",
  en: "kindergarten",
  ru: "детский сад",
  pos: "noun",
  hsd: [
    "{{word:hen3}} {{word:xiao3}}-{{word:de}} {{word:hai2}}-{{light:zi}} {{word:wan2r}} {{word:he2}} {{word:xue2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["很小的孩子玩儿和学的地方"],
  literal: "the place where very small children play and learn",
  fit: "plain",
  topics: ["babies-and-children"],
  isA: ["building"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:hen3}} {{word:xiao3}}-{{word:de}} {{word:hai2}}-{{word:zi}} {{word:wan2r}} {{word:he2}} {{word:xue2}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "他在很小的孩子玩儿和学的地方。",
      en: "He is at kindergarten.",
      ru: "Он в детском саду.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:hen3}} {{word:xiao3}}-{{word:de}} {{word:hai2}}-{{word:zi}} {{word:wan2r}} {{word:he2}} {{word:xue2}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "我爱很小的孩子玩儿和学的地方。",
      en: "I love kindergarten.",
      ru: "Я люблю детский сад.",
    },
  ],
});
