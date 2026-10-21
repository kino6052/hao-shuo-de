import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1078,
  phase: 3,
  zh: "属于",
  py: "shǔyú",
  en: "belong to",
  ru: "принадлежать",
  pos: "verb",
  hsd: ["{{word:shi4}} X-{{word:de}}"],
  tts: ["是X的"],
  literal: "is X's",
  fit: "plain",
  topics: ["much-and-little"],
  isA: ["belonging"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:wo3}}-{{word:de}}.",
      hanzi: "这个是我的。",
      en: "This belongs to me.",
      ru: "Это принадлежит мне.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:shi4}} {{word:ta1}}-{{word:de}}.",
      hanzi: "那个是他的。",
      en: "That belongs to him.",
      ru: "То принадлежит ему.",
    },
  ],
});
