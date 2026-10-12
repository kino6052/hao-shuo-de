import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1243,
  phase: 3,
  zh: "以下",
  py: "yǐxià",
  en: "below, less than",
  ru: "ниже, меньше",
  pos: "noun",
  hsd: ["{{word:yi3}}-{{word:xia4}}", "{{word:bi3}} X {{word:shao3}}"],
  tts: ["以下", "比X少"],
  literal: "less than X",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:you3}} {{word:liu4}}-{{light:ge4}} {{word:yi3}}-{{word:xia4}}.",
      hanzi: "有六个以下。",
      en: "There are six or fewer.",
      ru: "Их шесть или меньше.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:you3}} {{word:san1}}-{{light:ge4}} {{word:ren2}} {{word:yi3}}-{{word:xia4}}.",
      hanzi: "我的家有三个人以下。",
      en: "My family has three people or fewer.",
      ru: "В моей семье три человека или меньше.",
    },
  ],
});
