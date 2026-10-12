import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1518,
  phase: 3,
  zh: "桥",
  py: "qiáo",
  en: "bridge",
  ru: "мост",
  pos: "noun",
  hsd: [
    "{{word:cong2}} {{word:shui3}}-{{word:shang4}} {{word:tong1}}-{{word:guo4}}-{{word:qu4}}-{{word:de}} {{word:lu4}}",
  ],
  tts: ["从水上通过去的路"],
  literal: "a road that goes over the water",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:cong2}} {{word:shui3}}-{{word:shang4}} {{word:tong1}}-{{word:guo4}}-{{word:qu4}}-{{word:de}} {{word:lu4}}.",
      hanzi: "这是从水上通过去的路。",
      en: "This is a bridge.",
      ru: "Это мост.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zou3}} {{word:cong2}} {{word:shui3}}-{{word:shang4}} {{word:tong1}}-{{word:guo4}}-{{word:qu4}}-{{word:de}} {{word:lu4}}.",
      hanzi: "我走从水上通过去的路。",
      en: "I walk over the bridge.",
      ru: "Я иду по мосту.",
    },
  ],
});
