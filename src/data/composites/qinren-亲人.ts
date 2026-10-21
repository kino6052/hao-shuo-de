import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 803,
  phase: 2,
  zh: "亲人",
  py: "qīnrén",
  en: "relatives",
  ru: "родные",
  pos: "noun",
  hsd: ["{{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}}"],
  tts: ["家里的人"],
  literal: "home people",
  fit: "natural",
  topics: ["relatives"],
  isA: ["relative"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "我的家里的人在这里。",
      en: "My relatives are here.",
      ru: "Мои родные здесь.",
    },
    {
      pinyin: "{{Word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "家里的人很好。",
      en: "My relatives are good people.",
      ru: "Родные — хорошие люди.",
    },
  ],
});
