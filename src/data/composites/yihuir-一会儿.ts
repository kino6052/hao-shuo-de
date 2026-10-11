import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 554,
  phase: 2,
  zh: "一会儿",
  py: "yíhuìr",
  en: "a while",
  ru: "немного",
  pos: "number",
  hsd: ["{{word:yi1}}-{{word:xia4}}"],
  tts: ["一下"],
  literal: "a moment",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:deng3}} {{word:wo3}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "等我一下。",
      en: "Wait for me a moment.",
      ru: "Подожди меня минутку.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yi1}}-{{word:xia4}} {{word:jiu4}} {{word:lai2}}.",
      hanzi: "我一下就来。",
      en: "I'll be there in a moment.",
      ru: "Я сейчас приду.",
    },
  ],
});
