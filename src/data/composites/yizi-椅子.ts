import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 525,
  phase: 2,
  zh: "椅子",
  py: "yǐzi",
  en: "chair",
  ru: "стул",
  pos: "noun",
  hsd: [
    "{{word:rang4}}-{{word:ren2}}-{{word:zuo4}}-{{word:xia4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["让人坐下的东西"],
  literal: "a thing that lets a person sit down",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:rang4}}-{{word:ren2}}-{{word:zuo4}}-{{word:xia4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "让人坐下的东西是红色的。",
      en: "The chair is red.",
      ru: "Стул красный.",
    },
    {
      pinyin: "{{Word:rang4}}-{{word:ren2}}-{{word:zuo4}}-{{word:xia4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:fang2}}-{{word:jian1}}-{{word:li3}}.",
      hanzi: "让人坐下的东西在房间里。",
      en: "The chair is in the room.",
      ru: "Стул в комнате.",
    },
  ],
});
