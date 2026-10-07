import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 5,
  phase: 1,
  zh: "做",
  py: "zuò",
  en: "do, make",
  ru: "делать",
  pos: "verb",
  hsd: ["{{word:zuo4}}"],
  tts: ["做"],
  fit: "word",
  note: "Hao-shuo-de says zuò for \"do\" and \"make\".",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:zuo4}} {{word:shen2me}}?",
      hanzi: "你在做什么？",
      en: "What are you doing?",
      ru: "Что ты делаешь?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:hui4}} {{word:zuo4}} {{word:fan4}}.",
      hanzi: "我会做饭。",
      en: "I can cook.",
      ru: "Я умею готовить.",
    },
  ],
});
