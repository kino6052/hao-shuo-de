import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 269,
  phase: 1,
  zh: "原因",
  py: "yuányīn",
  en: "reason",
  ru: "причина",
  pos: "noun",
  hsd: ["{{word:wei4}}-{{word:shen2me}}"],
  tts: ["为什么"],
  literal: "why",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}} {{word:wei4}}-{{word:shen2me}}.",
      hanzi: "我不知道为什么。",
      en: "I don't know the reason.",
      ru: "Я не знаю почему.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:shuo1}} {{word:wei4}}-{{word:shen2me}}.",
      hanzi: "你说为什么。",
      en: "Tell me why.",
      ru: "Скажи почему.",
    },
  ],
});
