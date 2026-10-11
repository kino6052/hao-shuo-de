import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 462,
  phase: 1,
  zh: "花",
  py: "huā",
  en: "spend (money)",
  ru: "тратить",
  pos: "verb",
  hsd: ["{{word:yong4}}"],
  tts: ["用"],
  fit: "natural",
  note: "yòng jīn: spend money.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yong4}} {{word:le}} {{word:duo1}}-{{word:shao3}} {{word:jin1}}?",
      hanzi: "你用了多少金？",
      en: "How much did you spend?",
      ru: "Сколько ты потратил?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:le}} {{word:hen3}} {{word:duo1}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我用了很多时间。",
      en: "I spent a lot of time.",
      ru: "Я потратил много времени.",
    },
  ],
});
