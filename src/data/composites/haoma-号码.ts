import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1284,
  phase: 3,
  zh: "号码",
  py: "hàomǎ",
  en: "number",
  ru: "номер",
  pos: "noun",
  hsd: ["{{word:hao4}}"],
  tts: ["号"],
  fit: "word",
  topics: ["ordinals"],
  isA: ["ordinal"],
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:hao4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "你的号是什么？",
      en: "What's your number?",
      ru: "Какой у тебя номер?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:ta1}}-{{word:de}} {{word:hao4}}.",
      hanzi: "我不知道他的号。",
      en: "I don't know his number.",
      ru: "Я не знаю его номер.",
    },
  ],
});
