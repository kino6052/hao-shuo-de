import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 84,
  phase: 1,
  zh: "孩子",
  py: "háizi",
  en: "child",
  ru: "ребёнок",
  pos: "noun",
  hsd: ["{{word:hai2}}-{{light:zi}}", "{{word:xiao3}}-{{word:de}} {{word:ren2}}"],
  tts: ["孩子", "小的人"],
  literal: "small person",
  fit: "natural",
  note: "Keep -de: xiǎo rén means a mean person.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:san1}}-{{light:ge4}} {{word:hai2}}-{{word:zi}}.",
      hanzi: "她有三个孩子。",
      en: "She has three children.",
      ru: "У неё трое детей.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}} {{word:zai4}} {{word:wan2r}}.",
      hanzi: "孩子在玩儿。",
      en: "The child is playing.",
      ru: "Ребёнок играет.",
    },
  ],
});
