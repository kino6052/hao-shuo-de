import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 423,
  phase: 1,
  zh: "有用",
  py: "yǒuyòng",
  en: "useful",
  ru: "полезный",
  pos: "adjective",
  hsd: ["{{word:you3}}-{{word:yong4}}"],
  tts: ["有用"],
  literal: "has use",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hen3}} {{word:you3}}-{{word:yong4}}.",
      hanzi: "这个很有用。",
      en: "This is useful.",
      ru: "Это полезно.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shu1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:you3}}-{{word:yong4}}.",
      hanzi: "这个书对我很有用。",
      en: "This book is very useful to me.",
      ru: "Эта книга мне очень полезна.",
    },
  ],
});
