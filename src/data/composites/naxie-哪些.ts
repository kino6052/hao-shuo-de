import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1294,
  phase: 3,
  zh: "哪些",
  py: "nǎxiē",
  en: "which (ones)",
  ru: "какие",
  pos: "pronoun",
  hsd: ["{{word:na3}}-{{word:xie1}}", "{{word:shen2me}}"],
  tts: ["哪些", "什么"],
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["question-words"],
  isA: ["question-word-kind"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:na3}}-{{word:xie1}}?",
      hanzi: "你要哪些？",
      en: "Which ones do you want?",
      ru: "Какие ты хочешь?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ai4}} {{word:na3}}-{{word:xie1}}?",
      hanzi: "你爱哪些？",
      en: "Which ones do you like?",
      ru: "Какие тебе нравятся?",
    },
  ],
});
