import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 103,
  phase: 1,
  zh: "字",
  py: "zì",
  en: "character (writing)",
  ru: "иероглиф",
  pos: "noun",
  hsd: ["{{word:zi4}}", "{{word:xie3}}-{{word:de}} {{word:ci2}}"],
  tts: ["字", "写的词"],
  literal: "written word",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zi4}} {{word:zen3me}} {{word:xie3}}?",
      hanzi: "这个字怎么写？",
      en: "How do you write this character?",
      ru: "Как пишется этот иероглиф?",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:zi4}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "他的字很好看。",
      en: "His handwriting is beautiful.",
      ru: "У него красивый почерк.",
    },
  ],
});
