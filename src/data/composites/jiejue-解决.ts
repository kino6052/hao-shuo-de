import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 595,
  phase: 2,
  zh: "解决",
  py: "jiějué",
  en: "solve",
  ru: "решить",
  pos: "verb",
  hsd: ["{{word:ba3}} {{word:wen4}}-{{word:ti2}} {{word:jiu4}} {{word:mei2}} {{word:le}}"],
  tts: ["把问题就没了"],
  literal: "the problem is gone",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:ba3}} {{word:wen4}}-{{word:ti2}} {{word:jiu4}} {{word:mei2}} {{word:le}}.",
      hanzi: "我们把问题就没了。",
      en: "We solved the problem.",
      ru: "Мы решили проблему.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:bang1}} {{word:wo3}}, {{word:ba3}} {{word:wen4}}-{{word:ti2}} {{word:jiu4}} {{word:mei2}} {{word:le}}.",
      hanzi: "你帮我，把问题就没了。",
      en: "You helped me, and the problem is solved.",
      ru: "Ты помог мне, и проблема решена.",
    },
  ],
});
