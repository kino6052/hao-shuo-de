import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 839,
  phase: 2,
  zh: "差不多",
  py: "chàbuduō",
  en: "almost; about the same",
  ru: "почти; примерно",
  pos: "adjective",
  hsd: ["{{word:da4}} {{word:bu4}}-{{light:fen1}} {{word:yi1}}-{{word:yang4}}"],
  tts: ["大部分一样"],
  literal: "mostly the same",
  fit: "plain",
  topics: ["like-and-similar"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:da4}} {{word:bu4}}-{{light:fen1}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "这个大部分一样。",
      en: "This is almost the same.",
      ru: "Это почти то же самое.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:da4}} {{word:bu4}}-{{light:fen1}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "他们大部分一样。",
      en: "They are about the same.",
      ru: "Они примерно одинаковые.",
    },
  ],
});
