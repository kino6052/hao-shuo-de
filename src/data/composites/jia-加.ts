import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 297,
  phase: 1,
  zh: "加",
  py: "jiā",
  en: "add",
  ru: "добавлять",
  pos: "verb",
  hsd: ["A, B {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}"],
  tts: ["…、…放在一起"],
  literal: "put together",
  fit: "plain",
  note: "sān, sì fàng zài yī-qǐ, shì qī: 3 + 4 = 7 (Lesson {{lesson:numbers}}).",
  examples: [
    {
      pinyin: "{{Word:san1}}, {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:qi1}}.",
      hanzi: "三、四放在一起，是七。",
      en: "Three plus four is seven.",
      ru: "Три плюс четыре — семь.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:shui3}} {{word:he2}} {{word:shui3}}-{{word:guo3}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}.",
      hanzi: "把水和水果放在一起。",
      en: "Put the water and the fruit together.",
      ru: "Сложи воду и фрукты вместе.",
    },
  ],
});
