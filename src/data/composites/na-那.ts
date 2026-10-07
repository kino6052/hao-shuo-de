import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 74,
  phase: 1,
  zh: "那",
  py: "nà",
  en: "that",
  ru: "тот",
  pos: "pronoun",
  hsd: ["{{word:na4}}"],
  tts: ["那"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:na4}} {{word:shi4}} {{word:shen2me}}?",
      hanzi: "那是什么？",
      en: "What's that?",
      ru: "Что это там?",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:ren2}} {{word:shi4}} {{word:wo3}} {{word:ma1ma}}.",
      hanzi: "那个人是我妈妈。",
      en: "That person is my mom.",
      ru: "Тот человек — моя мама.",
    },
  ],
});
