import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 353,
  phase: 1,
  zh: "停",
  py: "tíng",
  en: "stop",
  ru: "останавливаться",
  pos: "verb",
  hsd: ["{{word:bu4}} {{word:dong4}}"],
  tts: ["不动"],
  literal: "not move",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:che1}} {{word:bu4}} {{word:dong4}} {{word:le}}.",
      hanzi: "车不动了。",
      en: "The car stopped.",
      ru: "Машина остановилась.",
    },
    {
      pinyin: "{{Word:shou3}}-{{word:ji1}} {{word:bu4}} {{word:dong4}} {{word:le}}.",
      hanzi: "手机不动了。",
      en: "The phone froze.",
      ru: "Телефон завис.",
    },
  ],
});
