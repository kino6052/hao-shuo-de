import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 171,
  phase: 1,
  zh: "少",
  py: "shǎo",
  en: "few",
  ru: "мало",
  pos: "adjective",
  hsd: ["{{word:shao3}}"],
  tts: ["少"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:ren2}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "这里人很少。",
      en: "There are few people here.",
      ru: "Здесь мало людей.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:chi1}}-{{word:de}} {{word:hen3}} {{word:shao3}}.",
      hanzi: "他吃得很少。",
      en: "He eats very little.",
      ru: "Он ест очень мало.",
    },
  ],
});
