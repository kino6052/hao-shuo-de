import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 77,
  phase: 1,
  zh: "问",
  py: "wèn",
  en: "ask",
  ru: "спрашивать",
  pos: "verb",
  hsd: ["{{word:wen4}}"],
  tts: ["问"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ke3}}-{{word:yi3}} {{word:wen4}} {{word:ni3}} {{word:yi1}}-{{light:ge4}} {{word:wen4}}-{{word:ti2}} {{word:ma}}?",
      hanzi: "我可以问你一个问题吗？",
      en: "May I ask you a question?",
      ru: "Можно задать тебе вопрос?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:wen4}} {{word:ta1}}.",
      hanzi: "你问他。",
      en: "Ask him.",
      ru: "Спроси его.",
    },
  ],
});
