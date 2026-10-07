import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 127,
  phase: 1,
  zh: "问题",
  py: "wèntí",
  en: "question; problem",
  ru: "вопрос; проблема",
  pos: "noun",
  hsd: ["{{word:wen4}}-{{word:ti2}}"],
  tts: ["问题"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:wen4}}-{{word:ti2}} {{word:ma}}?",
      hanzi: "你有问题吗？",
      en: "Do you have any questions?",
      ru: "У тебя есть вопросы?",
    },
    {
      pinyin: "{{Word:mei2}}-{{word:you3}} {{word:wen4}}-{{word:ti2}}!",
      hanzi: "没有问题！",
      en: "No problem!",
      ru: "Без проблем!",
    },
  ],
});
