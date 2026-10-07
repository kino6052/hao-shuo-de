import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 390,
  phase: 1,
  zh: "干",
  py: "gàn",
  en: "do",
  ru: "делать",
  pos: "verb",
  hsd: ["{{word:zuo4}}"],
  tts: ["做"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:xiang3}} {{word:zuo4}} {{word:shen2me}}?",
      hanzi: "你想做什么？",
      en: "What do you want to do?",
      ru: "Что ты хочешь делать?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:zuo4}}.",
      hanzi: "我没有做。",
      en: "I didn't do it.",
      ru: "Я этого не делал.",
    },
  ],
});
