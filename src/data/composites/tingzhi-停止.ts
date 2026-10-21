import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1254,
  phase: 3,
  zh: "停止",
  py: "tíngzhǐ",
  en: "stop",
  ru: "прекращать",
  pos: "verb",
  hsd: ["{{word:bu4}} {{word:dong4}}", "{{word:bu4}} {{word:zuo4}} {{word:le}}"],
  tts: ["不动", "不做了"],
  literal: "not moving / not doing it any more",
  fit: "plain",
  topics: ["leaving-stopping-and-retreating"],
  isA: ["starting-and-stopping"],
  examples: [
    {
      pinyin: "{{Word:che1}} {{word:bu4}} {{word:dong4}} {{word:le}}.",
      hanzi: "车不动了。",
      en: "The car has stopped.",
      ru: "Машина остановилась.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zuo4}} {{word:le}}.",
      hanzi: "我不做了。",
      en: "I've stopped doing it.",
      ru: "Я перестал это делать.",
    },
  ],
});
