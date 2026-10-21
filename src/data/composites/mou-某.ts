import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1129,
  phase: 3,
  zh: "某",
  py: "mǒu",
  en: "a certain",
  ru: "некий",
  pos: "pronoun",
  hsd: ["{{word:yi1}}-ge"],
  tts: ["一个"],
  literal: "one",
  fit: "plain",
  topics: ["all-and-some"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:you3}} {{word:yi1}}-{{light:ge4}} {{word:ren2}} {{word:shuo1}}.",
      hanzi: "有一个人说。",
      en: "A certain person said so.",
      ru: "Один человек так сказал.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:yi1}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:zhao3}} {{word:ta1}}.",
      hanzi: "我在一个地方找他。",
      en: "I look for him in a certain place.",
      ru: "Я ищу его в одном месте.",
    },
  ],
});
