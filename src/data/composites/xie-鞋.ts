import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 551,
  phase: 2,
  zh: "鞋",
  py: "xié",
  en: "shoe",
  ru: "обувь",
  pos: "noun",
  hsd: ["{{word:zai4}}-{{word:jiao3}}-{{word:shang4}}-{{word:de}} {{word:yi1fu}}"],
  tts: ["在脚上的衣服"],
  literal: "clothes for the feet",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zai4}} {{word:jiao3}}-{{word:shang4}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:hei1}}-{{word:se4}}-{{word:de}}.",
      hanzi: "在脚上的衣服是黑色的。",
      en: "The shoes are black.",
      ru: "Туфли чёрные.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:mai3}} {{word:zai4}} {{word:jiao3}}-{{word:shang4}}-{{word:de}} {{word:yi1fu}}.",
      hanzi: "我要买在脚上的衣服。",
      en: "I want to buy shoes.",
      ru: "Я хочу купить обувь.",
    },
  ],
});
