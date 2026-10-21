import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1425,
  phase: 3,
  zh: "退休",
  py: "tuìxiū",
  en: "retire",
  ru: "выйти на пенсию",
  pos: "verb",
  hsd: ["{{word:lao3}} {{word:le}}, {{word:bu4}} {{word:zuo4}} {{word:le}}"],
  tts: ["老了，不做了"],
  literal: "old, no longer working",
  fit: "plain",
  topics: ["working-life"],
  isA: ["life-change"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:lao3}} {{word:le}}, {{word:bu4}} {{word:zuo4}} {{word:le}}.",
      hanzi: "我老了，不做了。",
      en: "I'm old and I have retired.",
      ru: "Я стар и ушёл на пенсию.",
    },
    {
      pinyin: "{{Word:ba4ba}} {{word:lao3}} {{word:le}}, {{word:bu4}} {{word:zuo4}} {{word:le}}.",
      hanzi: "爸爸老了，不做了。",
      en: "Dad is old and has retired.",
      ru: "Папа стар и ушёл на пенсию.",
    },
  ],
});
