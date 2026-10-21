import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 640,
  phase: 2,
  zh: "小学",
  py: "xiǎoxué",
  en: "primary school",
  ru: "начальная школа",
  pos: "noun",
  hsd: [
    "{{word:xiao3}}-{{word:xue2}}",
    "{{word:xiao3}}-{{word:de}} {{word:ren2}} {{word:xue2}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
  ],
  tts: ["小学", "小的人学的地方"],
  literal: "small learning / where small people learn",
  fit: "natural",
  kinds: ["built", "built"],
  topics: ["classroom"],
  isA: ["building"],
  examples: [
    {
      pinyin: "{{Word:xiao3}}-{{word:hai2}}-{{word:zi}} {{word:zai4}} {{word:xiao3}}-{{word:xue2}}.",
      hanzi: "小孩子在小学。",
      en: "The child is in primary school.",
      ru: "Ребёнок учится в начальной школе.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:xiao3}}-{{word:xue2}} {{word:xue2}} {{word:zi4}}.",
      hanzi: "他在小学学字。",
      en: "He learns characters in primary school.",
      ru: "Он учит иероглифы в начальной школе.",
    },
  ],
});
