import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1108,
  phase: 3,
  zh: "效果",
  py: "xiàoguǒ",
  en: "effect, result",
  ru: "эффект, результат",
  pos: "noun",
  hsd: ["{{word:jie2}}-{{word:guo3}}"],
  tts: ["结果"],
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:jie2}}-{{word:guo3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个结果很好。",
      en: "The effect is good.",
      ru: "Эффект хороший.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:hen3}} {{word:you3}} {{word:jie2}}-{{word:guo3}}.",
      hanzi: "这很有结果。",
      en: "This has a great effect.",
      ru: "Это очень эффективно.",
    },
  ],
});
