import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1414,
  phase: 3,
  zh: "课文",
  py: "kèwén",
  en: "text (of a lesson)",
  ru: "текст урока",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["学的写的东西"],
  literal: "a written thing to learn",
  fit: "plain",
  topics: ["studying"],
  isA: ["paper-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:xue2}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我看学的写的东西。",
      en: "I read the text of the lesson.",
      ru: "Я читаю текст урока.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:xue2}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是学的写的东西。",
      en: "This is the text of the lesson.",
      ru: "Это текст урока.",
    },
  ],
});
