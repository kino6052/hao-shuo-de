import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1084,
  phase: 3,
  zh: "应当",
  py: "yīngdāng",
  en: "should",
  ru: "следует",
  pos: "verb",
  hsd: ["{{word:yao4}}"],
  tts: ["要"],
  fit: "word",
  topics: ["wanting-needing-and-should"],
  isA: ["feeling-and-wanting"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:zao3}} {{word:qu4}}.",
      hanzi: "你要早去。",
      en: "You should go early.",
      ru: "Тебе следует идти пораньше.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:he1}} {{word:shui3}}.",
      hanzi: "我要喝水。",
      en: "I should drink water.",
      ru: "Мне следует пить воду.",
    },
  ],
});
