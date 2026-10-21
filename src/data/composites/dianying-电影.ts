import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 190,
  phase: 1,
  zh: "电影",
  py: "diànyǐng",
  en: "movie",
  ru: "фильм",
  pos: "noun",
  hsd: [
    "{{word:hao3}}-{{word:wan2r}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["好玩儿的看的东西"],
  literal: "a fun thing to watch",
  fit: "natural",
  topics: ["films-and-shows"],
  isA: ["work-of-art"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:kan4}} {{word:hao3}}-{{word:wan2r}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我们去看好玩儿的看的东西。",
      en: "We're going to see a movie.",
      ru: "Мы идём смотреть фильм.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:hao3}}-{{word:wan2r}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个好玩儿的看的东西很好。",
      en: "This movie is good.",
      ru: "Этот фильм хороший.",
    },
  ],
});
