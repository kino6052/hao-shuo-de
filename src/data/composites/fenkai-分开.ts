import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1264,
  phase: 3,
  zh: "分开",
  py: "fēnkāi",
  en: "separate",
  ru: "разделять(ся)",
  pos: "verb",
  hsd: ["{{word:fen1}}-{{word:kai1}}", "{{word:bu4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}"],
  tts: ["分开", "不在一起"],
  literal: "not together anymore",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:fen1}}-{{word:kai1}} {{word:le}}.",
      hanzi: "我们分开了。",
      en: "We have separated.",
      ru: "Мы расстались.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:fen1}}-{{word:kai1}} {{word:na4}}-{{word:xie1}} {{word:shu1}}.",
      hanzi: "他分开那些书。",
      en: "He separates those books.",
      ru: "Он разделяет те книги.",
    },
  ],
});
