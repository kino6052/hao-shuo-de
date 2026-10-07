import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 371,
  phase: 1,
  zh: "同学",
  py: "tóngxué",
  en: "classmate",
  ru: "одноклассник",
  pos: "noun",
  hsd: [
    "{{word:tong2}}-{{word:xue2}}",
    "{{word:yi1}}-{{word:qi3}} {{word:xue2}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["同学", "一起学的人"],
  literal: "person who learns with you",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}}-{{word:de}} {{word:tong2}}-{{word:xue2}}.",
      hanzi: "他是我的同学。",
      en: "He's my classmate.",
      ru: "Он мой одноклассник.",
    },
    {
      pinyin: "{{Word:tong2}}-{{word:xue2}}-{{word:men}} {{word:dou1}} {{word:lai2}} {{word:le}}.",
      hanzi: "同学们都来了。",
      en: "All the classmates came.",
      ru: "Пришли все одноклассники.",
    },
  ],
});
