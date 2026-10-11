import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 421,
  phase: 1,
  zh: "月亮",
  py: "yuèliang",
  en: "moon",
  ru: "луна",
  pos: "noun",
  hsd: ["{{word:yue4}}"],
  tts: ["月"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:kan4}}, {{word:yue4}} {{word:chu1}}-{{word:lai2}} {{word:le}}!",
      hanzi: "看，月出来了！",
      en: "Look, the moon has come out!",
      ru: "Смотри, луна вышла!",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}}-{{word:de}} {{word:yue4}} {{word:hen3}} {{word:yuan2}}.",
      hanzi: "今天的月很圆。",
      en: "The moon is full tonight.",
      ru: "Сегодня луна полная.",
    },
  ],
});
