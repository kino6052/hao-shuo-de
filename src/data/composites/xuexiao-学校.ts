import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 119,
  phase: 1,
  zh: "学校",
  py: "xuéxiào",
  en: "school",
  ru: "школа",
  pos: "noun",
  hsd: ["{{word:xue2}}-{{word:xiao4}}", "{{word:xue2}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["学校", "学的地方"],
  literal: "learning place",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:xue2}}-{{word:xiao4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "我的学校很大。",
      en: "My school is big.",
      ru: "Моя школа большая.",
    },
    {
      pinyin: "{{Word:hai2}}-{{word:zi}}-{{word:men}} {{word:zai4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "孩子们在学校。",
      en: "The children are at school.",
      ru: "Дети в школе.",
    },
  ],
});
