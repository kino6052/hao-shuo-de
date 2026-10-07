import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 4,
  phase: 1,
  zh: "人",
  py: "rén",
  en: "human being",
  ru: "человек",
  pos: "noun",
  hsd: ["{{word:ren2}}"],
  tts: ["人"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:ren2}} {{word:shi4}} {{word:wo3}} {{word:ba4ba}}.",
      hanzi: "那个人是我爸爸。",
      en: "That person is my dad.",
      ru: "Тот человек — мой папа.",
    },
    {
      pinyin: "{{Word:jia1}}-{{word:li3}} {{word:you3}} {{word:san1}}-{{light:ge4}} {{word:ren2}}.",
      hanzi: "家里有三个人。",
      en: "There are three people at home.",
      ru: "Дома три человека.",
    },
  ],
});
