import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 217,
  phase: 1,
  zh: "那么",
  py: "nàme",
  en: "then; so",
  ru: "тогда; так",
  pos: "pronoun",
  hsd: ["{{word:na4}}", "{{word:na4}}-{{word:yang4}}"],
  tts: ["那", "那样"],
  literal: "well then / like that",
  fit: "natural",
  note: "Nà, …: \"Well then, …\".",
  examples: [
    {
      pinyin: "{{Word:na4}}, {{word:wo3}}-{{word:men}} {{word:zou3}}.",
      hanzi: "那，我们走。",
      en: "Well then, let's go.",
      ru: "Ну тогда пойдём.",
    },
    {
      pinyin: "{{Word:bie2}} {{word:na4}}-{{word:yang4}} {{word:zuo4}}.",
      hanzi: "别那样做。",
      en: "Don't do it like that.",
      ru: "Не делай так.",
    },
  ],
});
