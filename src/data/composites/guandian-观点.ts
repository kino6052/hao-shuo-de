import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1193,
  phase: 3,
  zh: "观点",
  py: "guāndiǎn",
  en: "viewpoint",
  ru: "точка зрения",
  pos: "noun",
  hsd: ["{{word:xiang3}}-{{word:fa3}}", "{{word:xiang3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["想法", "想的东西"],
  literal: "what you think",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:ta1}}-{{word:de}} {{word:xiang3}}-{{word:fa3}}.",
      hanzi: "我爱他的想法。",
      en: "I like his viewpoint.",
      ru: "Мне нравится его точка зрения.",
    },
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:xiang3}}-{{word:fa3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你的想法很好。",
      en: "Your viewpoint is good.",
      ru: "У тебя хорошая точка зрения.",
    },
  ],
});
