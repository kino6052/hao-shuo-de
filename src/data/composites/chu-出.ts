import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 42,
  phase: 1,
  zh: "出",
  py: "chū",
  en: "go out",
  ru: "выходить",
  pos: "verb",
  hsd: ["{{word:chu1}}"],
  tts: ["出"],
  fit: "word",
  note: "Lesson {{lesson:direction-and-result}}: chū-qù, ná-chū-lái.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:chu1}}-{{word:qu4}} {{word:le}}.",
      hanzi: "他出去了。",
      en: "He went out.",
      ru: "Он вышел.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:chu1}}-{{word:lai2}}!",
      hanzi: "你出来！",
      en: "Come out!",
      ru: "Выходи!",
    },
  ],
});
