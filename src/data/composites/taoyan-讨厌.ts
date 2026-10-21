import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 957,
  phase: 2,
  zh: "讨厌",
  py: "tǎoyàn",
  en: "dislike",
  ru: "не любить",
  pos: "adjective",
  hsd: ["{{word:bu4}} {{word:ai4}}"],
  tts: ["不爱"],
  literal: "not love",
  fit: "natural",
  topics: ["liking-and-wanting"],
  isA: ["feeling-and-wanting"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:ai4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我不爱这个。",
      en: "I dislike this.",
      ru: "Мне это не нравится.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bu4}} {{word:ai4}} {{word:ni3}}.",
      hanzi: "他不爱你。",
      en: "He dislikes you.",
      ru: "Ты ему не нравишься.",
    },
  ],
});
