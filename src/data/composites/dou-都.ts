import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 75,
  phase: 1,
  zh: "都",
  py: "dōu",
  en: "all",
  ru: "все",
  pos: "adverb",
  hsd: ["{{word:dou1}}"],
  tts: ["都"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:dou1}} {{word:shi4}} {{word:xue2}}-{{word:sheng1}}.",
      hanzi: "我们都是学生。",
      en: "We're all students.",
      ru: "Мы все студенты.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shen2me}} {{word:dou1}} {{word:chi1}}.",
      hanzi: "他什么都吃。",
      en: "He eats everything.",
      ru: "Он ест всё.",
    },
  ],
});
