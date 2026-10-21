import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 677,
  phase: 2,
  zh: "消息",
  py: "xiāoxi",
  en: "news, message",
  ru: "новость",
  pos: "noun",
  hsd: [
    "{{word:xin1#new}}-\"wén\"",
    "{{word:xian4}}-{{word:zai4}}-{{word:fa1}}-{{word:sheng1}}-{{word:de}}",
  ],
  tts: ["新闻", "现在发生的"],
  literal: "what is happening now",
  fit: "plain",
  topics: ["news-and-press"],
  isA: ["idea"],
  note: "Same as 新闻.",
  examples: [
    {
      pinyin: "{{Word:xian4}}-{{word:zai4}}-{{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "现在发生的很好。",
      en: "The news is good.",
      ru: "Новости хорошие.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zhi1dao4}} {{word:xian4}}-{{word:zai4}}-{{word:fa1}}-{{word:sheng1}}-{{word:de}} {{word:ma}}?",
      hanzi: "你知道现在发生的吗？",
      en: "Do you know the news?",
      ru: "Ты знаешь новости?",
    },
  ],
});
