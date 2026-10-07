import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 63,
  phase: 1,
  zh: "来",
  py: "lái",
  en: "come",
  ru: "приходить",
  pos: "verb",
  hsd: ["{{word:lai2}}"],
  tts: ["来"],
  fit: "word",
  examples: [
    { pinyin: "{{Word:ni3}} {{word:lai2}}!", hanzi: "你来！", en: "Come here!", ru: "Иди сюда!" },
    {
      pinyin: "{{Word:ta1}} {{word:ming2}}-{{word:tian1}} {{word:lai2}} {{word:wo3}} {{word:jia1}}.",
      hanzi: "他明天来我家。",
      en: "He's coming to my place tomorrow.",
      ru: "Завтра он придёт ко мне.",
    },
  ],
});
