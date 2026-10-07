import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 252,
  phase: 1,
  zh: "腿",
  py: "tuǐ",
  en: "leg",
  ru: "нога",
  pos: "noun",
  hsd: ["{{word:jiao3}}"],
  tts: ["脚"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:jiao3}} {{word:hen3}} {{word:chang2}}.",
      hanzi: "他的脚很长。",
      en: "His legs are long.",
      ru: "У него длинные ноги.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jiao3}} {{word:bu4}} {{word:hao3}}, {{word:bu4}} {{word:neng2}} {{word:zou3}}.",
      hanzi: "我的脚不好，不能走。",
      en: "My leg is bad, I can't walk.",
      ru: "У меня болит нога, я не могу идти.",
    },
  ],
});
