import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 12,
  phase: 1,
  zh: "的",
  py: "de",
  en: "possessive marker",
  ru: "показатель принадлежности",
  pos: "auxiliary",
  hsd: ["{{word:de}}"],
  tts: ["的"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:bao1}} {{word:ma}}?",
      hanzi: "这是你的包吗？",
      en: "Is this your bag?",
      ru: "Это твоя сумка?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:hong2}}-{{word:se4}}-{{word:de}} {{word:yi1fu}}.",
      hanzi: "我爱红色的衣服。",
      en: "I love red clothes.",
      ru: "Я люблю красную одежду.",
    },
  ],
});
