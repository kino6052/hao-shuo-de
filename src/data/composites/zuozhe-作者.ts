import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1032,
  phase: 3,
  zh: "作者",
  py: "zuòzhě",
  en: "author",
  ru: "автор",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:zhe3}}", "{{word:xie3}}-{{word:de}} {{word:ren2}}"],
  tts: ["作者", "写的人"],
  literal: "the one who writes",
  fit: "natural",
  kinds: ["spelled", "built"],
  examples: [
    {
      pinyin: "{{Word:zuo4}}-{{word:zhe3}} {{word:shi4}} {{word:ta1}}.",
      hanzi: "作者是他。",
      en: "The author is him.",
      ru: "Автор — он.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zhi1dao4}} {{word:zuo4}}-{{word:zhe3}}.",
      hanzi: "我知道作者。",
      en: "I know the author.",
      ru: "Я знаю автора.",
    },
  ],
});
