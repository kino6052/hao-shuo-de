import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 524,
  phase: 2,
  zh: "晚饭",
  py: "wǎnfàn",
  en: "dinner",
  ru: "ужин",
  pos: "noun",
  hsd: ["{{word:wan3}}-{{word:fan4}}"],
  tts: ["晚饭"],
  literal: "late meal",
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:wan3}}-{{word:fan4}} {{word:you3}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "晚饭有水果。",
      en: "There's fruit with dinner.",
      ru: "К ужину есть фрукты.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:wan3}}-{{word:fan4}} {{word:chi1}} {{word:shen2me}}?",
      hanzi: "我们晚饭吃什么？",
      en: "What are we having for dinner?",
      ru: "Что у нас на ужин?",
    },
  ],
});
