import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 72,
  phase: 1,
  zh: "谁",
  py: "shéi/shuí",
  en: "who",
  ru: "кто",
  pos: "pronoun",
  hsd: ["{{word:shei2}}"],
  tts: ["谁"],
  literal: "what person",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:shei2}}?",
      hanzi: "他是谁？",
      en: "Who is he?",
      ru: "Кто он?",
    },
    {
      pinyin: "{{Word:shei2}} {{word:lai2}} {{word:le}}?",
      hanzi: "谁来了？",
      en: "Who's come?",
      ru: "Кто пришёл?",
    },
  ],
});
