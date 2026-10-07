import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 340,
  phase: 1,
  zh: "上学",
  py: "shàngxué",
  en: "go to school",
  ru: "ходить в школу",
  pos: "verb",
  hsd: ["{{word:shang4}}-{{word:xue2}}", "{{word:qu4}} {{word:xue2}}-{{word:xiao4}}"],
  tts: ["上学", "去学校"],
  literal: "go up to learn / go to school",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:hai2}}-{{word:zi}}-{{word:men}} {{word:qi1}} {{word:dian3}} {{word:qu4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "孩子们七点去学校。",
      en: "The kids go to school at seven.",
      ru: "Дети идут в школу в семь.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shang4}}-{{word:xue2}} {{word:le}} {{word:ma}}?",
      hanzi: "他上学了吗？",
      en: "Has he started school?",
      ru: "Он уже ходит в школу?",
    },
  ],
});
