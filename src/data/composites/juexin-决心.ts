import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1041,
  phase: 3,
  zh: "决心",
  py: "juéxīn",
  en: "determination",
  ru: "решимость",
  pos: "noun",
  hsd: ["{{word:zai4}}-{{word:xin1}}-{{word:li3}}-{{word:de}} {{word:li4}}"],
  tts: ["在心里的力"],
  literal: "strength in the heart",
  fit: "plain",
  topics: ["deciding"],
  isA: ["feeling-name"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:zai4}} {{word:xin1}}-{{word:li3}}-{{word:de}} {{word:li4}}.",
      hanzi: "我有在心里的力。",
      en: "I have determination.",
      ru: "У меня есть решимость.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:zai4}} {{word:xin1}}-{{word:li3}}-{{word:de}} {{word:li4}}.",
      hanzi: "他有在心里的力。",
      en: "He has determination.",
      ru: "У него есть решимость.",
    },
  ],
});
