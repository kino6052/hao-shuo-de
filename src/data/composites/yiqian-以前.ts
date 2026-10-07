import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 139,
  phase: 1,
  zh: "以前",
  py: "yǐqián",
  en: "before",
  ru: "до, раньше",
  pos: "noun",
  hsd: ["{{word:yi3}}-{{word:qian2}}", "X {{word:qian2}}"],
  tts: ["以前", "…前"],
  literal: "before X",
  fit: "natural",
  note: "chī qián: before eating.",
  examples: [
    {
      pinyin: "{{Word:yi3}}-{{word:qian2}} {{word:wo3}} {{word:zai4}} \"Zhōngguó\".",
      hanzi: "以前我在中国。",
      en: "I used to be in China.",
      ru: "Раньше я был в Китае.",
    },
    {
      pinyin: "{{Word:shui4jiao4}} {{word:qian2}}, {{word:wo3}} {{word:kan4}} {{word:shu1}}.",
      hanzi: "睡觉前，我看书。",
      en: "Before bed, I read.",
      ru: "Перед сном я читаю.",
    },
  ],
});
