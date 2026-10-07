import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 400,
  phase: 1,
  zh: "总是",
  py: "zǒngshì",
  en: "always",
  ru: "всегда",
  pos: "adverb",
  hsd: ["{{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}}"],
  tts: ["什么时间都"],
  literal: "at any time",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:lai2}} {{word:wan3}}.",
      hanzi: "他什么时间都来晚。",
      en: "He's always late.",
      ru: "Он всегда опаздывает.",
    },
    {
      pinyin: "{{Word:ma1ma}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:zai4}}.",
      hanzi: "妈妈什么时间都在。",
      en: "Mom is always there.",
      ru: "Мама всегда рядом.",
    },
  ],
});
