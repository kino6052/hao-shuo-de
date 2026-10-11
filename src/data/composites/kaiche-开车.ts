import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 521,
  phase: 2,
  zh: "开车",
  py: "kāichē",
  en: "drive",
  ru: "водить машину",
  pos: "verb",
  hsd: ["{{word:kai1}} {{word:che1}}"],
  tts: ["开车"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:kai1}} {{word:che1}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "他开车回家。",
      en: "He drives home.",
      ru: "Он едет домой на машине.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:neng2}} {{word:kai1}} {{word:che1}}.",
      hanzi: "我不能开车。",
      en: "I can't drive.",
      ru: "Я не могу водить машину.",
    },
  ],
});
