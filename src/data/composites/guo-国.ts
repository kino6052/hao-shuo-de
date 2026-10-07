import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 271,
  phase: 1,
  zh: "国",
  py: "guó",
  en: "country",
  ru: "страна",
  pos: "noun",
  hsd: ["{{word:guo2}}"],
  tts: ["国"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shi4}} {{word:na3}} {{word:guo2}} {{word:ren2}}?",
      hanzi: "你是哪国人？",
      en: "Which country are you from?",
      ru: "Ты из какой страны?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:guo2}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "这个国很小。",
      en: "This country is small.",
      ru: "Эта страна маленькая.",
    },
  ],
});
