import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1338,
  phase: 3,
  zh: "手术",
  py: "shǒushù",
  en: "surgery",
  ru: "операция",
  pos: "noun",
  hsd: ["{{word:kai1}} {{word:shen1ti3}} {{word:zuo4}} {{word:hao3}}"],
  tts: ["开身体做好"],
  literal: "open the body to fix it",
  fit: "plain",
  topics: ["at-the-hospital"],
  isA: ["event"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:kai1}} {{word:shen1ti3}} {{word:zuo4}} {{word:hao3}} {{word:le}}.",
      hanzi: "我爸爸开身体做好了。",
      en: "My father has had surgery.",
      ru: "Моему отцу сделали операцию.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yao4}} {{word:kai1}} {{word:shen1ti3}} {{word:zuo4}} {{word:hao3}}.",
      hanzi: "他要开身体做好。",
      en: "He needs surgery.",
      ru: "Ему нужна операция.",
    },
  ],
});
