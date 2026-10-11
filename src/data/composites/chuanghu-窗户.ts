import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 448,
  phase: 1,
  zh: "窗户",
  py: "chuānghu",
  en: "window",
  ru: "окно",
  pos: "noun",
  hsd: ["{{word:kan4}}-{{word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kou3}}"],
  tts: ["看外面的口"],
  literal: "the opening you look outside through",
  fit: "word",
  note: "kǒu covers doors and windows.",
  examples: [
    {
      pinyin: "{{Word:ba3}} {{word:kan4}}-{{word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kou3}} {{word:kai1}} {{word:le}}.",
      hanzi: "把看外面的口开了。",
      en: "Open the window.",
      ru: "Открой окно.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zhan4}} {{word:zai4}} {{word:kan4}}-{{word:wai4}}-{{word:mian4}}-{{word:de}} {{word:kou3}} {{word:qian2}}-{{word:mian4}}.",
      hanzi: "他站在看外面的口前面。",
      en: "He's standing at the window.",
      ru: "Он стоит у окна.",
    },
  ],
});
