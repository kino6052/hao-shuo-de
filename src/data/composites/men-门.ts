import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 220,
  phase: 1,
  zh: "门",
  py: "mén",
  en: "door",
  ru: "дверь",
  pos: "noun",
  hsd: ["{{word:men2}}"],
  tts: ["门"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:men2}} {{word:kai1}} {{word:le}}.",
      hanzi: "门开了。",
      en: "The door opened.",
      ru: "Дверь открылась.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:men2}} {{word:guan1}} {{word:le}}.",
      hanzi: "把门关了。",
      en: "Close the door.",
      ru: "Закрой дверь.",
    },
  ],
});
