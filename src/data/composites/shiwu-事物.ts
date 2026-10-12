import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1013,
  phase: 3,
  zh: "事物",
  py: "shìwù",
  en: "thing",
  ru: "вещь, предмет",
  pos: "noun",
  hsd: ["{{word:dong1}}-{{light:xi1}}"],
  tts: ["东西"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zhi1dao4}} {{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他知道很多东西。",
      en: "He knows many things.",
      ru: "Он знает много вещей.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:li3}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "这里有很多东西。",
      en: "There are many things here.",
      ru: "Здесь много вещей.",
    },
  ],
});
