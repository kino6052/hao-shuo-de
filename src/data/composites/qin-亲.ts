import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1453,
  phase: 3,
  zh: "亲",
  py: "qīn",
  en: "close (related); kiss",
  ru: "близкий; целовать",
  pos: "adjective",
  hsd: ["{{word:guan1xi}} {{word:hen3}} {{word:hao3}}", "{{word:yong4}} {{word:kou3}} {{word:mo1}}"],
  tts: ["关系很好", "用口摸"],
  literal: "a very good connection / touch with the mouth",
  fit: "plain",
  topics: ["relatives"],
  isA: ["comparison"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ta1}} {{word:guan1xi}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "我和他关系很好。",
      en: "He and I are close.",
      ru: "Мы с ним близки.",
    },
    {
      pinyin: "{{Word:ma1ma}} {{word:yong4}} {{word:kou3}} {{word:mo1}} {{word:wo3}}.",
      hanzi: "妈妈用口摸我。",
      en: "Mom kisses me.",
      ru: "Мама целует меня.",
    },
  ],
});
