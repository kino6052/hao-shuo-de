import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 185,
  phase: 1,
  zh: "汽车",
  py: "qìchē",
  en: "car",
  ru: "машина",
  pos: "noun",
  hsd: ["{{word:qi4}}-{{word:che1}}", "{{word:che1}}"],
  tts: ["汽车", "车"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:qi4}}-{{word:che1}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "他的汽车很快。",
      en: "His car is fast.",
      ru: "У него быстрая машина.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:kai1}} {{word:che1}} {{word:qu4}}.",
      hanzi: "我们开车去。",
      en: "We'll drive there.",
      ru: "Мы поедем на машине.",
    },
  ],
});
