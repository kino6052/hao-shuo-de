import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 324,
  phase: 1,
  zh: "相信",
  py: "xiāngxìn",
  en: "believe",
  ru: "верить",
  pos: "verb",
  hsd: ["{{word:jue2}}-{{light:de2}} {{word:shi4}} {{word:zhen1}}-{{word:de}}"],
  tts: ["觉得是真的"],
  literal: "think it's true",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "我觉得是真的。",
      en: "I believe it.",
      ru: "Я верю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:jue2}}-{{light:de2}} {{word:ta1}} {{word:shuo1}}-{{word:de}} {{word:shi4}} {{word:zhen1}}-{{word:de}} {{word:ma}}?",
      hanzi: "你觉得他说的是真的吗？",
      en: "Do you believe what he said?",
      ru: "Ты веришь тому, что он сказал?",
    },
  ],
});
