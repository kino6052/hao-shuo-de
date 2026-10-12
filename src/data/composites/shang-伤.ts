import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1456,
  phase: 3,
  zh: "伤",
  py: "shāng",
  en: "injury; hurt",
  ru: "рана; ранить",
  pos: "noun",
  hsd: ["{{word:shen1ti3}} {{word:huai4}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["身体坏的地方"],
  literal: "where the body is hurt",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shen1ti3}} {{word:huai4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:tong4}}.",
      hanzi: "我身体坏的地方很痛。",
      en: "My injury hurts.",
      ru: "Моя рана болит.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}} {{word:shen1ti3}} {{word:huai4}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "他有身体坏的地方。",
      en: "He has an injury.",
      ru: "У него травма.",
    },
  ],
});
