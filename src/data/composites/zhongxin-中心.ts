import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 600,
  phase: 2,
  zh: "中心",
  py: "zhōngxīn",
  en: "center",
  ru: "центр",
  pos: "noun",
  hsd: ["{{word:zhong1}}-{{word:xin1}}", "{{word:zhong1}}-{{word:jian1}}"],
  tts: ["中心", "中间"],
  literal: "middle heart / the middle",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:shi4}} {{word:zhong1}}-{{word:xin1}}.",
      hanzi: "这里是中心。",
      en: "This is the center.",
      ru: "Это центр.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:zhong1}}-{{word:xin1}}.",
      hanzi: "我的家在中心。",
      en: "My home is in the center.",
      ru: "Мой дом в центре.",
    },
  ],
});
