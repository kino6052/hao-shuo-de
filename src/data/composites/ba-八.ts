import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 40,
  phase: 1,
  zh: "八",
  py: "bā",
  en: "eight",
  ru: "восемь",
  pos: "number",
  hsd: ["{{word:ba1}}"],
  tts: ["八"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba1}} {{word:dian3}} {{word:qi3}}-{{word:lai2}}.",
      hanzi: "我八点起来。",
      en: "I get up at eight.",
      ru: "Я встаю в восемь.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:ba1}}-{{light:ge4}} {{word:ren2}}.",
      hanzi: "这里有八个人。",
      en: "There are eight people here.",
      ru: "Здесь восемь человек.",
    },
  ],
});
