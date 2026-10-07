import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 389,
  phase: 1,
  zh: "常",
  py: "cháng",
  en: "often",
  ru: "часто",
  pos: "adverb",
  hsd: ["{{word:chang2}}-{{word:chang2}}"],
  tts: ["常常"],
  literal: "often",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:chang2}}-{{word:chang2}} {{word:lai2}}.",
      hanzi: "他常常来。",
      en: "He comes often.",
      ru: "Он часто приходит.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:chang2}}-{{word:chang2}} {{word:he1}} {{word:shui3}}.",
      hanzi: "我常常喝水。",
      en: "I often drink water.",
      ru: "Я часто пью воду.",
    },
  ],
});
