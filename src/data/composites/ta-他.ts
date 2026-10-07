import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 18,
  phase: 1,
  zh: "他",
  py: "tā",
  en: "he",
  ru: "он",
  pos: "pronoun",
  hsd: ["{{word:ta1}}"],
  tts: ["他"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}} {{word:ba4ba}}.",
      hanzi: "他是我爸爸。",
      en: "He is my dad.",
      ru: "Он мой папа.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "他不在家。",
      en: "He isn't at home.",
      ru: "Его нет дома.",
    },
  ],
});
