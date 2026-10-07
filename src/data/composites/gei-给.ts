import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 68,
  phase: 1,
  zh: "给",
  py: "gěi",
  en: "give",
  ru: "давать",
  pos: "verb",
  hsd: ["{{word:gei3}}"],
  tts: ["给"],
  fit: "word",
  examples: [
    { pinyin: "{{Word:gei3}} {{word:ni3}}.", hanzi: "给你。", en: "Here you go.", ru: "Держи." },
    {
      pinyin: "{{Word:ma1ma}} {{word:gei3}} {{word:wo3}} {{word:yi1}}-{{light:ge4}} {{word:bao1}}.",
      hanzi: "妈妈给我一个包。",
      en: "Mom gives me a bag.",
      ru: "Мама даёт мне сумку.",
    },
  ],
});
