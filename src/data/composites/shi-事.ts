import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 28,
  phase: 1,
  zh: "事",
  py: "shì",
  en: "matter, affair",
  ru: "дело",
  pos: "noun",
  hsd: ["{{word:dong1}}-{{light:xi1}}"],
  tts: ["东西"],
  fit: "plain",
  note: "dōng-xi covers it. Mandarin keeps 东西 for objects.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:dong1}}-{{light:xi1}} {{word:yao4}} {{word:zuo4}}.",
      hanzi: "我有东西要做。",
      en: "I have things to do.",
      ru: "У меня есть дела.",
    },
    {
      pinyin: "{{Word:fa1}}-{{word:sheng1}} {{word:le}} {{word:shen2me}} {{word:dong1}}-{{light:xi1}}?",
      hanzi: "发生了什么东西？",
      en: "What happened?",
      ru: "Что случилось?",
    },
  ],
});
