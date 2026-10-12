import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1301,
  phase: 3,
  zh: "复习",
  py: "fùxí",
  en: "review (lessons)",
  ru: "повторять (урок)",
  pos: "verb",
  hsd: ["{{word:you4}} {{word:xue2}}", "{{word:you4}} {{word:kan4}} {{word:yi1}}-{{word:xia4}}"],
  tts: ["又学", "又看一下"],
  literal: "learn again / look again for a moment",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you4}} {{word:xue2}} {{word:le}}.",
      hanzi: "我又学了。",
      en: "I reviewed it again.",
      ru: "Я повторил это ещё раз.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you4}} {{word:kan4}} {{word:yi1}}-{{word:xia4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我又看一下这个。",
      en: "I'll review this once more.",
      ru: "Я ещё раз просмотрю это.",
    },
  ],
});
