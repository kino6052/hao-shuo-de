import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1323,
  phase: 3,
  zh: "左右",
  py: "zuǒyòu",
  en: "left and right; about",
  ru: "слева и справа; примерно",
  pos: "noun",
  hsd: [
    "{{word:zuo3}}-{{word:bian1}} {{word:he2}} {{word:you4}}-{{word:bian1}}",
    "{{word:ke3}}-{{word:neng2}} X",
  ],
  tts: ["左边和右边", "可能X"],
  literal: "left and right / maybe X",
  fit: "plain",
  topics: ["all-and-some"],
  isA: ["amount-word"],
  examples: [
    {
      pinyin: "{{Word:zuo3}}-{{word:bian1}} {{word:he2}} {{word:you4}}-{{word:bian1}} {{word:dou1}} {{word:you3}} {{word:ren2}}.",
      hanzi: "左边和右边都有人。",
      en: "There are people on the left and the right.",
      ru: "Слева и справа есть люди.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ke3}}-{{word:neng2}} {{word:san1}}-{{word:shi2}}.",
      hanzi: "他可能三十。",
      en: "He is about thirty.",
      ru: "Ему около тридцати.",
    },
  ],
});
