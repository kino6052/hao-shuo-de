import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 895,
  phase: 2,
  zh: "赢",
  py: "yíng",
  en: "win",
  ru: "выиграть",
  pos: "verb",
  hsd: ["{{word:bi3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:hao3}}"],
  tts: ["比别的人好"],
  literal: "do better than the others",
  fit: "plain",
  topics: ["winning-losing-and-scores"],
  isA: ["starting-and-stopping"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bi3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:hao3}}.",
      hanzi: "我比别的人好。",
      en: "I win.",
      ru: "Я выигрываю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bi3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:hao3}}.",
      hanzi: "他比别的人好。",
      en: "He wins.",
      ru: "Он выигрывает.",
    },
  ],
});
