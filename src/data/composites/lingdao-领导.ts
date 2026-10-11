import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 723,
  phase: 2,
  zh: "领导",
  py: "lǐngdǎo",
  en: "lead; leader",
  ru: "руководить; руководитель",
  pos: "verb",
  hsd: ["{{word:zuo4}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:ren2}}"],
  tts: ["做决定的人"],
  literal: "a person who makes the decisions",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:zuo4}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是做决定的人。",
      en: "He is the leader.",
      ru: "Он руководитель.",
    },
    {
      pinyin: "{{Word:zuo4}} {{word:jue2}}-{{word:ding4}}-{{word:de}} {{word:ren2}} {{word:shi4}} {{word:wo3}}.",
      hanzi: "做决定的人是我。",
      en: "I am the leader.",
      ru: "Руководитель — я.",
    },
  ],
});
