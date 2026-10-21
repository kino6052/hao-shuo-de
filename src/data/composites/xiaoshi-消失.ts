import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1369,
  phase: 3,
  zh: "消失",
  py: "xiāoshī",
  en: "disappear",
  ru: "исчезать",
  pos: "verb",
  hsd: ["{{word:kan4}}-{{word:bu4}}-{{word:dao4}} {{word:le}}"],
  tts: ["看不到了"],
  literal: "can't be seen anymore",
  fit: "plain",
  topics: ["decreasing-and-breaking-down"],
  isA: ["happening"],
  examples: [
    {
      pinyin: "{{Word:che1}} {{word:kan4}}-{{word:bu4}}-{{word:dao4}} {{word:le}}.",
      hanzi: "车看不到了。",
      en: "The car has vanished.",
      ru: "Машина исчезла.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:bu4}}-{{word:dao4}} {{word:le}}.",
      hanzi: "我看不到了。",
      en: "It has disappeared.",
      ru: "Оно исчезло.",
    },
  ],
});
