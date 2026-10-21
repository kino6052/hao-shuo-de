import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 838,
  phase: 2,
  zh: "左边",
  py: "zuǒbian",
  en: "left side",
  ru: "слева",
  pos: "noun",
  hsd: ["{{word:zuo3}}-{{word:bian1}}"],
  tts: ["左边"],
  fit: "natural",
  transparent: true,
  topics: ["directions"],
  isA: ["direction"],
  examples: [
    {
      pinyin: "{{Word:shu1}} {{word:zai4}} {{word:zuo3}}-{{word:bian1}}.",
      hanzi: "书在左边。",
      en: "The book is on the left.",
      ru: "Книга слева.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wo3}}-{{word:de}} {{word:zuo3}}-{{word:bian1}}.",
      hanzi: "他在我的左边。",
      en: "He is on my left.",
      ru: "Он слева от меня.",
    },
  ],
});
