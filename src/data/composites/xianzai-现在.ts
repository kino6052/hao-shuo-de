import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 65,
  phase: 1,
  zh: "现在",
  py: "xiànzài",
  en: "now",
  ru: "сейчас",
  pos: "noun",
  hsd: ["{{word:xian4}}-{{word:zai4}}"],
  tts: ["现在"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}} {{word:shi2}} {{word:dian3}}.",
      hanzi: "现在十点。",
      en: "It's ten o'clock.",
      ru: "Сейчас десять часов.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:xian4}}-{{word:zai4}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我现在在家。",
      en: "I'm at home now.",
      ru: "Я сейчас дома.",
    },
  ],
});
