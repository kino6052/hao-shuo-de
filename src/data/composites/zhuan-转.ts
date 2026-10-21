import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1420,
  phase: 3,
  zh: "转",
  py: "zhuǎn",
  en: "turn",
  ru: "поворачивать(ся)",
  pos: "verb",
  hsd: [
    "{{word:qu4}} {{word:zuo3}}-{{word:bian1}} {{word:hai2}}-{{word:shi4}} {{word:you4}}-{{word:bian1}}",
    "{{word:yuan2}}-{{word:yuan2}}-{{word:de}} {{word:dong4}}",
  ],
  tts: ["去左边还是右边", "圆圆地动"],
  literal: "go left or right / move round and round",
  fit: "plain",
  topics: ["walking-and-running"],
  isA: ["moving-action"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:qu4}} {{word:zuo3}}-{{word:bian1}} {{word:hai2}}-{{word:shi4}} {{word:you4}}-{{word:bian1}}?",
      hanzi: "你去左边还是右边？",
      en: "Do you turn left or right?",
      ru: "Ты поворачиваешь налево или направо?",
    },
    {
      pinyin: "{{Word:che1}} {{word:yuan2}}-{{word:yuan2}}-{{word:de}} {{word:dong4}}.",
      hanzi: "车圆圆地动。",
      en: "The car goes round and round.",
      ru: "Машина движется по кругу.",
    },
  ],
});
