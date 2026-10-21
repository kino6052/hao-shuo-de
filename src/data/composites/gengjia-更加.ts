import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1355,
  phase: 3,
  zh: "更加",
  py: "gèngjiā",
  en: "even more",
  ru: "ещё более",
  pos: "adverb",
  hsd: ["{{word:bi3}}"],
  tts: ["比"],
  fit: "skip",
  topics: ["degree-words"],
  isA: ["degree-word"],
  note: "Use bǐ: A bǐ B dà.",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bi3}} {{word:na4}}-{{light:ge4}} {{word:hao3}}.",
      hanzi: "这个比那个好。",
      en: "This one is even better than that one.",
      ru: "Этот ещё лучше того.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bi3}} {{word:ta1}} {{word:gao1}}.",
      hanzi: "我比他高。",
      en: "I am even taller than him.",
      ru: "Я ещё выше него.",
    },
  ],
});
