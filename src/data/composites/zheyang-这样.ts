import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 477,
  phase: 1,
  zh: "这样",
  py: "zhèyàng",
  en: "like this",
  ru: "так",
  pos: "pronoun",
  hsd: ["{{word:zhe4}}-{{word:yang4}}", "{{word:zhe4}}-{{word:zhong3}}"],
  tts: ["这样", "这种"],
  literal: "this kind",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:yang4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这样很好。",
      en: "This is good.",
      ru: "Так хорошо.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:zhe4}}-{{word:zhong3}} {{word:yi1fu}}.",
      hanzi: "我爱这种衣服。",
      en: "I love this kind of clothes.",
      ru: "Мне нравится такая одежда.",
    },
  ],
});
