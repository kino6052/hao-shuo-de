import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 755,
  phase: 2,
  zh: "感谢",
  py: "gǎnxiè",
  en: "thank",
  ru: "благодарить",
  pos: "verb",
  hsd: ["{{word:xie4}}"],
  tts: ["谢"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xie4}} {{word:ni3}}.",
      hanzi: "我谢你。",
      en: "I thank you.",
      ru: "Я благодарю тебя.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xie4}} {{word:wo3}}.",
      hanzi: "他谢我。",
      en: "He thanks me.",
      ru: "Он благодарит меня.",
    },
  ],
});
