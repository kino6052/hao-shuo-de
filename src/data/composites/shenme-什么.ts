import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 17,
  phase: 1,
  zh: "什么",
  py: "shénme",
  en: "what? which?",
  ru: "что? какой?",
  pos: "pronoun",
  hsd: ["{{word:shen2me}}"],
  tts: ["什么"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:shen2me}}?",
      hanzi: "你要什么？",
      en: "What do you want?",
      ru: "Что ты хочешь?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jiao4}} {{word:shen2me}}?",
      hanzi: "他叫什么？",
      en: "What's his name?",
      ru: "Как его зовут?",
    },
  ],
});
