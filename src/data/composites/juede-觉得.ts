import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 203,
  phase: 1,
  zh: "觉得",
  py: "juéde",
  en: "feeling",
  ru: "чувство",
  pos: "verb",
  hsd: ["{{word:jue2}}-{{light:de2}}"],
  tts: ["觉得"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:jue2}}-{{light:de2}} {{word:zen3me}}-{{word:yang4}}?",
      hanzi: "你觉得怎么样？",
      en: "What do you think?",
      ru: "Как тебе?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{light:de2}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "我觉得很冷。",
      en: "I feel cold.",
      ru: "Мне холодно.",
    },
  ],
});
