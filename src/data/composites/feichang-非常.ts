import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 222,
  phase: 1,
  zh: "非常",
  py: "fēicháng",
  en: "very",
  ru: "очень",
  pos: "adverb",
  hsd: ["{{word:hen3}}", "{{word:zhen1}}"],
  tts: ["很", "真"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:zhen1}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "这里真好看。",
      en: "It's really beautiful here.",
      ru: "Здесь очень красиво.",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "今天很冷。",
      en: "It's very cold today.",
      ru: "Сегодня очень холодно.",
    },
  ],
});
