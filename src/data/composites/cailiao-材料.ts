import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 668,
  phase: 2,
  zh: "材料",
  py: "cáiliào",
  en: "material",
  ru: "материал",
  pos: "noun",
  hsd: ["{{word:liao4}}"],
  tts: ["料"],
  fit: "plain",
  topics: ["materials"],
  isA: ["material"],
  note: "材 is not a core character; liào alone says the stuff something is made from.",
  examples: [
    {
      pinyin: "{{Word:zuo4}} {{word:fan4}} {{word:yao4}} {{word:hen3}}-{{word:duo1}} {{word:liao4}}.",
      hanzi: "做饭要很多料。",
      en: "Cooking takes a lot of ingredients.",
      ru: "Для готовки нужно много продуктов.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:hao3}}-{{word:de}} {{word:liao4}}.",
      hanzi: "我有好的料。",
      en: "I have good material.",
      ru: "У меня хороший материал.",
    },
  ],
});
