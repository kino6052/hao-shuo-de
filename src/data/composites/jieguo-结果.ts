import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 691,
  phase: 2,
  zh: "结果",
  py: "jiéguǒ",
  en: "result",
  ru: "результат",
  pos: "noun",
  hsd: ["{{word:jie2}}-{{word:guo3}}"],
  tts: ["结果"],
  fit: "natural",
  transparent: true,
  topics: ["results-and-effects"],
  isA: ["cause-and-effect"],
  examples: [
    {
      pinyin: "{{Word:jie2}}-{{word:guo3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "结果很好。",
      en: "The result was good.",
      ru: "Результат был хороший.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:jie2}}-{{word:guo3}} {{word:ma}}?",
      hanzi: "你知道结果吗？",
      en: "Do you know the result?",
      ru: "Ты знаешь результат?",
    },
  ],
});
