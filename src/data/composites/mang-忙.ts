import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 398,
  phase: 1,
  zh: "忙",
  py: "máng",
  en: "busy",
  ru: "занятой",
  pos: "adjective",
  hsd: [
    "{{word:you3}} {{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}} {{word:yao4}} {{word:zuo4}}",
  ],
  tts: ["有很多东西要做"],
  literal: "have a lot to do",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:wo3}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}} {{word:yao4}} {{word:zuo4}}.",
      hanzi: "今天我有很多东西要做。",
      en: "I'm busy today.",
      ru: "Сегодня я занят.",
    },
    {
      pinyin: "{{Word:ba4ba}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}} {{word:yao4}} {{word:zuo4}}.",
      hanzi: "爸爸有很多东西要做。",
      en: "Dad is busy.",
      ru: "Папа занят.",
    },
  ],
});
