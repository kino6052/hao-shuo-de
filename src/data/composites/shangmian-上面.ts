import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 344,
  phase: 1,
  zh: "上面",
  py: "shàngmiàn",
  en: "up",
  ru: "вверх",
  pos: "noun",
  hsd: ["{{word:shang4}}-{{word:mian4}}"],
  tts: ["上面"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:shang4}}-{{word:mian4}} {{word:you3}} {{word:shen2me}}?",
      hanzi: "上面有什么？",
      en: "What's up there?",
      ru: "Что там наверху?",
    },
    {
      pinyin: "{{Word:ba3}} {{word:bao1}} {{word:fang4}} {{word:zai4}} {{word:shang4}}-{{word:mian4}}.",
      hanzi: "把包放在上面。",
      en: "Put the bag on top.",
      ru: "Положи сумку наверх.",
    },
  ],
});
