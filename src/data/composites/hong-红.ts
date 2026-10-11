import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 453,
  phase: 1,
  zh: "红",
  py: "hóng",
  en: "red",
  ru: "красный",
  pos: "adjective",
  hsd: ["{{word:hong2}}", "{{word:hong2}}-{{word:se4}}"],
  tts: ["红", "红色"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:tou2}}-{{word:de}} {{word:qian2}}-{{word:mian4}} {{word:hong2}} {{word:le}}.",
      hanzi: "他的头的前面红了。",
      en: "His face turned red.",
      ru: "Он покраснел.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:hong2}}-{{word:se4}}.",
      hanzi: "我爱红色。",
      en: "I love red.",
      ru: "Я люблю красный цвет.",
    },
  ],
});
