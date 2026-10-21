import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 956,
  phase: 2,
  zh: "背包",
  py: "bēibāo",
  en: "backpack",
  ru: "рюкзак",
  pos: "noun",
  hsd: ["{{word:zai4}}-{{word:shen1ti3}}-{{word:hou4}}-{{word:mian4}}-{{word:de}} {{word:bao1}}"],
  tts: ["在身体后面的包"],
  literal: "the bag on your back",
  fit: "plain",
  topics: ["a-trip"],
  isA: ["container"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:zai4}}-{{word:shen1ti3}}-{{word:hou4}}-{{word:mian4}}-{{word:de}} {{word:bao1}}.",
      hanzi: "我有在身体后面的包。",
      en: "I have a backpack.",
      ru: "У меня есть рюкзак.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:zai4}}-{{word:shen1ti3}}-{{word:hou4}}-{{word:mian4}}-{{word:de}} {{word:bao1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的在身体后面的包很大。",
      en: "My backpack is big.",
      ru: "Мой рюкзак большой.",
    },
  ],
});
