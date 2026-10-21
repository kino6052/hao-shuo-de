import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1036,
  phase: 3,
  zh: "修改",
  py: "xiūgǎi",
  en: "modify",
  ru: "изменять, исправлять",
  pos: "verb",
  hsd: ["{{word:ba3}} X {{word:bian4}} {{word:yi1}}-{{word:dian3}}"],
  tts: ["把X变一点"],
  literal: "change X a little",
  fit: "plain",
  topics: ["authors-and-publishing"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:zhe4}}-{{light:ge4}} {{word:bian4}} {{word:yi1}}-{{word:dian3}}.",
      hanzi: "我把这个变一点。",
      en: "I change this a little.",
      ru: "Я немного меняю это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:zi4}} {{word:bian4}} {{word:yi1}}-{{word:dian3}}.",
      hanzi: "他把字变一点。",
      en: "He changes the words a little.",
      ru: "Он немного меняет текст.",
    },
  ],
});
