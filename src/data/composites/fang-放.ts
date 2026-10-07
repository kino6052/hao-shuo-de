import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 180,
  phase: 1,
  zh: "放",
  py: "fàng",
  en: "put",
  ru: "класть",
  pos: "verb",
  hsd: ["{{word:fang4}}"],
  tts: ["放"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ba3}} {{word:shu1}} {{word:fang4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "把书放在这里。",
      en: "Put the book here.",
      ru: "Положи книгу сюда.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:fang4}} {{word:zai4}} {{word:na3}}-{{word:li3}} {{word:le}}?",
      hanzi: "你放在哪里了？",
      en: "Where did you put it?",
      ru: "Куда ты это положил?",
    },
  ],
});
