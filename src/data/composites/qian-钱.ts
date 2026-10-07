import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 76,
  phase: 1,
  zh: "钱",
  py: "qián",
  en: "money",
  ru: "деньги",
  pos: "noun",
  hsd: ["{{word:jin1}}"],
  tts: ["金"],
  fit: "word",
  note: "Hao-shuo-de says jīn for money.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:jin1}}.",
      hanzi: "我没有金。",
      en: "I have no money.",
      ru: "У меня нет денег.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:duo1}}-{{word:shao3}} {{word:jin1}}?",
      hanzi: "这个要多少金？",
      en: "How much does this cost?",
      ru: "Сколько это стоит?",
    },
  ],
});
