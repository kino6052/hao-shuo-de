import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1288,
  phase: 3,
  zh: "同样",
  py: "tóngyàng",
  en: "same",
  ru: "такой же",
  pos: "adjective",
  hsd: ["{{word:tong2}}-{{word:yang4}}", "{{word:yi1}}-{{word:yang4}}"],
  tts: ["同样", "一样"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:he2}} {{word:wo3}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "他和我一样。",
      en: "He is the same as me.",
      ru: "Он такой же, как я.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:liang3}}-{{light:ge4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "这两个一样。",
      en: "These two are the same.",
      ru: "Эти двое одинаковые.",
    },
  ],
});
