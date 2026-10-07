import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 136,
  phase: 1,
  zh: "事情",
  py: "shìqing",
  en: "matter",
  ru: "дело",
  pos: "noun",
  hsd: ["{{word:dong1}}-{{light:xi1}}"],
  tts: ["东西"],
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:zhong4}}-{{word:yao4}}.",
      hanzi: "这个东西很重要。",
      en: "This matter is important.",
      ru: "Это дело важное.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:wen4}} {{word:ni3}} {{word:yi1}}-{{light:ge4}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我想问你一个东西。",
      en: "I'd like to ask you something.",
      ru: "Я хочу тебя кое о чём спросить.",
    },
  ],
});
