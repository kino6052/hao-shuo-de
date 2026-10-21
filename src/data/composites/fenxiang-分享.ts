import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1263,
  phase: 3,
  zh: "分享",
  py: "fēnxiǎng",
  en: "share",
  ru: "делиться",
  pos: "verb",
  hsd: ["{{word:gei3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:yi1}}-{{word:dian3}}"],
  tts: ["给别的人一点"],
  literal: "give others some",
  fit: "plain",
  topics: ["helping-and-sharing"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:yi1}}-{{word:dian3}}.",
      hanzi: "我给别的人一点。",
      en: "I share.",
      ru: "Я делюсь.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:gei3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:yi1}}-{{word:dian3}} {{word:ma}}?",
      hanzi: "你给别的人一点吗？",
      en: "Do you share?",
      ru: "Ты делишься?",
    },
  ],
});
