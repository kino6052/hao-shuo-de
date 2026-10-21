import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1449,
  phase: 3,
  zh: "专心",
  py: "zhuānxīn",
  en: "focused",
  ru: "сосредоточенный",
  pos: "adjective",
  hsd: ["{{word:xin1}} {{word:zai4}} X-{{word:shang4}}"],
  tts: ["心在X上"],
  literal: "the heart on X",
  fit: "plain",
  topics: ["studying-and-practising"],
  isA: ["character-quality"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xin1}} {{word:zai4}} {{word:shu1}}-{{word:shang4}}.",
      hanzi: "我心在书上。",
      en: "I focus on the book.",
      ru: "Я сосредоточен на книге.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xin1}} {{word:zai4}} {{word:gong1}}-{{word:zuo4}}-{{word:shang4}}.",
      hanzi: "他心在工作上。",
      en: "He focuses on his work.",
      ru: "Он сосредоточен на работе.",
    },
  ],
});
