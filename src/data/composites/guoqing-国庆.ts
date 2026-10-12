import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1295,
  phase: 3,
  zh: "国庆",
  py: "guóqìng",
  en: "National Day",
  ru: "национальный праздник",
  pos: "noun",
  hsd: ["{{word:guo2}}-{{word:de}} {{word:ri4}}"],
  tts: ["国的日"],
  literal: "the country's day",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:shi4}} {{word:guo2}}-{{word:de}} {{word:ri4}}.",
      hanzi: "今天是国的日。",
      en: "Today is National Day.",
      ru: "Сегодня Национальный день.",
    },
    {
      pinyin: "{{Word:guo2}}-{{word:de}} {{word:ri4}} {{word:wo3}}-{{word:men}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "国的日我们在家。",
      en: "On National Day we are at home.",
      ru: "В Национальный день мы дома.",
    },
  ],
});
