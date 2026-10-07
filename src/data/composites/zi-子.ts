import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 170,
  phase: 1,
  zh: "子",
  py: "zi",
  en: "(noun ending)",
  ru: "(суффикс)",
  pos: "suffix",
  hsd: ["{{word:zi}}"],
  tts: ["子"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:yang4}}-{{word:zi}} {{word:hen3}} {{word:hao3}}-{{word:kan4}}.",
      hanzi: "这个样子很好看。",
      en: "This shape looks nice.",
      ru: "Эта форма красивая.",
    },
    {
      pinyin: "{{Word:fang2}}-{{word:zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "房子很大。",
      en: "The house is big.",
      ru: "Дом большой.",
    },
  ],
});
