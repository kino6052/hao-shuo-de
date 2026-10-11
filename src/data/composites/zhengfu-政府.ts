import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 589,
  phase: 2,
  zh: "政府",
  py: "zhèngfǔ",
  en: "government",
  ru: "правительство",
  pos: "noun",
  hsd: ["{{word:guo2}}-{{word:jia1}}-{{word:de}} {{word:jue2}}-{{word:ding4}}-{{word:zhe3}}"],
  tts: ["国家的决定者"],
  literal: "the country's decider",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:guo2}}-{{word:jia1}}-{{word:de}} {{word:jue2}}-{{word:ding4}}-{{word:zhe3}} {{word:shuo1}} {{word:le}}.",
      hanzi: "国家的决定者说了。",
      en: "The government has spoken.",
      ru: "Правительство высказалось.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:bang1}} {{word:guo2}}-{{word:jia1}}-{{word:de}} {{word:jue2}}-{{word:ding4}}-{{word:zhe3}}.",
      hanzi: "我们帮国家的决定者。",
      en: "We help the government.",
      ru: "Мы помогаем правительству.",
    },
  ],
});
