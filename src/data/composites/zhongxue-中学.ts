import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 599,
  phase: 2,
  zh: "中学",
  py: "zhōngxué",
  en: "middle school",
  ru: "средняя школа",
  pos: "noun",
  hsd: [
    "{{word:zhong1}}-{{word:xue2}}",
    "{{word:bu4}} {{word:da4}} {{word:bu4}} {{word:xiao3}}-{{word:de}} {{word:ren2}} {{word:xue2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["中学", "不大不小的人学的地方"],
  literal: "middle learning / where not-big, not-small people learn",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:zai4}} {{word:zhong1}}-{{word:xue2}} {{word:xue2}} {{word:zi4}}.",
      hanzi: "他们在中学学字。",
      en: "They learn characters in middle school.",
      ru: "Они учат иероглифы в средней школе.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jia1}} {{word:zai4}} {{word:zhong1}}-{{word:xue2}} {{word:pang2bian1}}.",
      hanzi: "我的家在中学旁边。",
      en: "My home is next to the middle school.",
      ru: "Мой дом рядом со средней школой.",
    },
  ],
});
