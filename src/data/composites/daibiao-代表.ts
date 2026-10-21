import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 606,
  phase: 2,
  zh: "代表",
  py: "dàibiǎo",
  en: "represent",
  ru: "представлять",
  pos: "noun",
  hsd: ["{{word:ti4}} X {{word:shuo1}}-{{word:de}} {{word:ren2}}", "{{word:ti4}} X …"],
  tts: ["替X说的人", "替X…"],
  literal: "a person who speaks instead of X / stands in for X",
  fit: "plain",
  topics: ["groups-and-organisations"],
  isA: ["social-role"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:ti4}} {{word:wo3}}-{{word:men}} {{word:shuo1}}-{{word:de}} {{word:ren2}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "他替我们说的人在这里。",
      en: "The person who speaks for us is here.",
      ru: "Здесь тот, кто говорит за нас.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ti4}} {{word:wo3}}-{{word:men}} {{word:shuo1}}.",
      hanzi: "他替我们说。",
      en: "He speaks for us.",
      ru: "Он говорит за нас.",
    },
  ],
});
