import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1230,
  phase: 3,
  zh: "不必",
  py: "búbì",
  en: "need not",
  ru: "не нужно",
  pos: "adverb",
  hsd: ["{{word:bu4}}-{{word:yong4}}", "{{word:bu4}} {{word:yong4}}"],
  tts: ["不用", "不用"],
  literal: "no need",
  fit: "natural",
  topics: ["helping-words"],
  isA: ["auxiliary"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:bu4}}-{{word:yong4}} {{word:qu4}}.",
      hanzi: "你不用去。",
      en: "You don't need to go.",
      ru: "Тебе не нужно идти.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}}-{{word:yong4}} {{word:deng3}}.",
      hanzi: "我不用等。",
      en: "I don't need to wait.",
      ru: "Мне не нужно ждать.",
    },
  ],
});
