import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 350,
  phase: 1,
  zh: "休息",
  py: "xiūxi",
  en: "rest",
  ru: "отдыхать",
  pos: "verb",
  hsd: ["{{word:shui4jiao4}}"],
  tts: ["睡觉"],
  fit: "plain",
  note: "shuìjiào covers resting.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:shui4jiao4}}.",
      hanzi: "你要睡觉。",
      en: "You need to rest.",
      ru: "Тебе надо отдохнуть.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shui4jiao4}} {{word:yi1}}-{{word:xia4}}.",
      hanzi: "我睡觉一下。",
      en: "I'll rest a bit.",
      ru: "Я немного отдохну.",
    },
  ],
});
