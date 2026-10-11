import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 514,
  phase: 2,
  zh: "大人",
  py: "dàren",
  en: "adult",
  ru: "взрослый",
  pos: "noun",
  hsd: ["{{word:da4}}-{{word:ren2}}"],
  tts: ["大人"],
  literal: "big person",
  fit: "natural",
  transparent: true,
  note: "Real Mandarin: 大人.",
  examples: [
    {
      pinyin: "{{Word:da4}}-{{word:ren2}} {{word:he2}} {{word:xiao3}}-{{word:hai2}}-{{word:zi}} {{word:dou1}} {{word:qu4}}.",
      hanzi: "大人和小孩子都去。",
      en: "Adults and children are all going.",
      ru: "Идут и взрослые, и дети.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:shi4}} {{word:da4}}-{{word:ren2}}-{{word:de}} {{word:yi1fu}}.",
      hanzi: "这个是大人的衣服。",
      en: "This is adult clothing.",
      ru: "Это одежда для взрослых.",
    },
  ],
});
