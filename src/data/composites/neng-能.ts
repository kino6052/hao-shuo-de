import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 69,
  phase: 1,
  zh: "能",
  py: "néng",
  en: "be able to",
  ru: "мочь",
  pos: "verb",
  hsd: ["{{word:neng2}}"],
  tts: ["能"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:lai2}} {{word:ma}}?",
      hanzi: "你能来吗？",
      en: "Can you come?",
      ru: "Ты можешь прийти?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:neng2}} {{word:chi1}} {{word:tian2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我不能吃甜的东西。",
      en: "I can't eat sweet things.",
      ru: "Мне нельзя сладкое.",
    },
  ],
});
