import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1052,
  phase: 3,
  zh: "参与",
  py: "cānyù",
  en: "participate",
  ru: "участвовать",
  pos: "verb",
  hsd: ["{{word:he2}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:zuo4}}"],
  tts: ["和人一起做"],
  literal: "do it together with people",
  fit: "plain",
  topics: ["helping-and-sharing"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:zuo4}}.",
      hanzi: "我和人一起做。",
      en: "I take part with others.",
      ru: "Я участвую вместе с другими.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:he2}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:zuo4}}.",
      hanzi: "他和人一起做。",
      en: "He takes part with others.",
      ru: "Он участвует вместе с другими.",
    },
  ],
});
