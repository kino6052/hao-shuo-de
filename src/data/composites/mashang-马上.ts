import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 247,
  phase: 1,
  zh: "马上",
  py: "mǎshàng",
  en: "right away",
  ru: "сейчас же",
  pos: "adverb",
  hsd: ["{{word:xian4}}-{{word:zai4}} {{word:jiu4}}"],
  tts: ["现在就"],
  literal: "right now",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xian4}}-{{word:zai4}} {{word:jiu4}} {{word:lai2}}.",
      hanzi: "我现在就来。",
      en: "I'm coming right away.",
      ru: "Я сейчас же приду.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xian4}}-{{word:zai4}} {{word:jiu4}} {{word:qu4}}.",
      hanzi: "你现在就去。",
      en: "Go right now.",
      ru: "Иди прямо сейчас.",
    },
  ],
});
