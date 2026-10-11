import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 468,
  phase: 1,
  zh: "该",
  py: "gāi",
  en: "should",
  ru: "следует",
  pos: "verb",
  hsd: ["{{word:yao4}}"],
  tts: ["要"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:shui4jiao4}} {{word:le}}.",
      hanzi: "你要睡觉了。",
      en: "You should go to bed.",
      ru: "Тебе пора спать.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yao4}} {{word:hui2}} {{word:jia1}} {{word:le}}.",
      hanzi: "我们要回家了。",
      en: "We should go home.",
      ru: "Нам пора домой.",
    },
  ],
});
