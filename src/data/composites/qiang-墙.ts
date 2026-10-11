import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 512,
  phase: 2,
  zh: "墙",
  py: "qiáng",
  en: "wall",
  ru: "стена",
  pos: "noun",
  hsd: ["{{word:jia1}}-{{word:de}} {{word:bian1}}"],
  tts: ["家的边"],
  literal: "the house's side",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:jia1}}-{{word:de}} {{word:bian1}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "家的边很高。",
      en: "The wall is tall.",
      ru: "Стена высокая.",
    },
    {
      pinyin: "{{Word:jia1}}-{{word:de}} {{word:bian1}} {{word:shi4}} {{word:bai2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "家的边是白色的。",
      en: "The wall is white.",
      ru: "Стена белая.",
    },
  ],
});
