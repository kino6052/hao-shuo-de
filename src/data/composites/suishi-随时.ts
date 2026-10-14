import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1440,
  phase: 3,
  zh: "随时",
  py: "suíshí",
  en: "at any time",
  ru: "в любое время",
  pos: "adverb",
  hsd: ["{{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} …"],
  tts: ["什么时间都"],
  literal: "at any time",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:neng2}} {{word:lai2}}.",
      hanzi: "你什么时间都能来。",
      en: "You can come at any time.",
      ru: "Ты можешь прийти в любое время.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shen2me}} {{word:shi2}}-{{word:jian1}} {{word:dou1}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "我什么时间都在家。",
      en: "I am home at any time.",
      ru: "Я дома в любое время.",
    },
  ],
});
