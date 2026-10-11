import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 771,
  phase: 2,
  zh: "画",
  py: "huà",
  en: "draw; painting",
  ru: "рисовать; картина",
  pos: "verb",
  hsd: [
    "{{word:xie3}}",
    "{{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["写", "写的看的东西"],
  literal: "write / a drawn thing to look at",
  fit: "plain",
  note: "xiě covers drawing too.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xie3}} {{word:ta1}}.",
      hanzi: "我写他。",
      en: "I draw him.",
      ru: "Я рисую его.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:xie3}}-{{word:de}} {{word:kan4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这是写的看的东西。",
      en: "This is a painting.",
      ru: "Это картина.",
    },
  ],
});
