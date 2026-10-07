import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 30,
  phase: 1,
  zh: "五",
  py: "wǔ",
  en: "five",
  ru: "пять",
  pos: "number",
  hsd: ["{{word:wu3}}"],
  tts: ["五"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:wu3}} {{word:dian3}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "他五点回家。",
      en: "He comes home at five.",
      ru: "Он приходит домой в пять.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:jia1}} {{word:you3}} {{word:wu3}}-{{light:ge4}} {{word:ren2}}.",
      hanzi: "我们家有五个人。",
      en: "There are five of us in the family.",
      ru: "В нашей семье пять человек.",
    },
  ],
});
