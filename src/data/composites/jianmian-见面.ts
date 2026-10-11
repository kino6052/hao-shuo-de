import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 542,
  phase: 2,
  zh: "见面",
  py: "jiànmiàn",
  en: "meet",
  ru: "встречаться",
  pos: "verb",
  hsd: ["{{word:jian4}}-{{word:mian4}}", "{{word:kan4}}-{{word:dao4}}"],
  tts: ["见面", "看到"],
  literal: "see",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:ming2}}-{{word:tian1}} {{word:jian4}}-{{word:mian4}}.",
      hanzi: "我们明天见面。",
      en: "We'll meet tomorrow.",
      ru: "Мы встретимся завтра.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:he2}} {{word:ni3}} {{word:jian4}}-{{word:mian4}}.",
      hanzi: "我要和你见面。",
      en: "I want to meet you.",
      ru: "Я хочу с тобой встретиться.",
    },
  ],
});
