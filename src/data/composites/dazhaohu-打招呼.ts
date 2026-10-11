import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 972,
  phase: 2,
  zh: "打招呼",
  py: "dǎ zhāohu",
  en: "greet",
  ru: "здороваться",
  pos: "phrase",
  hsd: ["{{word:shuo1}} {{word:ni3}} {{word:hao3}}"],
  tts: ["说你好"],
  literal: "say hello",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}} {{word:ni3}} {{word:hao3}}.",
      hanzi: "我说你好。",
      en: "I say hello.",
      ru: "Я здороваюсь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}} {{word:ni3}} {{word:hao3}}.",
      hanzi: "他说你好。",
      en: "He says hello.",
      ru: "Он здоровается.",
    },
  ],
});
