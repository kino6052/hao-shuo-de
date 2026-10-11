import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 674,
  phase: 2,
  zh: "母亲",
  py: "mǔqīn",
  en: "mother",
  ru: "мать",
  pos: "noun",
  hsd: ["{{word:ma1ma}}"],
  tts: ["妈妈"],
  literal: "mom",
  fit: "plain",
  note: "Same as 妈妈.",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:ma1ma}} {{word:ai4}} {{word:wo3}}.",
      hanzi: "我的妈妈爱我。",
      en: "My mother loves me.",
      ru: "Моя мать любит меня.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ma1ma}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "我和妈妈一起吃饭。",
      en: "I eat with my mother.",
      ru: "Я ем вместе с матерью.",
    },
  ],
});
