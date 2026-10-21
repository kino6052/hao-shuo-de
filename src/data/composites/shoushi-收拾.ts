import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1507,
  phase: 3,
  zh: "收拾",
  py: "shōushi",
  en: "tidy up",
  ru: "убирать",
  pos: "verb",
  hsd: ["{{word:ba3}} X {{word:gan1jing4}}", "{{word:ba3}} X {{word:bu4}} {{word:luan4}}"],
  tts: ["把X干净", "把X不乱"],
  literal: "make X clean / make X not messy",
  fit: "plain",
  topics: ["cleaning"],
  isA: ["cleaning-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba3}} {{word:fang2}}-{{word:jian1}} {{word:gan1jing4}}.",
      hanzi: "我把房间干净。",
      en: "I tidy up the room.",
      ru: "Я убираю комнату.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:ba3}} {{word:yi1fu}} {{word:bu4}} {{word:luan4}}.",
      hanzi: "他把衣服不乱。",
      en: "He tidies up the clothes.",
      ru: "Он приводит одежду в порядок.",
    },
  ],
});
