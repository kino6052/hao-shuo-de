import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1087,
  phase: 3,
  zh: "引起",
  py: "yǐnqǐ",
  en: "cause, lead to",
  ru: "вызывать",
  pos: "verb",
  hsd: ["{{word:rang4}} X {{word:fa1}}-{{word:sheng1}}"],
  tts: ["让X发生"],
  literal: "let X happen",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:rang4}} {{word:zhe4}} {{word:fa1}}-{{word:sheng1}}.",
      hanzi: "我让这发生。",
      en: "I cause this.",
      ru: "Я вызываю это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:rang4}} {{word:zhe4}}-{{light:ge4}} {{word:fa1}}-{{word:sheng1}}.",
      hanzi: "他让这个发生。",
      en: "He causes this.",
      ru: "Он вызывает это.",
    },
  ],
});
