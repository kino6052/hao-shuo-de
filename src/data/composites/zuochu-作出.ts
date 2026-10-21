import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1028,
  phase: 3,
  zh: "作出",
  py: "zuòchū",
  en: "make, put forward",
  ru: "сделать, выдвинуть",
  pos: "verb",
  hsd: ["{{word:zuo4}}-{{word:chu1}}"],
  tts: ["做出"],
  literal: "make come out",
  fit: "plain",
  topics: ["choosing-and-deciding"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}}-{{word:chu1}} {{word:jue2}}-{{word:ding4}} {{word:le}}.",
      hanzi: "我做出决定了。",
      en: "I've made a decision.",
      ru: "Я принял решение.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zuo4}}-{{word:chu1}} {{word:hao3}} {{word:jue2}}-{{word:ding4}}.",
      hanzi: "他做出好决定。",
      en: "He made a good decision.",
      ru: "Он принял хорошее решение.",
    },
  ],
});
