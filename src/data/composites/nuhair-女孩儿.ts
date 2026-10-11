import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 557,
  phase: 2,
  zh: "女孩儿",
  py: "nǚháir",
  en: "girl",
  ru: "девочка",
  pos: "noun",
  hsd: ["{{word:nv3}}-{{word:hai2}}-{{light:zi}}"],
  tts: ["女孩子"],
  literal: "girl child",
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:nv3}}-{{word:hai2}}-{{word:zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "那个女孩子很小。",
      en: "That girl is very small.",
      ru: "Эта девочка очень маленькая.",
    },
    {
      pinyin: "{{Word:nv3}}-{{word:hai2}}-{{word:zi}} {{word:zai4}} {{word:shui4jiao4}}.",
      hanzi: "女孩子在睡觉。",
      en: "The girl is sleeping.",
      ru: "Девочка спит.",
    },
  ],
});
