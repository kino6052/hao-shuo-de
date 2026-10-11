import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 411,
  phase: 1,
  zh: "收",
  py: "shōu",
  en: "receive",
  ru: "получать",
  pos: "verb",
  hsd: ["{{word:de2}}-{{word:dao4}}"],
  tts: ["得到"],
  literal: "get-reach",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:de2}}-{{word:dao4}} {{word:le}} {{word:ni3}} {{word:fa1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我得到了你发的东西。",
      en: "I received what you sent.",
      ru: "Я получил то, что ты отправил.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:de2}}-{{word:dao4}} {{word:le}} {{word:yi1}}-{{light:ge4}} {{word:bao1}}.",
      hanzi: "她得到了一个包。",
      en: "She received a bag.",
      ru: "Она получила сумку.",
    },
  ],
});
