import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 889,
  phase: 2,
  zh: "血",
  py: "xiě",
  en: "blood",
  ru: "кровь",
  pos: "noun",
  hsd: ["{{word:shen1ti3}}-{{word:li3}}-{{word:de}} {{word:hong2}}-{{word:se4}} {{word:shui3}}"],
  tts: ["身体里的红色水"],
  literal: "the red water in the body",
  fit: "plain",
  topics: ["inside-the-body"],
  isA: ["body-part"],
  examples: [
    {
      pinyin: "{{Word:shen1ti3}}-{{word:li3}}-{{word:de}} {{word:hong2}}-{{word:se4}} {{word:shui3}} {{word:shi4}} {{word:re4}}-{{word:de}}.",
      hanzi: "身体里的红色水是热的。",
      en: "Blood is warm.",
      ru: "Кровь тёплая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:shen1ti3}}-{{word:li3}}-{{word:de}} {{word:hong2}}-{{word:se4}} {{word:shui3}}.",
      hanzi: "我看到身体里的红色水。",
      en: "I see blood.",
      ru: "Я вижу кровь.",
    },
  ],
});
