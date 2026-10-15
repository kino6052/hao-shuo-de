import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 840,
  phase: 2,
  zh: "常常",
  py: "chángcháng",
  en: "often",
  ru: "часто",
  pos: "adverb",
  hsd: ["{{word:chang2}}-{{word:chang2}}", "{{word:zuo4}} {{word:hen3}} {{word:duo1}} {{word:ci4}}"],
  tts: ["常常", "做很多次"],
  literal: "do it many times",
  fit: "natural",
  kinds: ["spelled", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chang2}}-{{word:chang2}} {{word:lai2}}.",
      hanzi: "我常常来。",
      en: "I come often.",
      ru: "Я прихожу часто.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:chang2}}-{{word:chang2}} {{word:chi1}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "他常常吃水果。",
      en: "He often eats fruit.",
      ru: "Он часто ест фрукты.",
    },
  ],
});
