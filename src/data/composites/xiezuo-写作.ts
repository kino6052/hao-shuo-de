import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1040,
  phase: 3,
  zh: "写作",
  py: "xiězuò",
  en: "write",
  ru: "писать",
  pos: "verb",
  hsd: ["{{word:xie3}}-{{word:zuo4}}", "{{word:xie3}}"],
  tts: ["写作", "写"],
  fit: "natural",
  kinds: ["spelled", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:xie3}}-{{word:zuo4}}.",
      hanzi: "我爱写作。",
      en: "I love writing.",
      ru: "Я люблю писать.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xie3}}-{{word:zuo4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他写作很好。",
      en: "He writes well.",
      ru: "Он хорошо пишет.",
    },
  ],
});
