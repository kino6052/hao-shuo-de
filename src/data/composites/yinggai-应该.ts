import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 122,
  phase: 1,
  zh: "应该",
  py: "yīnggāi",
  en: "should",
  ru: "должен",
  pos: "verb",
  hsd: ["{{word:yao4}}"],
  tts: ["要"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:duo1}} {{word:he1}} {{word:shui3}}.",
      hanzi: "你要多喝水。",
      en: "You should drink more water.",
      ru: "Тебе надо больше пить.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yao4}} {{word:zou3}} {{word:le}}.",
      hanzi: "我们要走了。",
      en: "We should go.",
      ru: "Нам пора.",
    },
  ],
});
