import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 413,
  phase: 1,
  zh: "方便",
  py: "fāngbiàn",
  en: "convenient",
  ru: "удобный",
  pos: "adjective",
  hsd: ["{{word:hao3}}-{{word:yong4}}"],
  tts: ["好用"],
  literal: "good to use",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shou3}}-{{word:ji1}} {{word:hen3}} {{word:hao3}}-{{word:yong4}}.",
      hanzi: "这个手机很好用。",
      en: "This phone is handy.",
      ru: "Этот телефон удобный.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang1}}-{{word:fa3}} {{word:bu4}} {{word:hao3}}-{{word:yong4}}.",
      hanzi: "这个方法不好用。",
      en: "This way isn't convenient.",
      ru: "Этот способ неудобный.",
    },
  ],
});
