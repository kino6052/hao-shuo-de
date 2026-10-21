import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 618,
  phase: 2,
  zh: "办",
  py: "bàn",
  en: "do, handle",
  ru: "делать",
  pos: "verb",
  hsd: ["{{word:zuo4}}"],
  tts: ["做"],
  fit: "word",
  topics: ["doing-and-carrying-out"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:ni3}} {{word:neng2}} {{word:zuo4}} {{word:ma}}?",
      hanzi: "这个你能做吗？",
      en: "Can you handle this?",
      ru: "Ты можешь с этим справиться?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:neng2}} {{word:zuo4}}.",
      hanzi: "我能做。",
      en: "I can handle it.",
      ru: "Я могу это сделать.",
    },
  ],
});
