import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1069,
  phase: 3,
  zh: "处理",
  py: "chǔlǐ",
  en: "handle, deal with",
  ru: "обрабатывать, решать",
  pos: "verb",
  hsd: ["{{word:zuo4}}"],
  tts: ["做"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:lai2}} {{word:zuo4}}.",
      hanzi: "我来做。",
      en: "I'll handle it.",
      ru: "Я займусь этим.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}} {{word:hao3}} {{word:le}}.",
      hanzi: "他做好了。",
      en: "He handled it.",
      ru: "Он с этим справился.",
    },
  ],
});
