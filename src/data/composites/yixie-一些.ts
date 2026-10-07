import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 338,
  phase: 1,
  zh: "一些",
  py: "yìxiē",
  en: "some",
  ru: "несколько",
  pos: "number",
  hsd: ["{{word:yi1}}-{{word:xie1}}", "{{word:you3}}-{{word:de}}", "{{word:yi1}}-{{word:dian3}}"],
  tts: ["一些", "有的", "一点"],
  fit: "natural",
  note: "yī-diǎn for a little of something: yī-diǎn shuǐ.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:le}} {{word:yi1}}-{{word:xie1}} {{word:shui3}}-{{word:guo3}}.",
      hanzi: "我买了一些水果。",
      en: "I bought some fruit.",
      ru: "Я купил немного фруктов.",
    },
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:yi1}}-{{word:dian3}} {{word:shui3}}.",
      hanzi: "给我一点水。",
      en: "Give me a little water.",
      ru: "Дай мне немного воды.",
    },
  ],
});
