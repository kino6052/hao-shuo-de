import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1168,
  phase: 3,
  zh: "空间",
  py: "kōngjiān",
  en: "space",
  ru: "пространство",
  pos: "noun",
  hsd: ["{{word:kong1}}-{{word:jian1}}"],
  tts: ["空间"],
  literal: "the empty between",
  fit: "natural",
  kinds: ["built"],
  topics: ["near-and-far"],
  isA: ["place-word"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:jia1}} {{word:you3}} {{word:kong1}}-{{word:jian1}}.",
      hanzi: "这个家有空间。",
      en: "This home has space.",
      ru: "В этом доме есть пространство.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:kong1}}-{{word:jian1}}.",
      hanzi: "我要空间。",
      en: "I want space.",
      ru: "Мне нужно пространство.",
    },
  ],
});
