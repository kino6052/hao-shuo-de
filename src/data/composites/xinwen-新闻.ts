import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 280,
  phase: 1,
  zh: "新闻",
  py: "xīnwén",
  en: "news",
  ru: "новости",
  pos: "noun",
  hsd: ["{{word:xin1#new}}-{{word:de}} {{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["新的知道的东西"],
  literal: "new things to know",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:kan4}} {{word:le}} {{word:jin1}}-{{word:tian1}}-{{word:de}} {{word:xin1#new}}-{{word:de}} {{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:ma}}?",
      hanzi: "你看了今天的新的知道的东西吗？",
      en: "Did you see today's news?",
      ru: "Ты видел сегодняшние новости?",
    },
    {
      pinyin: "{{Word:you3}} {{word:shen2me}} {{word:xin1#new}}-{{word:de}} {{word:zhi1dao4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}?",
      hanzi: "有什么新的知道的东西？",
      en: "What's the news?",
      ru: "Какие новости?",
    },
  ],
});
