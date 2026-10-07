import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 328,
  phase: 1,
  zh: "认识",
  py: "rènshi",
  en: "know (a person)",
  ru: "знать (кого-то)",
  pos: "verb",
  hsd: ["{{word:zhi1dao4}}"],
  tts: ["知道"],
  fit: "plain",
  note: "Mandarin has its own word for knowing a person.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:ta1}} {{word:ma}}?",
      hanzi: "你知道他吗？",
      en: "Do you know him?",
      ru: "Ты его знаешь?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:zhe4}}-{{light:ge4}} {{word:ren2}}.",
      hanzi: "我不知道这个人。",
      en: "I don't know this person.",
      ru: "Я не знаю этого человека.",
    },
  ],
});
