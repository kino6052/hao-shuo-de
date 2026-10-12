import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1343,
  phase: 3,
  zh: "提问",
  py: "tíwèn",
  en: "ask a question",
  ru: "задавать вопрос",
  pos: "verb",
  hsd: ["{{word:wen4}}"],
  tts: ["问"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:wen4}} {{word:ta1}}.",
      hanzi: "我问他。",
      en: "I ask him a question.",
      ru: "Я задаю ему вопрос.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:wen4}} {{word:shen2me}}?",
      hanzi: "你要问什么？",
      en: "What do you want to ask?",
      ru: "О чём ты хочешь спросить?",
    },
  ],
});
