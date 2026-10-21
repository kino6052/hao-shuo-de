import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1312,
  phase: 3,
  zh: "实在",
  py: "shízài",
  en: "really, honestly",
  ru: "действительно",
  pos: "adjective",
  hsd: ["{{word:zhen1}}"],
  tts: ["真"],
  fit: "word",
  topics: ["easy-hard-right-wrong"],
  isA: ["truth-or-ease"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:zhen1}} {{word:hao3}}.",
      hanzi: "这真好。",
      en: "This is really good.",
      ru: "Это правда хорошо.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhen1}} {{word:xiang3}} {{word:chi1}}.",
      hanzi: "我真想吃。",
      en: "I honestly want to eat.",
      ru: "Я честно хочу есть.",
    },
  ],
});
