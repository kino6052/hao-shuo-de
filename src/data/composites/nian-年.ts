import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 35,
  phase: 1,
  zh: "年",
  py: "nián",
  en: "year",
  ru: "год",
  pos: "noun",
  hsd: ["{{word:nian2}}"],
  tts: ["年"],
  fit: "word",
  note: "yuè is also \"month\".",
  examples: [
    {
      pinyin: "{{Word:ming2}}-{{word:nian2}} {{word:wo3}} {{word:qu4}} \"Zhōngguó\".",
      hanzi: "明年我去中国。",
      en: "Next year I'm going to China.",
      ru: "В следующем году я поеду в Китай.",
    },
    {
      pinyin: "{{Word:yi1}} {{word:nian2}} {{word:you3}} {{word:shi2}}-{{word:er4}}-{{light:ge4}} {{word:yue4}}.",
      hanzi: "一年有十二个月。",
      en: "A year has twelve months.",
      ru: "В году двенадцать месяцев.",
    },
  ],
});
