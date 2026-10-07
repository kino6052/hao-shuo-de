import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 337,
  phase: 1,
  zh: "高中",
  py: "gāozhōng",
  en: "high school",
  ru: "старшая школа",
  pos: "noun",
  hsd: [
    "{{word:gao1}}-{{word:zhong1}}",
    "{{word:da4}}-{{word:xue2}}-{{word:qian2}}-{{word:de}} {{word:xue2}}-{{word:xiao4}}",
  ],
  tts: ["高中", "大学前的学校"],
  literal: "high middle / the school before university",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:gao1}}-{{word:zhong1}} {{word:xue2}}.",
      hanzi: "他在高中学。",
      en: "He's in high school.",
      ru: "Он учится в старшей школе.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:gao1}}-{{word:zhong1}} {{word:hen3}} {{word:yuan3}}.",
      hanzi: "我的高中很远。",
      en: "My high school is far away.",
      ru: "Моя школа далеко.",
    },
  ],
});
