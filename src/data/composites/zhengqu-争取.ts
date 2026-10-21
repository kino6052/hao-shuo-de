import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1010,
  phase: 3,
  zh: "争取",
  py: "zhēngqǔ",
  en: "strive for",
  ru: "стремиться",
  pos: "verb",
  hsd: ["{{word:yao4}} {{word:de2}}"],
  tts: ["要得"],
  literal: "want to get",
  fit: "plain",
  topics: ["deciding"],
  isA: ["thinking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:de2}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我要得这个。",
      en: "I'm striving for this.",
      ru: "Я стремлюсь к этому.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:de2}} {{word:shen2me}}?",
      hanzi: "你要得什么？",
      en: "What are you striving for?",
      ru: "К чему ты стремишься?",
    },
  ],
});
