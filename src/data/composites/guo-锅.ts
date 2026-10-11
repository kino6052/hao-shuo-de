import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 960,
  phase: 2,
  zh: "锅",
  py: "guō",
  en: "pot",
  ru: "кастрюля",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:fan4}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["做饭用的东西"],
  literal: "what you cook in",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:zuo4}}-{{word:fan4}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我有做饭用的东西。",
      en: "I have a pot.",
      ru: "У меня есть кастрюля.",
    },
    {
      pinyin: "{{Word:zuo4}}-{{word:fan4}}-{{word:yong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "做饭用的东西在家。",
      en: "The pot is at home.",
      ru: "Кастрюля дома.",
    },
  ],
});
