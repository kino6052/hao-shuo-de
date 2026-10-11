import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 446,
  phase: 1,
  zh: "着",
  py: "zhe",
  en: "(ongoing action)",
  ru: "(длительность)",
  pos: "auxiliary",
  hsd: ["{{word:zai4}} + verb"],
  tts: ["在"],
  fit: "skip",
  note: "Use zài before the verb.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:shui4jiao4}}.",
      hanzi: "他在睡觉。",
      en: "He's sleeping.",
      ru: "Он спит.",
    },
    {
      pinyin: "{{Word:ma1ma}} {{word:zai4}} {{word:zuo4}} {{word:fan4}}.",
      hanzi: "妈妈在做饭。",
      en: "Mom is cooking.",
      ru: "Мама готовит.",
    },
  ],
});
