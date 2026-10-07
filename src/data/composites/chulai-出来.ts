import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 361,
  phase: 1,
  zh: "出来",
  py: "chūlái",
  en: "come out",
  ru: "выходить",
  pos: "verb",
  hsd: ["{{word:chu1}}-{{word:lai2}}"],
  tts: ["出来"],
  literal: "out-come",
  fit: "natural",
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:cong2}} {{word:fang2}}-{{word:jian1}}-{{word:li3}} {{word:chu1}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他从房间里出来了。",
      en: "He came out of the room.",
      ru: "Он вышел из комнаты.",
    },
    {
      pinyin: "{{Word:kuai4}} {{word:chu1}}-{{word:lai2}}!",
      hanzi: "快出来！",
      en: "Come out quickly!",
      ru: "Выходи скорей!",
    },
  ],
});
