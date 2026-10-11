import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 979,
  phase: 2,
  zh: "以",
  py: "yǐ",
  en: "with; in order to",
  ru: "с помощью; чтобы",
  pos: "preposition",
  hsd: ["{{word:yi3}}", "{{word:yong4}} X"],
  tts: ["以", "用X"],
  literal: "using X",
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} X {{word:zuo4}}.",
      hanzi: "我用X做。",
      en: "I do it with X.",
      ru: "Я делаю это с помощью X.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} X {{word:xie3}}.",
      hanzi: "他用X写。",
      en: "He writes with X.",
      ru: "Он пишет с помощью X.",
    },
  ],
});
