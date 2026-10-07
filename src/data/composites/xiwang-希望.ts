import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 306,
  phase: 1,
  zh: "希望",
  py: "xīwàng",
  en: "hope",
  ru: "надеяться",
  pos: "verb",
  hsd: ["{{word:xiang3}}"],
  tts: ["想"],
  literal: "would like",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:xiang3}} {{word:ni3}} {{word:ming2}}-{{word:tian1}} {{word:lai2}}.",
      hanzi: "我想你明天来。",
      en: "I hope you come tomorrow.",
      ru: "Надеюсь, ты придёшь завтра.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:xiang3}} {{word:qu4}} {{word:da4}}-{{word:xue2}}.",
      hanzi: "他想去大学。",
      en: "He hopes to go to university.",
      ru: "Он надеется поступить в университет.",
    },
  ],
});
