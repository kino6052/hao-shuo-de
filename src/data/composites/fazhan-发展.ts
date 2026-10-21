import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 585,
  phase: 2,
  zh: "发展",
  py: "fāzhǎn",
  en: "develop",
  ru: "развиваться",
  pos: "verb",
  hsd: [
    "{{word:yi1}}-{{word:dian3}} {{word:yi1}}-{{word:dian3}} {{word:bian4}} {{word:hao3}}",
    "{{word:bian4}} {{word:da4}}, {{word:bian4}} {{word:hao3}}",
  ],
  tts: ["一点一点变好", "变大，变好"],
  literal: "get better little by little / get bigger, get better",
  fit: "plain",
  topics: ["changing"],
  isA: ["becoming"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:yi1}}-{{word:dian3}} {{word:yi1}}-{{word:dian3}} {{word:bian4}} {{word:hao3}}.",
      hanzi: "我的家一点一点变好。",
      en: "My home is developing little by little.",
      ru: "Мой дом понемногу развивается.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:guo2}} {{word:yi1}}-{{word:dian3}} {{word:yi1}}-{{word:dian3}} {{word:bian4}} {{word:hao3}}.",
      hanzi: "这个国一点一点变好。",
      en: "This country is developing step by step.",
      ru: "Эта страна развивается шаг за шагом.",
    },
  ],
});
