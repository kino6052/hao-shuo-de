import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1101,
  phase: 3,
  zh: "报道",
  py: "bàodào",
  en: "news report",
  ru: "репортаж",
  pos: "verb",
  hsd: ["{{word:gei3}} {{word:xin1#new}}-\"wén\""],
  tts: ["给新闻"],
  literal: "give the news",
  fit: "plain",
  topics: ["news-and-events"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:kan4}} {{word:ta1}} {{word:gei3}} {{word:xin1#new}}-\"wén\".",
      hanzi: "我爱看他给新闻。",
      en: "I like watching him report the news.",
      ru: "Я люблю смотреть, как он ведёт репортаж.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:gei3}} {{word:xin1#new}}-\"wén\".",
      hanzi: "他在给新闻。",
      en: "He is giving a news report.",
      ru: "Он ведёт репортаж.",
    },
  ],
});
