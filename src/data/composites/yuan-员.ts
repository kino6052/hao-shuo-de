import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 626,
  phase: 2,
  zh: "员",
  py: "yuán",
  en: "member, worker (suffix)",
  ru: "работник",
  pos: "suffix",
  hsd: ["X-{{word:de}} {{word:ren2}}"],
  tts: ["X的人"],
  literal: "X's person",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:kai1}}-{{word:che1}}-{{word:de}} {{word:ren2}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "开车的人在家。",
      en: "The driver is at home.",
      ru: "Водитель дома.",
    },
    {
      pinyin: "{{Word:mai3}} {{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "买东西的人很多。",
      en: "There are many shoppers.",
      ru: "Покупателей много.",
    },
  ],
});
