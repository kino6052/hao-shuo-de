import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 940,
  phase: 2,
  zh: "抓",
  py: "zhuā",
  en: "grab",
  ru: "хватать",
  pos: "verb",
  hsd: ["{{word:yong4}} {{word:shou3}} {{word:na2}}"],
  tts: ["用手拿"],
  literal: "take with your hand",
  fit: "plain",
  topics: ["pushing-pulling-and-pressing"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:shou3}} {{word:na2}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "我用手拿动物。",
      en: "I grab the animal.",
      ru: "Я хватаю животное.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:shou3}} {{word:na2}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "他用手拿这个。",
      en: "He grabs this.",
      ru: "Он хватает это.",
    },
  ],
});
