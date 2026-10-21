import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1512,
  phase: 3,
  zh: "暑假",
  py: "shǔjià",
  en: "summer vacation",
  ru: "летние каникулы",
  pos: "noun",
  hsd: ["{{word:re4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:bu4}} {{word:xue2}}"],
  tts: ["热的时间不学"],
  literal: "no school in summer",
  fit: "plain",
  topics: ["holidays-and-festivals"],
  isA: ["time-span"],
  examples: [
    {
      pinyin: "{{Word:re4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:bu4}} {{word:xue2}}.",
      hanzi: "热的时间不学。",
      en: "There is no school in summer.",
      ru: "Летом нет учёбы.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:re4}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:bu4}} {{word:xue2}}.",
      hanzi: "我爱热的时间不学。",
      en: "I love the summer vacation.",
      ru: "Я люблю летние каникулы.",
    },
  ],
});
