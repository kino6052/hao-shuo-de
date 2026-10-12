import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1350,
  phase: 3,
  zh: "整理",
  py: "zhěnglǐ",
  en: "tidy, sort out",
  ru: "приводить в порядок",
  pos: "verb",
  hsd: ["{{word:zuo4}} {{word:bu4}} {{word:luan4}}"],
  tts: ["做不乱"],
  literal: "make it not messy",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:bu4}} {{word:luan4}}.",
      hanzi: "我做不乱。",
      en: "I tidy up.",
      ru: "Я навожу порядок.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:fang2}}-{{word:jian1}} {{word:zuo4}} {{word:bu4}} {{word:luan4}}.",
      hanzi: "他把房间做不乱。",
      en: "He tidies the room.",
      ru: "Он убирает комнату.",
    },
  ],
});
