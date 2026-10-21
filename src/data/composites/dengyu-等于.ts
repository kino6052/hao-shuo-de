import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1169,
  phase: 3,
  zh: "等于",
  py: "děngyú",
  en: "equal, equals",
  ru: "равняться",
  pos: "verb",
  hsd: ["{{word:shi4}}"],
  tts: ["是"],
  fit: "word",
  topics: ["helping-words"],
  isA: ["auxiliary"],
  note: "sān, sì fàng zài yī-qǐ, shì qī.",
  examples: [
    {
      pinyin: "{{Word:er4}} {{word:he2}} {{word:er4}} {{word:shi4}} {{word:si4}}.",
      hanzi: "二和二是四。",
      en: "Two and two equals four.",
      ru: "Два и два равно четырём.",
    },
    {
      pinyin: "{{Word:yi1}} {{word:he2}} {{word:er4}} {{word:shi4}} {{word:san1}}.",
      hanzi: "一和二是三。",
      en: "One and two equals three.",
      ru: "Один и два равно трём.",
    },
  ],
});
