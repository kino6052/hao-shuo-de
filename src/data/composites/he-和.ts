import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 47,
  phase: 1,
  zh: "和",
  py: "hé",
  en: "and",
  ru: "и",
  pos: "preposition",
  hsd: ["{{word:he2}}"],
  tts: ["和"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:shui3}} {{word:he2}} {{word:fan4}}.",
      hanzi: "我要水和饭。",
      en: "I want water and rice.",
      ru: "Я хочу воды и риса.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ma1ma}} {{word:yi1}}-{{word:qi3}} {{word:qu4}}.",
      hanzi: "我和妈妈一起去。",
      en: "I'm going with mom.",
      ru: "Я иду с мамой.",
    },
  ],
});
