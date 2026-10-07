import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 200,
  phase: 1,
  zh: "老",
  py: "lǎo",
  en: "old",
  ru: "старый",
  pos: "adjective",
  hsd: ["{{word:lao3}}"],
  tts: ["老"],
  fit: "word",
  note: "Lesson {{lesson:how-much}}.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:hen3}} {{word:lao3}} {{word:le}}.",
      hanzi: "我爸爸很老了。",
      en: "My dad is old now.",
      ru: "Мой папа уже старый.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:fang2}}-{{word:zi}} {{word:hen3}} {{word:lao3}}.",
      hanzi: "这个房子很老。",
      en: "This house is old.",
      ru: "Этот дом старый.",
    },
  ],
});
