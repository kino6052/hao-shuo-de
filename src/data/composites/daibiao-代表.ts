import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 606,
  phase: 2,
  zh: "代表",
  py: "dàibiǎo",
  en: "represent",
  ru: "представлять",
  pos: "noun",
  hsd: [
    "{{word:bang1}} X {{word:shuo1}} {{word:hua4}}-{{word:de}} {{word:ren2}}",
    "{{word:bang1}} X {{word:shuo1}}",
  ],
  tts: ["帮X说话的人", "帮X说"],
  literal: "a person who speaks for X / speak for X",
  fit: "plain",
  topics: ["groups-and-organisations"],
  isA: ["social-role"],
  examples: [
    {
      pinyin: "{{Word:bang1}} {{word:wo3}}-{{word:men}} {{word:shuo1}} {{word:hua4}}-{{word:de}} {{word:ren2}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "帮我们说话的人在这里。",
      en: "The person who speaks for us is here.",
      ru: "Здесь тот, кто говорит за нас.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bang1}} {{word:wo3}}-{{word:men}} {{word:shuo1}}.",
      hanzi: "他帮我们说。",
      en: "He speaks for us.",
      ru: "Он говорит за нас.",
    },
  ],
  proposed: true,
});
