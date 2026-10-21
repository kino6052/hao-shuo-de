import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1308,
  phase: 3,
  zh: "学期",
  py: "xuéqī",
  en: "semester",
  ru: "семестр",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["学的时间"],
  literal: "study time",
  fit: "plain",
  topics: ["studying"],
  isA: ["time-span"],
  examples: [
    {
      pinyin: "{{Word:xue2}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:hen3}} {{word:chang2}}.",
      hanzi: "学的时间很长。",
      en: "The semester is long.",
      ru: "Семестр длинный.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:zai4}} {{word:xue2}}-{{word:de}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:zai4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "我们在学的时间都在学校。",
      en: "We are at school the whole semester.",
      ru: "Весь семестр мы в школе.",
    },
  ],
});
