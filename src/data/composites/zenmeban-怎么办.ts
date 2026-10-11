import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 577,
  phase: 2,
  zh: "怎么办",
  py: "zěnme bàn",
  en: "what to do",
  ru: "что делать",
  pos: "phrase",
  hsd: ["{{word:zen3me}} {{word:zuo4}}?"],
  tts: ["怎么做？"],
  literal: "how to do it?",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zen3me}} {{word:zuo4}}? {{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}}.",
      hanzi: "怎么做？我不知道。",
      en: "What do we do? I don't know.",
      ru: "Что делать? Я не знаю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:zen3me}} {{word:zuo4}} {{word:ma}}?",
      hanzi: "你知道怎么做吗？",
      en: "Do you know what to do?",
      ru: "Ты знаешь, что делать?",
    },
  ],
});
