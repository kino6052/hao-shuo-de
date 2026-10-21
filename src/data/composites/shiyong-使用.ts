import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 610,
  phase: 2,
  zh: "使用",
  py: "shǐyòng",
  en: "use",
  ru: "использовать",
  pos: "verb",
  hsd: ["{{word:yong4}}"],
  tts: ["用"],
  fit: "word",
  topics: ["taking-and-holding"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我用这个。",
      en: "I use this.",
      ru: "Я пользуюсь этим.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:neng2}} {{word:yong4}} {{word:shou3}} {{word:ma}}?",
      hanzi: "你能用手吗？",
      en: "Can you use your hands?",
      ru: "Ты можешь пользоваться руками?",
    },
  ],
});
