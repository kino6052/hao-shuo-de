import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 418,
  phase: 1,
  zh: "春天",
  py: "chūntiān",
  en: "spring",
  ru: "весна",
  pos: "noun",
  hsd: ["{{word:nian2}}-{{word:de}} {{word:di4}}-{{word:yi1}}-{{word:bu4}}-{{light:fen1}}"],
  tts: ["年的第一部分"],
  literal: "the first part of the year",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:nian2}}-{{word:de}} {{word:di4}}-{{word:yi1}}-{{word:bu4}}-{{light:fen1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "年的第一部分很好。",
      en: "Spring is lovely.",
      ru: "Весна прекрасна.",
    },
    {
      pinyin: "{{Word:nian2}}-{{word:de}} {{word:di4}}-{{word:yi1}}-{{word:bu4}}-{{light:fen1}}, {{word:zhi2wu4}} {{word:dou1}} {{word:chu1}}-{{word:lai2}} {{word:le}}.",
      hanzi: "年的第一部分，植物都出来了。",
      en: "In spring, the plants all come up.",
      ru: "Весной всё растёт.",
    },
  ],
});
