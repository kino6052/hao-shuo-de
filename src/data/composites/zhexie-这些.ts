import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 476,
  phase: 1,
  zh: "这些",
  py: "zhèxiē",
  en: "these",
  ru: "эти",
  pos: "pronoun",
  hsd: ["{{word:zhe4}}-{{word:xie1}}", "{{word:zhe4}}"],
  tts: ["这些", "这"],
  fit: "natural",
  note: "zhè means \"this\" and \"these\".",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:xie1}} {{word:dong1}}-{{light:xi1}} {{word:dou1}} {{word:shi4}} {{word:ni3}}-{{word:de}}.",
      hanzi: "这些东西都是你的。",
      en: "These things are all yours.",
      ru: "Все эти вещи твои.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:xie1}} {{word:hai2}}-{{word:zi}} {{word:hen3}} {{word:ke3}}-{{word:ai4}}.",
      hanzi: "这些孩子很可爱。",
      en: "These children are cute.",
      ru: "Эти дети милые.",
    },
  ],
});
