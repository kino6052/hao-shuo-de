import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 284,
  phase: 1,
  zh: "结束",
  py: "jiéshù",
  en: "end",
  ru: "заканчиваться",
  pos: "verb",
  hsd: ["{{word:wan2}}"],
  tts: ["完"],
  fit: "word",
  note: "wán le: it's over.",
  examples: [
    {
      pinyin: "{{Word:gong1}}-{{word:zuo4}} {{word:wan2}} {{word:le}}.",
      hanzi: "工作完了。",
      en: "Work is over.",
      ru: "Работа закончилась.",
    },
    {
      pinyin: "{{Word:xue2}}-{{word:xiao4}} {{word:wan2}} {{word:le}}, {{word:hai2}}-{{word:zi}}-{{word:men}} {{word:hui2}} {{word:jia1}}.",
      hanzi: "学校完了，孩子们回家。",
      en: "School is over and the children go home.",
      ru: "Уроки закончились, дети идут домой.",
    },
  ],
});
