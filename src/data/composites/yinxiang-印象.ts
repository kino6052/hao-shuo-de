import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1274,
  phase: 3,
  zh: "印象",
  py: "yìnxiàng",
  en: "impression",
  ru: "впечатление",
  pos: "noun",
  hsd: [
    "{{word:xin1}}-{{word:li3}} {{word:liu2}}-{{word:xia4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["心里留下的东西"],
  literal: "what stays in your heart",
  fit: "plain",
  topics: ["mind-and-imagination"],
  isA: ["idea"],
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:wo3}} {{word:xin1}}-{{word:li3}} {{word:liu2}}-{{word:xia4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "你在我心里留下的东西很好。",
      en: "The impression you left on me is good.",
      ru: "Ты произвёл на меня хорошее впечатление.",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:ren2}} {{word:zai4}} {{word:wo3}} {{word:xin1}}-{{word:li3}} {{word:liu2}}-{{word:xia4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个人在我心里留下的东西很大。",
      en: "This person made a big impression on me.",
      ru: "Этот человек произвёл на меня сильное впечатление.",
    },
  ],
});
