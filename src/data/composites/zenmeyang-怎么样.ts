import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 522,
  phase: 2,
  zh: "怎么样",
  py: "zěnmeyàng",
  en: "how about",
  ru: "как насчёт",
  pos: "pronoun",
  hsd: ["{{word:zen3me}}-{{word:yang4}}", "…, {{word:hao3}} {{word:ma}}?"],
  tts: ["怎么样", "…，好吗？"],
  literal: "…, okay?",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:fang2}}-{{word:jian1}} {{word:zen3me}}-{{word:yang4}}?",
      hanzi: "你的房间怎么样？",
      en: "How is your room?",
      ru: "Как твоя комната?",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:zen3me}}-{{word:yang4}}?",
      hanzi: "今天怎么样？",
      en: "How is today?",
      ru: "Как сегодня?",
    },
  ],
});
