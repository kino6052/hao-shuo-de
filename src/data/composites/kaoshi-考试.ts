import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 327,
  phase: 1,
  zh: "考试",
  py: "kǎoshì",
  en: "exam",
  ru: "экзамен",
  pos: "verb",
  hsd: [
    "{{word:kan4}}-{{word:ni3}}-{{word:xue2}}-{{word:de}}-{{word:duo1}}-{{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["看你学得多好的东西"],
  literal: "a thing that sees how well you learned",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:you3}} {{word:kan4}}-{{word:ni3}}-{{word:xue2}}-{{word:de}}-{{word:duo1}}-{{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "明天有看你学得多好的东西。",
      en: "There's an exam tomorrow.",
      ru: "Завтра экзамен.",
    },
    {
      pinyin: "{{Word:kan4}}-{{word:ni3}}-{{word:xue2}}-{{word:de}}-{{word:duo1}}-{{word:hao3}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:nan2}}.",
      hanzi: "看你学得多好的东西很难。",
      en: "The exam is hard.",
      ru: "Экзамен трудный.",
    },
  ],
});
