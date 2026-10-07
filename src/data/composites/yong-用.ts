import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 66,
  phase: 1,
  zh: "用",
  py: "yòng",
  en: "use",
  ru: "использовать",
  pos: "verb",
  hsd: ["{{word:yong4}}"],
  tts: ["用"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:hui4}} {{word:yong4}} {{word:zhe4}}-{{light:ge4}} {{word:ma}}?",
      hanzi: "你会用这个吗？",
      en: "Do you know how to use this?",
      ru: "Ты умеешь этим пользоваться?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:yong4}} {{word:shou3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "他用手吃饭。",
      en: "He eats with his hands.",
      ru: "Он ест руками.",
    },
  ],
});
