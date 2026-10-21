import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 897,
  phase: 2,
  zh: "踢",
  py: "tī",
  en: "kick",
  ru: "пинать",
  pos: "verb",
  hsd: ["{{word:yong4}} {{word:jiao3}} {{word:da3}}"],
  tts: ["用脚打"],
  literal: "hit with the foot",
  fit: "plain",
  topics: ["ball-sports"],
  isA: ["body-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:jiao3}} {{word:da3}}.",
      hanzi: "我用脚打。",
      en: "I kick.",
      ru: "Я пинаю.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:jiao3}} {{word:da3}} {{word:na4}}-{{light:ge4}}.",
      hanzi: "他用脚打那个。",
      en: "He kicks that.",
      ru: "Он пинает то.",
    },
  ],
});
