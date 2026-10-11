import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 655,
  phase: 2,
  zh: "报纸",
  py: "bàozhǐ",
  en: "newspaper",
  ru: "газета",
  pos: "noun",
  hsd: [
    "{{word:shuo1}}-{{word:xian4}}-{{word:zai4}}-{{word:fa1}}-{{word:sheng1}}-{{word:shen2me}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["说现在发生什么的写的东西"],
  literal: "a written thing that says what's happening now",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}} {{word:shuo1}}-{{word:xian4}}-{{word:zai4}}-{{word:fa1}}-{{word:sheng1}}-{{word:shen2me}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我看说现在发生什么的写的东西。",
      en: "I read the newspaper.",
      ru: "Я читаю газету.",
    },
    {
      pinyin: "{{Word:ba4ba}} {{word:kan4}} {{word:shuo1}}-{{word:xian4}}-{{word:zai4}}-{{word:fa1}}-{{word:sheng1}}-{{word:shen2me}}-{{word:de}} {{word:xie3}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "爸爸看说现在发生什么的写的东西。",
      en: "Dad reads the newspaper.",
      ru: "Папа читает газету.",
    },
  ],
});
