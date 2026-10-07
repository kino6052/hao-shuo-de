import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 232,
  phase: 1,
  zh: "它",
  py: "tā",
  en: "it",
  ru: "оно",
  pos: "pronoun",
  hsd: ["{{word:ta1}}"],
  tts: ["它"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dong4}}-{{word:wu4}} {{word:hen3}} {{word:xiao3}}, {{word:ta1}} {{word:ai4}} {{word:wan2r}}.",
      hanzi: "这个动物很小，它爱玩儿。",
      en: "This animal is small; it loves to play.",
      ru: "Это животное маленькое, оно любит играть.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:shou3}}-{{word:ji1}}? {{Word:ta1}} {{word:zai4}} {{word:bao1}}-{{word:li3}}.",
      hanzi: "我的手机？它在包里。",
      en: "My phone? It's in the bag.",
      ru: "Мой телефон? Он в сумке.",
    },
  ],
});
