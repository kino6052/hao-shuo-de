import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1509,
  phase: 3,
  zh: "旅行",
  py: "lǚxíng",
  en: "travel",
  ru: "путешествовать",
  pos: "verb",
  hsd: ["{{word:qu4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:wan2r}}"],
  tts: ["去别的地方玩儿"],
  literal: "go to another place to play",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:qu4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:wan2r}}.",
      hanzi: "我去别的地方玩儿。",
      en: "I travel.",
      ru: "Я путешествую.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:wan2r}}.",
      hanzi: "我们去别的地方玩儿。",
      en: "We travel.",
      ru: "Мы путешествуем.",
    },
  ],
});
