import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1413,
  phase: 3,
  zh: "话题",
  py: "huàtí",
  en: "topic",
  ru: "тема разговора",
  pos: "noun",
  hsd: ["{{word:hua4}}-{{word:ti2}}", "{{word:shuo1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["话题", "说的东西"],
  literal: "what you talk about",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hua4}}-{{word:ti2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个话题很好。",
      en: "This topic is good.",
      ru: "Эта тема хорошая.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:shuo1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我们有很多说的东西。",
      en: "We have a lot to talk about.",
      ru: "Нам есть о чём поговорить.",
    },
  ],
});
