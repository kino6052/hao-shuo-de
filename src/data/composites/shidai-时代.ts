import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1120,
  phase: 3,
  zh: "时代",
  py: "shídài",
  en: "era",
  ru: "эпоха",
  pos: "noun",
  hsd: ["X-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["X的时间"],
  literal: "the time of X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}}-{{word:men}}-{{word:de}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "这是我们的时间。",
      en: "This is our era.",
      ru: "Это наша эпоха.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的时间很好。",
      en: "His era was good.",
      ru: "Его эпоха была хорошей.",
    },
  ],
});
