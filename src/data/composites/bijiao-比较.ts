import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 430,
  phase: 1,
  zh: "比较",
  py: "bǐjiào",
  en: "compare; rather",
  ru: "сравнивать; довольно",
  pos: "verb",
  hsd: ["{{word:bi3}}-{{word:jiao4}}", "{{word:bi3}}"],
  tts: ["比较", "比"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bi3}}-{{word:jiao4}} {{word:hao3}}.",
      hanzi: "这个比较好。",
      en: "This one is rather better.",
      ru: "Этот получше.",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:bi3}}-{{word:jiao4}} {{word:leng3}}.",
      hanzi: "今天比较冷。",
      en: "It's rather cold today.",
      ru: "Сегодня довольно холодно.",
    },
  ],
});
