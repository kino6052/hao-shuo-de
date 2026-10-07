import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 193,
  phase: 1,
  zh: "男人",
  py: "nánrén",
  en: "man",
  ru: "мужчина",
  pos: "noun",
  hsd: ["{{word:nan2}}-{{word:ren2}}"],
  tts: ["男人"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:yi1}}-{{light:ge4}} {{word:hao3}} {{word:nan2}}-{{word:ren2}}.",
      hanzi: "他是一个好男人。",
      en: "He's a good man.",
      ru: "Он хороший мужчина.",
    },
    {
      pinyin: "{{Word:nan2}}-{{word:ren2}} {{word:he2}} {{word:nv3}}-{{word:ren2}} {{word:dou1}} {{word:ke3}}-{{word:yi3}} {{word:lai2}}.",
      hanzi: "男人和女人都可以来。",
      en: "Men and women can both come.",
      ru: "Могут прийти и мужчины, и женщины.",
    },
  ],
});
