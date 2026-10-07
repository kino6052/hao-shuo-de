import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 97,
  phase: 1,
  zh: "吗",
  py: "ma",
  en: "final interrogative yes-or-no question marker",
  ru: "конечная вопросительная частица для вопросов да/нет",
  pos: "auxiliary",
  hsd: ["{{word:ma}}"],
  tts: ["吗"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hao3}} {{word:ma}}?",
      hanzi: "你好吗？",
      en: "How are you?",
      ru: "Как дела?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:he1}} {{word:shui3}} {{word:ma}}?",
      hanzi: "你要喝水吗？",
      en: "Do you want some water?",
      ru: "Хочешь воды?",
    },
  ],
});
