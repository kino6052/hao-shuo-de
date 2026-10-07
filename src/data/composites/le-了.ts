import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 3,
  phase: 1,
  zh: "了",
  py: "le",
  en: "perfective aspect marker",
  ru: "показатель совершённого вида",
  pos: "auxiliary",
  hsd: ["{{word:le}}"],
  tts: ["了"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:lai2}} {{word:le}}.",
      hanzi: "他来了。",
      en: "He's come.",
      ru: "Он пришёл.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:chi1}} {{word:le}}.",
      hanzi: "我吃了。",
      en: "I've eaten.",
      ru: "Я поел.",
    },
  ],
});
