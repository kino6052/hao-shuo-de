import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1003,
  phase: 3,
  zh: "万",
  py: "wàn",
  en: "ten thousand",
  ru: "десять тысяч",
  pos: "number",
  hsd: ["{{word:yi1}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}}"],
  tts: ["一零零零零"],
  literal: "one-zero-zero-zero-zero",
  fit: "plain",
  topics: ["number-words"],
  isA: ["counting-number"],
  note: "Numbers go up to what shí can build.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:yi1}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}}.",
      hanzi: "他有一零零零零。",
      en: "He has ten thousand.",
      ru: "У него десять тысяч.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:le}} {{word:yi1}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}}-{{word:ling2}}.",
      hanzi: "我买了一零零零零。",
      en: "I bought ten thousand.",
      ru: "Я купил десять тысяч.",
    },
  ],
});
