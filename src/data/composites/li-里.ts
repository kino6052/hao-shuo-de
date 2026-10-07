import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 218,
  phase: 1,
  zh: "里",
  py: "lǐ",
  en: "inside",
  ru: "внутри",
  pos: "noun",
  hsd: ["{{word:li3}}"],
  tts: ["里"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:bao1}}-{{word:li3}} {{word:you3}} {{word:shen2me}}?",
      hanzi: "包里有什么？",
      en: "What's in the bag?",
      ru: "Что в сумке?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:fang2}}-{{word:jian1}}-{{word:li3}}.",
      hanzi: "他在房间里。",
      en: "He's in the room.",
      ru: "Он в комнате.",
    },
  ],
});
