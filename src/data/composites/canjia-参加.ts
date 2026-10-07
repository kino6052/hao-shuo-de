import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 301,
  phase: 1,
  zh: "参加",
  py: "cānjiā",
  en: "take part",
  ru: "участвовать",
  pos: "verb",
  hsd: [
    "{{word:he2}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:zuo4}}",
    "{{word:he2}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:wan2r}}",
  ],
  tts: ["和人一起做", "和人一起玩儿"],
  literal: "do it together with people / play together with people",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:zuo4}}.",
      hanzi: "我和人一起做。",
      en: "I take part.",
      ru: "Я участвую.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}}-{{word:men}} {{word:he2}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:wan2r}}.",
      hanzi: "孩子们和人一起玩儿。",
      en: "The children join in the games.",
      ru: "Дети участвуют в играх.",
    },
  ],
});
