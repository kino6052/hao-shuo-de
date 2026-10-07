import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 183,
  phase: 1,
  zh: "比",
  py: "bǐ",
  en: "comparison",
  ru: "сравнение",
  pos: "verb",
  hsd: ["{{word:bi3}}"],
  tts: ["比"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:gao1}}.",
      hanzi: "他比我高。",
      en: "He's taller than me.",
      ru: "Он выше меня.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:bi3}} {{word:na4}}-{{light:ge4}} {{word:da4}}.",
      hanzi: "这个比那个大。",
      en: "This one is bigger than that one.",
      ru: "Этот больше того.",
    },
  ],
});
