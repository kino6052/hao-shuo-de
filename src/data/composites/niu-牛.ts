import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 949,
  phase: 2,
  zh: "牛",
  py: "niú",
  en: "cow; awesome",
  ru: "корова; круто",
  pos: "noun",
  hsd: [
    "{{word:jiao4}} \"mōu\"-{{word:de}} {{word:dong4}}-{{word:wu4}}",
    "{{word:zhen1}} {{word:hao3}}",
  ],
  tts: ["叫哞的动物", "真好"],
  literal: "the animal that says \"mou\" / really good",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:jiao4}} \"mōu\"-{{word:de}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "这是叫哞的动物。",
      en: "This is a cow.",
      ru: "Это корова.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhen1}} {{word:hao3}}.",
      hanzi: "你真好。",
      en: "You're awesome.",
      ru: "Ты крут.",
    },
  ],
});
