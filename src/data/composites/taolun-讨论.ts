import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1196,
  phase: 3,
  zh: "讨论",
  py: "tǎolùn",
  en: "discuss",
  ru: "обсуждать",
  pos: "verb",
  hsd: ["{{word:yi1}}-{{word:qi3}} {{word:shuo1}}"],
  tts: ["一起说"],
  literal: "talk together",
  fit: "plain",
  topics: ["chatting"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}}.",
      hanzi: "我们一起说。",
      en: "We discuss it.",
      ru: "Мы обсуждаем.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:he2}} {{word:wo3}} {{word:yi1}}-{{word:qi3}} {{word:shuo1}}.",
      hanzi: "你和我一起说。",
      en: "You and I discuss it.",
      ru: "Мы с тобой обсуждаем.",
    },
  ],
});
