import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 356,
  phase: 1,
  zh: "儿子",
  py: "érzi",
  en: "son",
  ru: "сын",
  pos: "noun",
  hsd: ["{{word:nan2}}-{{word:hai2}}-{{light:zi}}"],
  tts: ["男孩子"],
  literal: "boy (said of your son)",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:yi1}}-{{light:ge4}} {{word:nan2}}-{{word:hai2}}-{{word:zi}}.",
      hanzi: "我有一个男孩子。",
      en: "I have a son.",
      ru: "У меня есть сын.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:nan2}}-{{word:hai2}}-{{word:zi}} {{word:zai4}} {{word:da4}}-{{word:xue2}}.",
      hanzi: "他的男孩子在大学。",
      en: "His son is at university.",
      ru: "Его сын учится в университете.",
    },
  ],
});
