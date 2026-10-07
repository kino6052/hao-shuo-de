import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 34,
  phase: 1,
  zh: "学",
  py: "xué",
  en: "learn",
  ru: "учиться",
  pos: "verb",
  hsd: ["{{word:xue2}}"],
  tts: ["学"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:xue2}} \"Zhōngguó\" {{word:hua4}}.",
      hanzi: "我在学中国话。",
      en: "I'm learning Chinese.",
      ru: "Я учу китайский.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xue2}}-{{word:de}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "他学得很快。",
      en: "He learns fast.",
      ru: "Он быстро учится.",
    },
  ],
});
