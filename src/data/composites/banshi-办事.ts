import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 812,
  phase: 2,
  zh: "办事",
  py: "bànshì",
  en: "handle things",
  ru: "делать дела",
  pos: "verb",
  hsd: ["{{word:zuo4}} {{word:dong1}}-{{light:xi1}}"],
  tts: ["做东西"],
  literal: "do things",
  fit: "natural",
  topics: ["work-and-effort"],
  isA: ["working"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zuo4}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我做东西。",
      en: "I handle things.",
      ru: "Я занимаюсь делами.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:zuo4}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "他在做东西。",
      en: "He is handling things.",
      ru: "Он занимается делами.",
    },
  ],
});
