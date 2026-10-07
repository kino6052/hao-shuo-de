import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 101,
  phase: 1,
  zh: "发生",
  py: "fāshēng",
  en: "happen",
  ru: "происходить",
  pos: "verb",
  hsd: ["{{word:fa1}}-{{word:sheng1}}"],
  tts: ["发生"],
  literal: "send out, be born",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:fa1}}-{{word:sheng1}} {{word:le}} {{word:shen2me}}?",
      hanzi: "发生了什么？",
      en: "What happened?",
      ru: "Что случилось?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zai4}} {{word:na3}}-{{word:li3}} {{word:fa1}}-{{word:sheng1}}-{{word:de}}?",
      hanzi: "这个在哪里发生的？",
      en: "Where did this happen?",
      ru: "Где это случилось?",
    },
  ],
});
