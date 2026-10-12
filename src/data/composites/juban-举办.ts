import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1235,
  phase: 3,
  zh: "举办",
  py: "jǔbàn",
  en: "hold, host (an event)",
  ru: "проводить (мероприятие)",
  pos: "verb",
  hsd: ["{{word:zuo4}}"],
  tts: ["做"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:jia1}} {{word:zuo4}} {{word:sheng1}}-{{word:ri4}}.",
      hanzi: "我在家做生日。",
      en: "I'm holding a birthday party at home.",
      ru: "Я устраиваю день рождения дома.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:na3}}-{{word:li3}} {{word:zuo4}} {{word:sheng1}}-{{word:ri4}}?",
      hanzi: "你在哪里做生日？",
      en: "Where are you holding your birthday party?",
      ru: "Где ты устраиваешь день рождения?",
    },
  ],
});
