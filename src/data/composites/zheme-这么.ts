import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 213,
  phase: 1,
  zh: "这么",
  py: "zhème",
  en: "so, like this",
  ru: "так",
  pos: "pronoun",
  hsd: ["{{word:zhe4}}-{{word:yang4}}", "{{word:zhen1}}"],
  tts: ["这样", "真"],
  literal: "like this / really",
  fit: "natural",
  note: "zhè-yàng zuò: do it like this. zhēn dà: so big.",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zhe4}}-{{word:yang4}} {{word:zuo4}}.",
      hanzi: "你这样做。",
      en: "Do it like this.",
      ru: "Делай вот так.",
    },
    {
      pinyin: "{{Word:bie2}} {{word:zhe4}}-{{word:yang4}} {{word:shuo1}}.",
      hanzi: "别这样说。",
      en: "Don't say it like that.",
      ru: "Не говори так.",
    },
  ],
});
