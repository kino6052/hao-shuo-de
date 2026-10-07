import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 287,
  phase: 1,
  zh: "语言",
  py: "yǔyán",
  en: "language",
  ru: "язык",
  pos: "noun",
  hsd: ["{{word:hua4}}"],
  tts: ["话"],
  literal: "speech",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hui4}} {{word:shuo1}} {{word:shen2me}} {{word:hua4}}?",
      hanzi: "你会说什么话？",
      en: "What languages do you speak?",
      ru: "На каких языках ты говоришь?",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:na3}} {{word:guo2}} {{word:hua4}}?",
      hanzi: "这是哪国话？",
      en: "Which country's language is this?",
      ru: "Это язык какой страны?",
    },
  ],
});
