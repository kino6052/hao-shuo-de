import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 780,
  phase: 2,
  zh: "药",
  py: "yào",
  en: "medicine",
  ru: "лекарство",
  pos: "noun",
  hsd: [
    "{{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}}-{{word:ren2}}-{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["身体不好的人吃的东西"],
  literal: "what a person whose body isn't well eats",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}}-{{word:ren2}}-{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有身体不好的人吃的东西。",
      en: "I have medicine.",
      ru: "У меня есть лекарство.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:chi1}} {{word:shen1ti3}}-{{word:bu4}}-{{word:hao3}}-{{word:de}}-{{word:ren2}}-{{word:chi1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他吃身体不好的人吃的东西。",
      en: "He takes medicine.",
      ru: "Он принимает лекарство.",
    },
  ],
});
