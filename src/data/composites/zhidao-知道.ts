import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 67,
  phase: 1,
  zh: "知道",
  py: "zhīdào",
  en: "know",
  ru: "знать",
  pos: "verb",
  hsd: ["{{word:zhi1dao4}}"],
  tts: ["知道"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}}.",
      hanzi: "我不知道。",
      en: "I don't know.",
      ru: "Я не знаю.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:ta1}} {{word:zai4}} {{word:na3}}-{{word:li3}} {{word:ma}}?",
      hanzi: "你知道他在哪里吗？",
      en: "Do you know where he is?",
      ru: "Ты знаешь, где он?",
    },
  ],
});
