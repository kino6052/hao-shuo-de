import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 58,
  phase: 1,
  zh: "想",
  py: "xiǎng",
  en: "think; want",
  ru: "думать; хотеть",
  pos: "verb",
  hsd: ["{{word:xiang3}}", "{{word:jue2}}-{{light:de2}}", "{{word:yao4}}"],
  tts: ["想", "觉得", "要"],
  fit: "word",
  note: "\"Think\" is jué-de, \"want\" is yào.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:qu4}}.",
      hanzi: "我想去。",
      en: "I'd like to go.",
      ru: "Я хочу пойти.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:ni3}}.",
      hanzi: "我想你。",
      en: "I miss you.",
      ru: "Я скучаю по тебе.",
    },
  ],
});
