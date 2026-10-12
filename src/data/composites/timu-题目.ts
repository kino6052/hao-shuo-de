import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1223,
  phase: 3,
  zh: "题目",
  py: "tímù",
  en: "topic, question",
  ru: "тема, задание",
  pos: "noun",
  hsd: ["{{word:wen4}}-{{word:ti2}}", "{{word:wen4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["问题", "问的东西"],
  literal: "what's asked",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wen4}}-{{word:ti2}}.",
      hanzi: "这是问题。",
      en: "This is the question.",
      ru: "Это вопрос.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}} {{word:zhe4}}-{{light:ge4}} {{word:wen4}}-{{word:ti2}}.",
      hanzi: "你看这个问题。",
      en: "Look at this question.",
      ru: "Посмотри на этот вопрос.",
    },
  ],
});
