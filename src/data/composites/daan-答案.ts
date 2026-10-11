import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 688,
  phase: 2,
  zh: "答案",
  py: "dá’àn",
  en: "answer",
  ru: "ответ",
  pos: "noun",
  hsd: ["{{word:dui4}}-{{word:wen4}}-{{word:de}} {{word:shuo1}}-{{word:de}}"],
  tts: ["对问的说的"],
  literal: "what is said to the question",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:dui4}}-{{word:wen4}}-{{word:de}} {{word:shuo1}}-{{word:de}} {{word:ma}}?",
      hanzi: "你知道对问的说的吗？",
      en: "Do you know the answer?",
      ru: "Ты знаешь ответ?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:dui4}}-{{word:wen4}}-{{word:de}} {{word:shuo1}}-{{word:de}}.",
      hanzi: "我不知道对问的说的。",
      en: "I don't know the answer.",
      ru: "Я не знаю ответа.",
    },
  ],
});
