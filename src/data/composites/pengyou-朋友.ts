import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 182,
  phase: 1,
  zh: "朋友",
  py: "péngyou",
  en: "friend",
  ru: "друг",
  pos: "noun",
  hsd: ["{{word:hao3}}-{{word:guan1xi}}-{{word:de}} {{word:ren2}}"],
  tts: ["好关系的人"],
  literal: "a person you have good relations with",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}} {{word:hao3}}-{{word:guan1xi}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是我好关系的人。",
      en: "He's my friend.",
      ru: "Он мой друг.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:hao3}}-{{word:guan1xi}}-{{word:de}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "我和好关系的人一起吃饭。",
      en: "I'm eating with friends.",
      ru: "Я ем с друзьями.",
    },
  ],
});
