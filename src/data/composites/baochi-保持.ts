import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1034,
  phase: 3,
  zh: "保持",
  py: "bǎochí",
  en: "keep, maintain",
  ru: "сохранять",
  pos: "verb",
  hsd: ["{{word:liu2}}"],
  tts: ["留"],
  fit: "word",
  topics: ["meeting-and-parting"],
  isA: ["starting-and-stopping"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:liu2}} {{word:zhe4}}-{{light:ge4}} {{word:ma}}?",
      hanzi: "你要留这个吗？",
      en: "Do you want to keep this?",
      ru: "Ты хочешь оставить это?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:liu2}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我留这个。",
      en: "I'm keeping this.",
      ru: "Я оставляю это.",
    },
  ],
});
