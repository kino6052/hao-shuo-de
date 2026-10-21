import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1056,
  phase: 3,
  zh: "同",
  py: "tóng",
  en: "same; together; with",
  ru: "одинаковый; вместе; с",
  pos: "adjective",
  hsd: ["{{word:tong2}}", "{{word:yi1}}-{{word:yang4}}", "{{word:yi1}}-{{word:qi3}}", "{{word:he2}}"],
  tts: ["同", "一样", "一起", "和"],
  fit: "word",
  topics: ["same-and-equal"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ta1}} {{word:yi1}}-{{word:qi3}} {{word:qu4}}.",
      hanzi: "我和他一起去。",
      en: "I go with him.",
      ru: "Я иду с ним.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:he2}} {{word:ni3}}-{{word:de}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "我的和你的一样。",
      en: "Mine is the same as yours.",
      ru: "Моё такое же, как твоё.",
    },
  ],
});
