import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 570,
  phase: 2,
  zh: "白天",
  py: "báitiān",
  en: "daytime",
  ru: "день",
  pos: "noun",
  hsd: [
    "{{word:bai2}}-{{word:tian1}}",
    "{{word:you3}}-{{word:ri4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["白天", "有日的时间"],
  literal: "the time when there's sun",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:bai2}}-{{word:tian1}} {{word:hen3}} {{word:re4}}.",
      hanzi: "白天很热。",
      en: "It's hot during the day.",
      ru: "Днём жарко.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bai2}}-{{word:tian1}} {{word:bu4}} {{word:shui4jiao4}}.",
      hanzi: "我白天不睡觉。",
      en: "I don't sleep during the day.",
      ru: "Днём я не сплю.",
    },
  ],
});
