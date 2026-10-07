import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 43,
  phase: 1,
  zh: "到",
  py: "dào",
  en: "arrive",
  ru: "прибывать",
  pos: "verb",
  hsd: ["{{word:dao4}}"],
  tts: ["到"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:dao4}} {{word:jia1}} {{word:le}}.",
      hanzi: "我到家了。",
      en: "I'm home.",
      ru: "Я дома.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:kan4}}-{{word:dao4}} {{word:ta1}} {{word:le}} {{word:ma}}?",
      hanzi: "你看到他了吗？",
      en: "Did you see him?",
      ru: "Ты его видел?",
    },
  ],
});
