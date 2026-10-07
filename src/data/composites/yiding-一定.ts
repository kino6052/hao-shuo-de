import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 129,
  phase: 1,
  zh: "一定",
  py: "yídìng",
  en: "certainly",
  ru: "обязательно",
  pos: "adjective",
  hsd: ["{{word:yi1}}-{{word:ding4}}", "{{word:zhen1}}"],
  tts: ["一定", "真"],
  literal: "really",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:yi1}}-{{word:ding4}} {{word:hui4}} {{word:lai2}}.",
      hanzi: "他一定会来。",
      en: "He'll definitely come.",
      ru: "Он обязательно придёт.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yi1}}-{{word:ding4}} {{word:yao4}} {{word:chi1}}.",
      hanzi: "你一定要吃。",
      en: "You really must eat.",
      ru: "Тебе обязательно надо поесть.",
    },
  ],
});
