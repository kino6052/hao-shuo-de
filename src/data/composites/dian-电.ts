import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 189,
  phase: 1,
  zh: "电",
  py: "diàn",
  en: "electricity",
  ru: "электричество",
  pos: "noun",
  hsd: ["{{word:rang4}}-{{word:ji1}}-{{word:qi4}}-{{word:dong4}}-{{word:de}} {{word:li4}}"],
  tts: ["让机器动的力"],
  literal: "the force that makes machines move",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:mei2}}-{{word:you3}} {{word:rang4}}-{{word:ji1}}-{{word:qi4}}-{{word:dong4}}-{{word:de}} {{word:li4}}.",
      hanzi: "这里没有让机器动的力。",
      en: "There's no electricity here.",
      ru: "Здесь нет электричества.",
    },
    {
      pinyin: "{{Word:shou3}}-{{word:ji1}} {{word:yao4}} {{word:rang4}}-{{word:ji1}}-{{word:qi4}}-{{word:dong4}}-{{word:de}} {{word:li4}}.",
      hanzi: "手机要让机器动的力。",
      en: "A phone needs electricity.",
      ru: "Телефону нужно электричество.",
    },
  ],
});
