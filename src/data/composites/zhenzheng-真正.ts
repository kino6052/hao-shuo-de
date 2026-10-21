import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1157,
  phase: 3,
  zh: "真正",
  py: "zhēnzhèng",
  en: "real, truly",
  ru: "настоящий, по-настоящему",
  pos: "adjective",
  hsd: ["{{word:zhen1}}-{{word:de}}"],
  tts: ["真的"],
  literal: "real",
  fit: "natural",
  topics: ["easy-hard-right-wrong"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:zhen1}}-{{word:de}}.",
      hanzi: "这是真的。",
      en: "This is real.",
      ru: "Это настоящее.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhen1}}-{{word:de}} {{word:ai4}} {{word:ni3}}.",
      hanzi: "他真的爱你。",
      en: "He truly loves you.",
      ru: "Он действительно любит тебя.",
    },
  ],
});
