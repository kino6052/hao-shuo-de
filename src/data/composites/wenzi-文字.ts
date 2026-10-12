import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1116,
  phase: 3,
  zh: "文字",
  py: "wénzì",
  en: "writing, script",
  ru: "письменность, текст",
  pos: "noun",
  hsd: ["{{word:xie3}}-{{word:de}} {{word:ci2}}"],
  tts: ["写的词"],
  literal: "written words",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:xie3}}-{{word:de}} {{word:ci2}}.",
      hanzi: "我爱写的词。",
      en: "I love writing.",
      ru: "Я люблю письменность.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ta1}} {{word:xie3}}-{{word:de}} {{word:ci2}}.",
      hanzi: "这是他写的词。",
      en: "This is his writing.",
      ru: "Это его письмо.",
    },
  ],
});
