import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 426,
  phase: 1,
  zh: "次",
  py: "cì",
  en: "time (occurrence)",
  ru: "раз",
  pos: "classifier",
  hsd: ["{{word:ci4}}"],
  tts: ["次"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}}-{{word:guo4}} {{word:liang3}} {{word:ci4}}.",
      hanzi: "我去过两次。",
      en: "I've been there twice.",
      ru: "Я был там дважды.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:ci4}} {{word:wo3}} {{word:lai2}}.",
      hanzi: "这次我来。",
      en: "This time I'll do it.",
      ru: "В этот раз я сделаю.",
    },
  ],
});
