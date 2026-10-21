import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 835,
  phase: 2,
  zh: "害怕",
  py: "hàipà",
  en: "be afraid; scared",
  ru: "бояться",
  pos: "verb",
  hsd: ["{{word:pa4}}"],
  tts: ["怕"],
  fit: "word",
  topics: ["worry-and-fear"],
  isA: ["feeling-and-wanting"],
  examples: [
    { pinyin: "{{Word:wo3}} {{word:pa4}}.", hanzi: "我怕。", en: "I'm afraid.", ru: "Мне страшно." },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:pa4}}.",
      hanzi: "他不怕。",
      en: "He isn't afraid.",
      ru: "Ему не страшно.",
    },
  ],
});
