import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1076,
  phase: 3,
  zh: "屏幕",
  py: "píngmù",
  en: "screen",
  ru: "экран",
  pos: "noun",
  hsd: ["{{word:gong1}}-{{word:ju4}}-{{word:shang4}} {{word:kan4}}-{{word:de}} {{word:mian4}}"],
  tts: ["工具上看的面"],
  literal: "the side of a tool you look at",
  fit: "plain",
  topics: ["computers-and-gadgets"],
  isA: ["computer-or-phone"],
  examples: [
    {
      pinyin: "{{Word:gong1}}-{{word:ju4}}-{{word:shang4}} {{word:kan4}}-{{word:de}} {{word:mian4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "工具上看的面很大。",
      en: "The screen is big.",
      ru: "Экран большой.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:gong1}}-{{word:ju4}}-{{word:shang4}} {{word:kan4}}-{{word:de}} {{word:mian4}}.",
      hanzi: "我看工具上看的面。",
      en: "I look at the screen.",
      ru: "Я смотрю на экран.",
    },
  ],
});
