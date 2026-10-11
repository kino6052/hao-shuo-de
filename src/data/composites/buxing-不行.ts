import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 496,
  phase: 1,
  zh: "不行",
  py: "bùxíng",
  en: "not allowed, no good",
  ru: "нельзя, не годится",
  pos: "verb",
  hsd: ["{{word:bu4}} {{word:neng2}}", "{{word:bu4}} {{word:hao3}}"],
  tts: ["不能", "不好"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:bu4}} {{word:neng2}}, {{word:ni3}} {{word:bu4}} {{word:neng2}} {{word:qu4}}.",
      hanzi: "不能，你不能去。",
      en: "No, you can't go.",
      ru: "Нет, тебе нельзя.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang1}}-{{word:fa3}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "这个方法不好。",
      en: "This way's no good.",
      ru: "Этот способ не годится.",
    },
  ],
});
