import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 785,
  phase: 2,
  zh: "身",
  py: "shēn",
  en: "body",
  ru: "тело",
  pos: "noun",
  hsd: ["{{word:shen1ti3}}"],
  tts: ["身体"],
  fit: "word",
  topics: ["trunk-and-skin"],
  isA: ["body-part"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shen1ti3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的身体很好。",
      en: "My body is fine.",
      ru: "Моё тело в порядке.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:shen1ti3}} {{word:hen3}} {{word:da4}}.",
      hanzi: "他的身体很大。",
      en: "His body is big.",
      ru: "У него большое тело.",
    },
  ],
});
