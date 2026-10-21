import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 681,
  phase: 2,
  zh: "用户",
  py: "yònghù",
  en: "user",
  ru: "пользователь",
  pos: "noun",
  hsd: ["{{word:yong4}}-{{word:de}} {{word:ren2}}"],
  tts: ["用的人"],
  literal: "the one who uses it",
  fit: "plain",
  topics: ["phone-and-computer"],
  isA: ["social-role"],
  examples: [
    {
      pinyin: "{{Word:yong4}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:duo1}}.",
      hanzi: "用的人很多。",
      en: "There are many users.",
      ru: "Пользователей много.",
    },
    {
      pinyin: "{{Word:yong4}}-{{word:de}} {{word:ren2}} {{word:ai4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "用的人爱这个。",
      en: "The users love this.",
      ru: "Пользователи любят это.",
    },
  ],
});
