import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1361,
  phase: 3,
  zh: "校长",
  py: "xiàozhǎng",
  en: "principal",
  ru: "директор школы",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:de}}-{{word:di4}}-{{light:fang1}}-{{word:de}} {{word:tou2}}"],
  tts: ["学的地方的头"],
  literal: "the head of the school",
  fit: "plain",
  topics: ["classroom"],
  isA: ["worker"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:xue2}}-{{word:de}}-{{word:di4}}-{{light:fang1}}-{{word:de}} {{word:tou2}}.",
      hanzi: "他是学的地方的头。",
      en: "He is the principal.",
      ru: "Он директор школы.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:shi4}} {{word:xue2}}-{{word:de}}-{{word:di4}}-{{light:fang1}}-{{word:de}} {{word:tou2}}.",
      hanzi: "我爸爸是学的地方的头。",
      en: "My father is the principal.",
      ru: "Мой папа директор школы.",
    },
  ],
});
