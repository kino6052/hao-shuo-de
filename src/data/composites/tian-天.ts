import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 50,
  phase: 1,
  zh: "天",
  py: "tiān",
  en: "day",
  ru: "день",
  pos: "noun",
  hsd: ["{{word:tian1}}"],
  tts: ["天"],
  fit: "word",
  note: "rì is the sun, and the day.",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:hen3}} {{word:re4}}.",
      hanzi: "今天很热。",
      en: "It's hot today.",
      ru: "Сегодня жарко.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "明天我在家。",
      en: "Tomorrow I'll be at home.",
      ru: "Завтра я буду дома.",
    },
  ],
});
