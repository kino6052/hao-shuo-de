import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1117,
  phase: 3,
  zh: "文章",
  py: "wénzhāng",
  en: "article, essay",
  ru: "статья",
  pos: "noun",
  hsd: ["{{word:xie3}}-{{word:de}} {{word:hua4}}"],
  tts: ["写的话"],
  literal: "talk that is written",
  fit: "plain",
  topics: ["writing"],
  isA: ["work-of-art"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:kan4}} {{word:ta1}} {{word:xie3}}-{{word:de}} {{word:hua4}}.",
      hanzi: "我爱看他写的话。",
      en: "I like reading his articles.",
      ru: "Я люблю читать его статьи.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:wo3}} {{word:xie3}}-{{word:de}} {{word:hua4}}.",
      hanzi: "这是我写的话。",
      en: "This is an article I wrote.",
      ru: "Это статья, которую я написал.",
    },
  ],
});
