import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1115,
  phase: 3,
  zh: "文件",
  py: "wénjiàn",
  en: "document, file",
  ru: "документ, файл",
  pos: "noun",
  hsd: ["{{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["写的东西"],
  literal: "a written thing",
  fit: "plain",
  topics: ["office"],
  isA: ["paper-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我看写的东西。",
      en: "I read the document.",
      ru: "Я читаю документ.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ta1}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是他写的东西。",
      en: "This is the file he wrote.",
      ru: "Это файл, который он написал.",
    },
  ],
});
