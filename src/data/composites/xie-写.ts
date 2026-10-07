import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 117,
  phase: 1,
  zh: "写",
  py: "xiě",
  en: "write",
  ru: "писать",
  pos: "verb",
  hsd: ["{{word:xie3}}"],
  tts: ["写"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hui4}} {{word:xie3}} {{word:zhe4}}-{{light:ge4}} {{word:zi4}} {{word:ma}}?",
      hanzi: "你会写这个字吗？",
      en: "Can you write this character?",
      ru: "Ты умеешь писать этот иероглиф?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:xie3}} {{word:shu1}}.",
      hanzi: "他在写书。",
      en: "He's writing a book.",
      ru: "Он пишет книгу.",
    },
  ],
});
