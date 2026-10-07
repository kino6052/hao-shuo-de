import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 326,
  phase: 1,
  zh: "继续",
  py: "jìxù",
  en: "continue",
  ru: "продолжать",
  pos: "verb",
  hsd: ["verb-{{word:xia4}}-{{word:qu4}}"],
  tts: ["…下去"],
  literal: "keep going down",
  fit: "natural",
  note: "shuō-xià-qù: keep talking.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}}-{{word:xia4}}-{{word:qu4}}.",
      hanzi: "你说下去。",
      en: "Go on.",
      ru: "Продолжай.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:zou3}}-{{word:xia4}}-{{word:qu4}}.",
      hanzi: "我们走下去。",
      en: "We keep going.",
      ru: "Мы идём дальше.",
    },
  ],
});
