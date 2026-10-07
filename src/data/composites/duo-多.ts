import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 49,
  phase: 1,
  zh: "多",
  py: "duō",
  en: "many",
  ru: "много",
  pos: "adjective",
  hsd: ["{{word:duo1}}"],
  tts: ["多"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "这里人很多。",
      en: "There are a lot of people here.",
      ru: "Здесь много людей.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:duo1}}-{{word:shao3}}?",
      hanzi: "你要多少？",
      en: "How many do you want?",
      ru: "Сколько тебе нужно?",
    },
  ],
});
