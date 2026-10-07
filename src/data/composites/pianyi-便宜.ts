import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 351,
  phase: 1,
  zh: "便宜",
  py: "piányi",
  en: "cheap",
  ru: "дешёвый",
  pos: "adjective",
  hsd: ["{{word:yao4}} {{word:hen3}} {{word:shao3}} {{word:jin1}}"],
  tts: ["要很少金"],
  literal: "needs little money",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yao4}} {{word:hen3}} {{word:shao3}} {{word:jin1}}.",
      hanzi: "这个要很少金。",
      en: "This is cheap.",
      ru: "Это дёшево.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:dou1}} {{word:yao4}} {{word:hen3}} {{word:shao3}} {{word:jin1}}.",
      hanzi: "这里的东西都要很少金。",
      en: "Everything here is cheap.",
      ru: "Здесь всё дёшево.",
    },
  ],
});
