import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1427,
  phase: 3,
  zh: "选手",
  py: "xuǎnshǒu",
  en: "contestant",
  ru: "участник соревнования",
  pos: "noun",
  hsd: ["{{word:bi3}}-{{word:de}} {{word:ren2}}"],
  tts: ["比的人"],
  literal: "the one competing",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:bi3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是比的人。",
      en: "He is a contestant.",
      ru: "Он участник.",
    },
    {
      pinyin: "{{Word:bi3}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "比的人很多。",
      en: "There are many contestants.",
      ru: "Участников много.",
    },
  ],
});
