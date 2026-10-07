import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 79,
  phase: 1,
  zh: "叫",
  py: "jiào",
  en: "call",
  ru: "звать",
  pos: "verb",
  hsd: ["{{word:jiao4}}"],
  tts: ["叫"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:jiao4}} {{word:shen2me}}?",
      hanzi: "你叫什么？",
      en: "What's your name?",
      ru: "Как тебя зовут?",
    },
    {
      pinyin: "{{Word:ma1ma}} {{word:jiao4}} {{word:wo3}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "妈妈叫我回家。",
      en: "Mom tells me to come home.",
      ru: "Мама зовёт меня домой.",
    },
  ],
});
