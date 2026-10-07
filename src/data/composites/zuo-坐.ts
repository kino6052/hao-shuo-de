import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 230,
  phase: 1,
  zh: "坐",
  py: "zuò",
  en: "sit",
  ru: "сидеть",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:xia4}}"],
  tts: ["坐下"],
  fit: "word",
  note: "Lesson {{lesson:direction-and-result}}: zuò-xià.",
  examples: [
    {
      pinyin: "{{Word:zuo4}}-{{word:xia4}}, {{word:hao3}} {{word:ma}}?",
      hanzi: "坐下，好吗？",
      en: "Please sit down.",
      ru: "Садись, пожалуйста.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}}-{{word:xia4}} {{word:le}}.",
      hanzi: "他坐下了。",
      en: "He sat down.",
      ru: "Он сел.",
    },
  ],
});
