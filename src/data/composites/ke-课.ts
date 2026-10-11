import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 469,
  phase: 1,
  zh: "课",
  py: "kè",
  en: "lesson, class",
  ru: "урок",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:de}} {{word:bu4}}-{{light:fen1}}"],
  tts: ["学的部分"],
  literal: "learning part",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}}-{{word:de}} {{word:xue2}}-{{word:de}} {{word:bu4}}-{{light:fen1}} {{word:hen3}} {{word:nan2}}.",
      hanzi: "今天的学的部分很难。",
      en: "Today's lesson is hard.",
      ru: "Сегодняшний урок трудный.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:you3}} {{word:san1}}-{{light:ge4}} {{word:xue2}}-{{word:de}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "我们有三个学的部分。",
      en: "We have three lessons.",
      ru: "У нас три урока.",
    },
  ],
});
