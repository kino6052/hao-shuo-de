import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 270,
  phase: 1,
  zh: "发现",
  py: "fāxiàn",
  en: "discover, find",
  ru: "обнаружить",
  pos: "verb",
  hsd: ["{{word:fa1}}-{{word:xian4}}", "{{word:zhao3}}-{{word:dao4}}"],
  tts: ["发现", "找到"],
  literal: "look-arrive",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:fa1}}-{{word:xian4}} {{word:ta1}} {{word:bu4}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我发现他不在家。",
      en: "I found he wasn't home.",
      ru: "Я обнаружил, что его нет дома.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhao3}}-{{word:dao4}} {{word:le}} {{word:ma}}?",
      hanzi: "你找到了吗？",
      en: "Did you find it?",
      ru: "Ты нашёл?",
    },
  ],
});
