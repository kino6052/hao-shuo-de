import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 519,
  phase: 2,
  zh: "山",
  py: "shān",
  en: "mountain",
  ru: "гора",
  pos: "noun",
  hsd: ["{{word:gao1}}-{{word:di4}}"],
  tts: ["高地"],
  literal: "high ground",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yao4}} {{word:qu4}} {{word:gao1}}-{{word:di4}}.",
      hanzi: "我们要去高地。",
      en: "We're going to the mountain.",
      ru: "Мы идём в горы.",
    },
    {
      pinyin: "{{Word:gao1}}-{{word:di4}}-{{word:shang4}} {{word:you3}} {{word:zhi2wu4}}.",
      hanzi: "高地上有植物。",
      en: "There are plants on the mountain.",
      ru: "В горах есть растения.",
    },
  ],
});
