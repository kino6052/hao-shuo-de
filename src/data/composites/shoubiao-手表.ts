import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 847,
  phase: 2,
  zh: "手表",
  py: "shǒubiǎo",
  en: "wristwatch",
  ru: "наручные часы",
  pos: "noun",
  hsd: [
    "{{word:shou3}}-{{word:shang4}} {{word:kan4}}-{{word:dian3}}-{{word:yong4}}-{{word:de}} {{word:gong1}}-{{light:ju4}}",
  ],
  tts: ["手上看点用的工具"],
  literal: "the tool on the hand used for looking at the time",
  fit: "plain",
  topics: ["accessories"],
  isA: ["headwear-or-accessory"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shou3}}-{{word:shang4}} {{word:kan4}}-{{word:dian3}}-{{word:yong4}}-{{word:de}} {{word:gong1}}-{{word:ju4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我的手上看点用的工具很好。",
      en: "My watch is nice.",
      ru: "Мои часы хорошие.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:shou3}}-{{word:shang4}} {{word:kan4}}-{{word:dian3}}-{{word:yong4}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我有手上看点用的工具。",
      en: "I have a watch.",
      ru: "У меня есть часы.",
    },
  ],
});
