import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1253,
  phase: 3,
  zh: "信心",
  py: "xìnxīn",
  en: "confidence",
  ru: "уверенность",
  pos: "noun",
  hsd: ["{{word:jue2}}-{{light:de2}} {{word:wo3}} {{word:neng2}}"],
  tts: ["觉得我能"],
  literal: "feel \"I can\"",
  fit: "plain",
  topics: ["happy-feelings"],
  isA: ["feeling-name"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{word:de2}} {{word:wo3}} {{word:neng2}}.",
      hanzi: "我觉得我能。",
      en: "I have confidence.",
      ru: "Я уверен в себе.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{word:de2}} {{word:wo3}} {{word:neng2}} {{word:zuo4}} {{word:hao3}}.",
      hanzi: "我觉得我能做好。",
      en: "I'm confident I can do it well.",
      ru: "Я уверен, что справлюсь хорошо.",
    },
  ],
});
