import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 62,
  phase: 1,
  zh: "更",
  py: "gèng",
  en: "even more",
  ru: "ещё более",
  pos: "adverb",
  hsd: ["{{word:hai2}}"],
  tts: ["还"],
  literal: "still, even",
  fit: "plain",
  note: "In a comparison Mandarin itself says 还 for even more: tā bǐ wǒ hái gāo, he is even taller than me.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:hai2}} {{word:gao1}}.",
      hanzi: "他比我还高。",
      en: "He's even taller than me.",
      ru: "Он ещё выше меня.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bi3}} {{word:na4}}-{{light:ge4}} {{word:hai2}} {{word:hao3}}.",
      hanzi: "这个比那个还好。",
      en: "This one is even better than that one.",
      ru: "Этот ещё лучше того.",
    },
  ],
});
