import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1019,
  phase: 3,
  zh: "人生",
  py: "rénshēng",
  en: "life (one's life)",
  ru: "жизнь (человека)",
  pos: "noun",
  hsd: [
    "{{word:ren2}}-{{word:sheng1}}",
    "{{word:ren2}} {{word:huo2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}",
  ],
  tts: ["人生", "人活的时间"],
  literal: "a person's life / the time a person lives",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["young-and-old"],
  isA: ["abstract-thing"],
  examples: [
    {
      pinyin: "{{Word:ren2}}-{{word:sheng1}} {{word:hen3}} {{word:chang2}}.",
      hanzi: "人生很长。",
      en: "Life is long.",
      ru: "Жизнь длинная.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ren2}}-{{word:sheng1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的人生很好。",
      en: "My life is good.",
      ru: "Моя жизнь хороша.",
    },
  ],
});
