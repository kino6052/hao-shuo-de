import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 643,
  phase: 2,
  zh: "年级",
  py: "niánjí",
  en: "grade, year at school",
  ru: "класс",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:de}} {{word:jie2}}-{{word:guo3}}"],
  tts: ["学的结果"],
  literal: "the result of study",
  fit: "plain",
  topics: ["studying"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:xue2}}-{{word:de}} {{word:jie2}}-{{word:guo3}} {{word:shi4}} {{word:san1}}.",
      hanzi: "他的学的结果是三。",
      en: "He's in third grade.",
      ru: "Он в третьем классе.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xue2}}-{{word:de}} {{word:jie2}}-{{word:guo3}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你学的结果是什么？",
      en: "What grade are you in?",
      ru: "В каком ты классе?",
    },
  ],
});
