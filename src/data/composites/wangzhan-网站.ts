import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 285,
  phase: 1,
  zh: "网站",
  py: "wǎngzhàn",
  en: "website",
  ru: "сайт",
  pos: "noun",
  hsd: ["{{word:wang3}}-{{word:zhan4}}"],
  tts: ["网站"],
  literal: "net station",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:wang3}}-{{word:zhan4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这个网站很好。",
      en: "This website is good.",
      ru: "Этот сайт хороший.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:wang3}}-{{word:zhan4}}-{{word:shang4}} {{word:kan4}}-{{word:dao4}} {{word:le}}.",
      hanzi: "我在网站上看到了。",
      en: "I saw it on a website.",
      ru: "Я видел это на сайте.",
    },
  ],
});
