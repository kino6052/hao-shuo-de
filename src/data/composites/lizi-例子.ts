import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1250,
  phase: 3,
  zh: "例子",
  py: "lìzi",
  en: "example",
  ru: "пример",
  pos: "noun",
  hsd: ["{{word:gei3}} {{word:ren2}} {{word:kan4}}-{{word:de}} {{word:yi1}}-ge"],
  tts: ["给人看的一个"],
  literal: "one to show people",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:gei3}} {{word:ren2}} {{word:kan4}}-{{word:de}} {{word:yi1}}-{{light:ge4}}.",
      hanzi: "这是给人看的一个。",
      en: "This is an example.",
      ru: "Это пример.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:gei3}} {{word:ren2}} {{word:kan4}}-{{word:de}} {{word:yi1}}-{{light:ge4}} {{word:ma}}?",
      hanzi: "你有给人看的一个吗？",
      en: "Do you have an example?",
      ru: "У тебя есть пример?",
    },
  ],
});
