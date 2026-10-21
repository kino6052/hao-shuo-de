import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1393,
  phase: 3,
  zh: "线上",
  py: "xiànshàng",
  en: "online",
  ru: "онлайн",
  pos: "noun",
  hsd: ["{{word:xian4}}-{{word:shang4}}", "{{word:wang3}}-{{word:shang4}}"],
  tts: ["线上", "网上"],
  literal: "on the line / on the net",
  fit: "natural",
  topics: ["internet-and-websites"],
  isA: ["place-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:wang3}}-{{word:shang4}}.",
      hanzi: "我在网上。",
      en: "I am online.",
      ru: "Я в сети.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:kan4}}.",
      hanzi: "他在网上看。",
      en: "He watches online.",
      ru: "Он смотрит онлайн.",
    },
  ],
});
