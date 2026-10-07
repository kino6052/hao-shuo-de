import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 83,
  phase: 1,
  zh: "她",
  py: "tā",
  en: "she",
  ru: "она",
  pos: "pronoun",
  hsd: ["{{word:ta1}}"],
  tts: ["她"],
  fit: "word",
  note: "Sounds the same as \"he\".",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}} {{word:ma1ma}}.",
      hanzi: "她是我妈妈。",
      en: "She's my mom.",
      ru: "Она моя мама.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "她很高。",
      en: "She's tall.",
      ru: "Она высокая.",
    },
  ],
});
