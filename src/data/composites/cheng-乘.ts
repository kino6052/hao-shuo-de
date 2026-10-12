import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1236,
  phase: 3,
  zh: "乘",
  py: "chéng",
  en: "multiply",
  ru: "умножать",
  pos: "verb",
  hsd: ["{{word:ba3}} A {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} B-{{word:ci4}}"],
  tts: ["把…放在一起…次"],
  literal: "put A together B times",
  fit: "plain",
  note: "3 × 4: bǎ sì fàng zài yī-qǐ sān-cì (Lesson {{lesson:numbers}}).",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:san1}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:si4}}-{{word:ci4}}.",
      hanzi: "我把三放在一起四次。",
      en: "I multiply three by four.",
      ru: "Я умножаю три на четыре.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:er4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:wu3}}-{{word:ci4}}, {{word:shi4}} {{word:shi2}}.",
      hanzi: "把二放在一起五次，是十。",
      en: "Two times five is ten.",
      ru: "Дважды пять — десять.",
    },
  ],
});
