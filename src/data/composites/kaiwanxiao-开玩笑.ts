import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 971,
  phase: 2,
  zh: "开玩笑",
  py: "kāi wánxiào",
  en: "joke",
  ru: "шутить",
  pos: "phrase",
  hsd: ["{{word:wan2r}}-{{word:de}} {{word:shuo1}}"],
  tts: ["玩儿的说"],
  literal: "say in play",
  fit: "plain",
  topics: ["chatting"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:wan2r}}-{{word:de}} {{word:shuo1}}.",
      hanzi: "他玩儿的说。",
      en: "He is joking.",
      ru: "Он шутит.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:wan2r}}-{{word:de}} {{word:shuo1}}.",
      hanzi: "我玩儿的说。",
      en: "I'm joking.",
      ru: "Я шучу.",
    },
  ],
});
