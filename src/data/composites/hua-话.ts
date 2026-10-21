import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1409,
  phase: 3,
  zh: "话",
  py: "huà",
  en: "words, speech",
  ru: "слова, речь",
  pos: "noun",
  hsd: ["{{word:hua4}}", "{{word:shuo1}}-{{word:de}}"],
  tts: ["话", "说的"],
  literal: "what's said",
  fit: "word",
  topics: ["languages"],
  isA: ["language-thing"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:ting1}} {{word:ni3}}-{{word:de}} {{word:hua4}}.",
      hanzi: "我爱听你的话。",
      en: "I love hearing your words.",
      ru: "Я люблю слушать твои слова.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:hua4}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "他的话很多。",
      en: "He talks a lot.",
      ru: "Он много говорит.",
    },
  ],
});
