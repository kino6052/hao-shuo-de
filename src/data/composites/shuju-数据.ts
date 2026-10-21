import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 986,
  phase: 2,
  zh: "数据",
  py: "shùjù",
  en: "data",
  ru: "данные",
  pos: "noun",
  hsd: ["{{word:shu4}}-\"jù\""],
  tts: ["数据"],
  literal: "numbers",
  fit: "name",
  topics: ["phone-and-computer"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:shu4}}-\"jù\".",
      hanzi: "我有数据。",
      en: "I have the data.",
      ru: "У меня есть данные.",
    },
    {
      pinyin: "{{Word:shu4}}-\"jù\" {{word:hen3}} {{word:duo1}}.",
      hanzi: "数据很多。",
      en: "There is a lot of data.",
      ru: "Данных много.",
    },
  ],
});
