import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1450,
  phase: 3,
  zh: "乘坐",
  py: "chéngzuò",
  en: "ride, take (a vehicle)",
  ru: "ехать (на транспорте)",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:che1}}", "{{word:zuo4}}-{{word:xia4}}"],
  tts: ["坐车", "坐下"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}}-{{word:che1}} {{word:qu4}}.",
      hanzi: "我坐车去。",
      en: "I go by car.",
      ru: "Я еду на машине.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}}-{{word:che1}} {{word:lai2}}.",
      hanzi: "他坐车来。",
      en: "He comes by car.",
      ru: "Он приезжает на машине.",
    },
  ],
});
