import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 27,
  phase: 1,
  zh: "书",
  py: "shū",
  en: "book",
  ru: "книга",
  pos: "noun",
  hsd: ["{{word:shu1}}", "{{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["书", "写的东西"],
  literal: "written thing",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:kan4}} {{word:shu1}}.",
      hanzi: "我爱看书。",
      en: "I love reading.",
      ru: "Я люблю читать.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:shu1}} {{word:zai4}} {{word:wo3}} {{word:jia1}}.",
      hanzi: "你的书在我家。",
      en: "Your book is at my place.",
      ru: "Твоя книга у меня дома.",
    },
  ],
});
