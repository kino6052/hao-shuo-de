import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 14,
  phase: 1,
  zh: "说",
  py: "shuō",
  en: "communicate",
  ru: "сообщать",
  pos: "verb",
  hsd: ["{{word:shuo1}}"],
  tts: ["说"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:ta1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "他说他不来。",
      en: "He says he isn't coming.",
      ru: "Он говорит, что не придёт.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}} {{word:shen2me}}?",
      hanzi: "你说什么？",
      en: "What are you saying?",
      ru: "Что ты говоришь?",
    },
  ],
});
