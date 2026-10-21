import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 970,
  phase: 2,
  zh: "加油",
  py: "jiāyóu",
  en: "come on!",
  ru: "давай!",
  pos: "verb",
  hsd: ["{{word:hao3}}-{{word:hao3}} {{word:zuo4}}!"],
  tts: ["好好做！"],
  literal: "do it well!",
  fit: "natural",
  topics: ["matches-and-contests"],
  isA: ["set-phrase"],
  examples: [
    {
      pinyin: "{{Word:hao3}}-{{word:hao3}} {{word:zuo4}}!",
      hanzi: "好好做！",
      en: "Come on!",
      ru: "Давай!",
    },
    {
      pinyin: "{{Word:ni3}} {{word:hao3}}-{{word:hao3}} {{word:zuo4}}!",
      hanzi: "你好好做！",
      en: "Go for it!",
      ru: "Ты сможешь!",
    },
  ],
});
