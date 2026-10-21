import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 7382,
  phase: 4,
  zh: "报刊",
  py: "bàokān",
  en: "newspapers and magazines; the press",
  ru: "газеты и журналы; периодика",
  pos: "noun",
  hsd: [
    "{{word:yi1}}-{{word:ci4}} {{word:you4}} {{word:yi1}}-{{word:ci4}} {{word:chu1}}-{{word:lai2}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
    "{{word:shuo1}}-{{word:xian4}}-{{word:zai4}}-{{word:fa1}}-{{word:sheng1}}-{{word:shen2me}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, {{word:he2}} {{word:yi1}}-{{word:ci4}} {{word:you4}} {{word:yi1}}-{{word:ci4}} {{word:chu1}}-{{word:lai2}}-{{word:de}} {{word:shu1}}",
  ],
  tts: ["一次又一次出来的写的东西", "说现在发生什么的写的东西，和一次又一次出来的书"],
  literal: "written things that come out again and again / written things that say what is happening now, and books that come out again and again",
  fit: "plain",
  topics: ["news-and-press"],
  isA: ["paper-thing"],
  proposed: true,
});
