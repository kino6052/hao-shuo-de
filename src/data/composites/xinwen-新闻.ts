import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 280,
  phase: 1,
  zh: "新闻",
  py: "xīnwén",
  en: "news",
  ru: "новости",
  pos: "noun",
  hsd: ["{{word:xin1#new}}-\"wén\""],
  tts: ["新闻"],
  literal: "new + wén",
  fit: "name",
  topics: ["news-and-press"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:kan4}} {{word:le}} {{word:jin1}}-{{word:tian1}}-{{word:de}} {{word:xin1#new}}-\"wén\" {{word:ma}}?",
      hanzi: "你看了今天的新闻吗？",
      en: "Did you see today's news?",
      ru: "Ты видел сегодняшние новости?",
    },
    {
      pinyin: "{{Word:you3}} {{word:shen2me}} {{word:xin1#new}}-\"wén\"?",
      hanzi: "有什么新闻？",
      en: "What's the news?",
      ru: "Какие новости?",
    },
  ],
});
