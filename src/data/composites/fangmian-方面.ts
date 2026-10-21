import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 663,
  phase: 2,
  zh: "方面",
  py: "fāngmiàn",
  en: "aspect",
  ru: "аспект",
  pos: "noun",
  hsd: ["{{word:fang1}}-{{word:mian4}}", "{{word:bu4}}-{{light:fen1}}"],
  tts: ["方面", "部分"],
  literal: "part",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["place-location-and-space"],
  isA: ["place-word"],
  examples: [
    {
      pinyin: "{{Word:zai4}} {{word:zhe4}}-{{light:ge4}} {{word:fang1}}-{{word:mian4}}, {{word:ta1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "在这个方面，他很好。",
      en: "In this respect he is good.",
      ru: "В этом отношении он хорош.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:yi1}}-{{word:bu4}}-{{light:fen1}}.",
      hanzi: "这个是我的一部分。",
      en: "This is one aspect of me.",
      ru: "Это одна из моих сторон.",
    },
  ],
});
