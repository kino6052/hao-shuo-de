import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1439,
  phase: 3,
  zh: "随",
  py: "suí",
  en: "follow",
  ru: "следовать",
  pos: "verb",
  hsd: ["{{word:zai4}} X {{word:hou4}}-{{word:mian4}} {{word:qu4}}"],
  tts: ["在X后面去"],
  literal: "go behind X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:ta1}} {{word:hou4}}-{{word:mian4}} {{word:qu4}}.",
      hanzi: "我在他后面去。",
      en: "I follow him.",
      ru: "Я иду за ним.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:ba4ba}} {{word:hou4}}-{{word:mian4}} {{word:qu4}}.",
      hanzi: "他在爸爸后面去。",
      en: "He follows his dad.",
      ru: "Он идёт за папой.",
    },
  ],
});
