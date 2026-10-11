import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 834,
  phase: 2,
  zh: "客人",
  py: "kèrén",
  en: "guest",
  ru: "гость",
  pos: "noun",
  hsd: ["{{word:lai2}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}}"],
  tts: ["来家里的人"],
  literal: "someone who comes to your home",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:lai2}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "来家里的人很多。",
      en: "There are many guests.",
      ru: "Гостей много.",
    },
    {
      pinyin: "{{Word:lai2}} {{word:jia1}}-{{word:li3}}-{{word:de}} {{word:ren2}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "来家里的人在这里。",
      en: "The guest is here.",
      ru: "Гость здесь.",
    },
  ],
});
