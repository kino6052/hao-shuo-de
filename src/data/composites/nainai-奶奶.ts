import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 558,
  phase: 2,
  zh: "奶奶",
  py: "nǎinai",
  en: "grandmother",
  ru: "бабушка",
  pos: "noun",
  hsd: ["{{word:ba4ba}}-{{word:de}} {{word:ma1ma}}"],
  tts: ["爸爸的妈妈"],
  literal: "dad's mom",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ba4ba}}-{{word:de}} {{word:ma1ma}} {{word:ai4}} {{word:wo3}}.",
      hanzi: "爸爸的妈妈爱我。",
      en: "My grandma loves me.",
      ru: "Моя бабушка меня любит.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ba4ba}}-{{word:de}} {{word:ma1ma}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "我和爸爸的妈妈一起吃饭。",
      en: "I eat with my grandma.",
      ru: "Я ем вместе с бабушкой.",
    },
  ],
});
