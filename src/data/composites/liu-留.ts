import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1382,
  phase: 3,
  zh: "留",
  py: "liú",
  en: "stay, keep",
  ru: "оставаться, оставлять",
  pos: "verb",
  hsd: ["{{word:liu2}}"],
  tts: ["留"],
  fit: "word",
  topics: ["meeting-and-parting"],
  isA: ["starting-and-stopping"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:liu2}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我留在家。",
      en: "I stay at home.",
      ru: "Я остаюсь дома.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:liu2}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "你留在这里。",
      en: "You stay here.",
      ru: "Ты остаёшься здесь.",
    },
  ],
});
