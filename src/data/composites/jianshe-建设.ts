import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 983,
  phase: 2,
  zh: "建设",
  py: "jiànshè",
  en: "build up",
  ru: "строить",
  pos: "verb",
  hsd: ["{{word:ba3}} X {{word:zuo4}} {{word:qi3}}-{{word:lai2}}"],
  tts: ["把X做起来"],
  literal: "make X come up",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:zhe4}}-{{light:ge4}} {{word:di4}}-{{light:fang1}} {{word:zuo4}} {{word:qi3}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他把这个地方做起来了。",
      en: "He built up this place.",
      ru: "Он отстроил это место.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yao4}} {{word:ba3}} {{word:jia1}} {{word:zuo4}} {{word:qi3}}-{{word:lai2}}.",
      hanzi: "我们要把家做起来。",
      en: "We want to build up our home.",
      ru: "Мы хотим отстроить наш дом.",
    },
  ],
});
