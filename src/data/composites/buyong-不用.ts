import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 495,
  phase: 1,
  zh: "不用",
  py: "búyòng",
  en: "no need",
  ru: "не нужно",
  pos: "adverb",
  hsd: ["{{word:bu4}}-{{word:yong4}}", "{{word:bu4}} {{word:yao4}}"],
  tts: ["不用", "不要"],
  literal: "no use",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:bu4}}-{{word:yong4}} {{word:xie4}}.",
      hanzi: "不用谢。",
      en: "You're welcome.",
      ru: "Не за что.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bu4}}-{{word:yong4}} {{word:lai2}}.",
      hanzi: "你不用来。",
      en: "You don't need to come.",
      ru: "Тебе не нужно приходить.",
    },
  ],
});
