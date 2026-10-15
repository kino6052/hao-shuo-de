import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 926,
  phase: 2,
  zh: "后天",
  py: "hòutiān",
  en: "the day after tomorrow",
  ru: "послезавтра",
  pos: "noun",
  hsd: ["{{word:hou4}}-{{word:tian1}}", "{{word:liang3}}-ge {{word:ri4}} {{word:hou4}}"],
  tts: ["后天", "两个日后"],
  literal: "after-day / two days later",
  fit: "natural",
  kinds: ["built", "built"],
  examples: [
    {
      pinyin: "{{Word:hou4}}-{{word:tian1}} {{word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "后天我在家。",
      en: "The day after tomorrow I'll be at home.",
      ru: "Послезавтра я буду дома.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:hou4}}-{{word:tian1}} {{word:qu4}}.",
      hanzi: "我后天去。",
      en: "I'm going the day after tomorrow.",
      ru: "Я иду послезавтра.",
    },
  ],
});
