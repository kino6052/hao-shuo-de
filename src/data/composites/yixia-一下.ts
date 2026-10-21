import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 493,
  phase: 1,
  zh: "一下",
  py: "yíxià",
  en: "a moment",
  ru: "мгновение",
  pos: "number",
  hsd: [
    "{{word:yi1}}-{{word:xia4}}",
    "{{word:bu4}} {{word:chang2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["一下", "不长的时间"],
  literal: "one-down",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["how-often"],
  isA: ["time-span"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:kan4}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "你看一下。",
      en: "Take a look.",
      ru: "Взгляни.",
    },
    {
      pinyin: "{{Word:rang4}} {{word:wo3}} {{word:xiang3}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "让我想一下。",
      en: "Let me think a moment.",
      ru: "Дай подумать.",
    },
  ],
});
