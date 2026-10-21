import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1399,
  phase: 3,
  zh: "群",
  py: "qún",
  en: "group, crowd",
  ru: "группа, толпа",
  pos: "classifier",
  hsd: ["{{word:hen3}}-{{word:duo1}} {{word:ren2}}"],
  tts: ["很多人"],
  literal: "many people",
  fit: "plain",
  topics: ["people-together"],
  isA: ["counting-word"],
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:hen3}}-{{word:duo1}} {{word:ren2}}.",
      hanzi: "这里有很多人。",
      en: "There is a crowd here.",
      ru: "Здесь толпа.",
    },
    {
      pinyin: "{{Word:hen3}}-{{word:duo1}} {{word:ren2}} {{word:zai4}} {{word:lu4}}-{{word:shang4}}.",
      hanzi: "很多人在路上。",
      en: "A crowd is on the road.",
      ru: "На дороге толпа.",
    },
  ],
});
