import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 904,
  phase: 2,
  zh: "醒",
  py: "xǐng",
  en: "wake up",
  ru: "проснуться",
  pos: "verb",
  hsd: [
    "{{word:bu4}} {{word:shui4jiao4}} {{word:le}}",
    "{{word:qi3}}-{{word:lai2}}",
    "{{word:qi3}}-{{word:lai2}}-{{word:le}}",
  ],
  tts: ["不睡觉了", "起来", "起来了"],
  literal: "no longer asleep / get up",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:shui4jiao4}} {{word:le}}.",
      hanzi: "我不睡觉了。",
      en: "I'm awake.",
      ru: "Я проснулся.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:qi3}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他起来了。",
      en: "He is up.",
      ru: "Он проснулся.",
    },
  ],
});
