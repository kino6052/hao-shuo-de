import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1164,
  phase: 3,
  zh: "科技",
  py: "kējì",
  en: "science and technology",
  ru: "наука и техника",
  pos: "noun",
  hsd: [
    "{{word:xue2}}-{{word:de}} {{word:he2}} {{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:fang1}}-{{word:fa3}}",
  ],
  tts: ["学的和做东西的方法"],
  literal: "science and the way of making things",
  fit: "plain",
  topics: ["farms-and-factories"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:xue2}}-{{word:de}} {{word:he2}} {{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:fang1}}-{{word:fa3}}.",
      hanzi: "我爱学的和做东西的方法。",
      en: "I love science and technology.",
      ru: "Я люблю науку и технику.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xue2}}-{{word:de}} {{word:he2}} {{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:fang1}}-{{word:fa3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他学的和做东西的方法很好。",
      en: "His science and technology is good.",
      ru: "Его наука и техника хороши.",
    },
  ],
});
