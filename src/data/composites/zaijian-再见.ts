import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 254,
  phase: 1,
  zh: "再见",
  py: "zàijiàn",
  en: "goodbye",
  ru: "до свидания",
  pos: "verb",
  hsd: ["{{word:zai4}}-{{word:jian4}}"],
  tts: ["再见"],
  fit: "natural",
  transparent: true,
  examples: [
    { pinyin: "{{Word:zai4}}-{{word:jian4}}!", hanzi: "再见！", en: "Goodbye!", ru: "До свидания!" },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:zai4}}-{{word:jian4}}!",
      hanzi: "明天再见！",
      en: "See you again tomorrow!",
      ru: "Увидимся завтра!",
    },
  ],
});
