import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1258,
  phase: 3,
  zh: "其中",
  py: "qízhōng",
  en: "among them",
  ru: "среди них",
  pos: "noun",
  hsd: ["X {{word:li3}}-{{word:mian4}}"],
  tts: ["X里面"],
  literal: "inside X",
  fit: "plain",
  topics: ["some-most-and-few"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:xie1}} {{word:ren2}} {{word:li3}}-{{word:mian4}} {{word:you3}} {{word:wo3}}-{{word:de}} {{word:ba4ba}}.",
      hanzi: "这些人里面有我的爸爸。",
      en: "My dad is among these people.",
      ru: "Среди этих людей мой папа.",
    },
    {
      pinyin: "{{Word:na4}}-{{word:xie1}} {{word:shu1}} {{word:li3}}-{{word:mian4}} {{word:you3}} {{word:ni3}}-{{word:de}}.",
      hanzi: "那些书里面有你的。",
      en: "Yours is among those books.",
      ru: "Среди тех книг есть твоя.",
    },
  ],
});
