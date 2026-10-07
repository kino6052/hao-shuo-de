import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 132,
  phase: 1,
  zh: "上午",
  py: "shàngwǔ",
  en: "morning",
  ru: "утро",
  pos: "noun",
  hsd: ["{{word:ri4}} {{word:qi3}}-{{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["日起来的时间"],
  literal: "the time the sun gets up",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ri4}} {{word:qi3}}-{{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:wo3}} {{word:xue2}} \"Zhōngguó\" {{word:hua4}}.",
      hanzi: "日起来的时间我学中国话。",
      en: "In the morning I study Chinese.",
      ru: "Утром я учу китайский.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:ri4}} {{word:qi3}}-{{word:lai2}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:ni3}} {{word:zai4}} {{word:jia1}} {{word:ma}}?",
      hanzi: "明天日起来的时间你在家吗？",
      en: "Are you home tomorrow morning?",
      ru: "Ты завтра утром дома?",
    },
  ],
});
