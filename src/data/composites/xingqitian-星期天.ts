import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 944,
  phase: 2,
  zh: "星期天",
  py: "xīngqītiān",
  en: "Sunday",
  ru: "воскресенье",
  pos: "noun",
  hsd: [
    "{{word:qi1}}-ge {{word:ri4}}-{{word:de}} {{word:zui4}}-{{word:hou4}} {{word:yi1}}-ge {{word:ri4}}",
  ],
  tts: ["七个日的最后一个日"],
  literal: "the last of the seven days",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:shi4}} {{word:qi1}}-{{light:ge4}} {{word:ri4}}-{{word:de}} {{word:zui4}}-{{word:hou4}} {{word:yi1}}-{{light:ge4}} {{word:ri4}}.",
      hanzi: "今天是七个日的最后一个日。",
      en: "Today is Sunday.",
      ru: "Сегодня воскресенье.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:jia1}}, {{word:qi1}}-{{light:ge4}} {{word:ri4}}-{{word:de}} {{word:zui4}}-{{word:hou4}} {{word:yi1}}-{{light:ge4}} {{word:ri4}}.",
      hanzi: "我在家，七个日的最后一个日。",
      en: "I'm at home on Sunday.",
      ru: "Я дома в воскресенье.",
    },
  ],
});
