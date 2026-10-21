import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 959,
  phase: 2,
  zh: "那儿",
  py: "nàr",
  en: "there",
  ru: "там",
  pos: "pronoun",
  hsd: ["{{word:na4}}-{{word:li3}}", "{{word:na4}}-{{word:bian1}}"],
  tts: ["那里", "那边"],
  literal: "that side",
  fit: "natural",
  topics: ["here-there-everywhere"],
  isA: ["place-word"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:na4}}-{{word:bian1}}.",
      hanzi: "他在那边。",
      en: "He is there.",
      ru: "Он там.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:qu4}} {{word:na4}}-{{word:bian1}}.",
      hanzi: "我要去那边。",
      en: "I want to go there.",
      ru: "Я хочу пойти туда.",
    },
  ],
});
