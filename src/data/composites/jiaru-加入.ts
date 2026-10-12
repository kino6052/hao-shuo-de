import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1268,
  phase: 3,
  zh: "加入",
  py: "jiārù",
  en: "join",
  ru: "вступать, присоединяться",
  pos: "verb",
  hsd: ["{{word:jin4}}-{{word:dao4}} X-{{word:li3}}"],
  tts: ["进到X里"],
  literal: "go into X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jin4}}-{{word:dao4}} {{word:zhe4}}-{{light:ge4}} {{word:jia1}}-{{word:li3}} {{word:le}}.",
      hanzi: "我进到这个家里了。",
      en: "I've joined this family.",
      ru: "Я вошёл в эту семью.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jin4}}-{{word:dao4}} {{word:wo3}} {{word:jia1}}-{{word:li3}} {{word:le}}.",
      hanzi: "他进到我家里了。",
      en: "He has joined my family.",
      ru: "Он вошёл в мою семью.",
    },
  ],
});
