import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 88,
  phase: 1,
  zh: "明天",
  py: "míngtiān",
  en: "tomorrow",
  ru: "завтра",
  pos: "noun",
  hsd: ["{{word:ming2}}-{{word:tian1}}", "{{word:xia4}} {{word:yi1}}-ge {{word:ri4}}"],
  tts: ["明天", "下一个日"],
  literal: "bright-day / the next day",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:jian4}}!",
      hanzi: "明天见！",
      en: "See you tomorrow!",
      ru: "До завтра!",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:wo3}} {{word:yao4}} {{word:qu4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "明天我要去学校。",
      en: "Tomorrow I have to go to school.",
      ru: "Завтра мне надо в школу.",
    },
  ],
});
