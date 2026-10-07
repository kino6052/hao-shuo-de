import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 362,
  phase: 1,
  zh: "前面",
  py: "qiánmiàn",
  en: "front",
  ru: "впереди",
  pos: "noun",
  hsd: ["{{word:qian2}}-{{word:mian4}}"],
  tts: ["前面"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:qian2}}-{{word:mian4}} {{word:you3}} {{word:yi1}}-{{light:ge4}} {{word:xue2}}-{{word:xiao4}}.",
      hanzi: "前面有一个学校。",
      en: "There's a school ahead.",
      ru: "Впереди школа.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zou3}} {{word:qian2}}-{{word:mian4}}.",
      hanzi: "你走前面。",
      en: "You go in front.",
      ru: "Иди впереди.",
    },
  ],
});
