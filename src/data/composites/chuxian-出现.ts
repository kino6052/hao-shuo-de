import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 295,
  phase: 1,
  zh: "出现",
  py: "chūxiàn",
  en: "appear",
  ru: "появляться",
  pos: "verb",
  hsd: ["{{word:chu1}}-{{word:xian4}}", "{{word:you3}} {{word:le}}"],
  tts: ["出现", "有了"],
  literal: "now there is",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:chu1}}-{{word:xian4}} {{word:le}}.",
      hanzi: "他出现了。",
      en: "He showed up.",
      ru: "Он появился.",
    },
    {
      pinyin: "{{Word:tian1}}-{{word:shang4}} {{word:chu1}}-{{word:xian4}} {{word:le}} {{word:yi1}}-{{light:ge4}} {{word:fei1}}-{{word:ji1}}.",
      hanzi: "天上出现了一个飞机。",
      en: "A plane appeared in the sky.",
      ru: "В небе появился самолёт.",
    },
  ],
});
