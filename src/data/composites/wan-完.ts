import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 303,
  phase: 1,
  zh: "完",
  py: "wán",
  en: "finish",
  ru: "закончить",
  pos: "verb",
  hsd: ["{{word:wan2}}"],
  tts: ["完"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:chi1}}-{{word:wan2}} {{word:le}}.",
      hanzi: "我吃完了。",
      en: "I've finished eating.",
      ru: "Я доел.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shu1}} {{word:ni3}} {{word:kan4}}-{{word:wan2}} {{word:le}} {{word:ma}}?",
      hanzi: "这个书你看完了吗？",
      en: "Have you finished this book?",
      ru: "Ты дочитал эту книгу?",
    },
  ],
});
