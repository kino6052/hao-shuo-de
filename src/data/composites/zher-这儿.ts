import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 973,
  phase: 2,
  zh: "这儿",
  py: "zhèr",
  en: "here",
  ru: "здесь",
  pos: "pronoun",
  hsd: ["{{word:zhe4}}-{{word:li3}}", "{{word:zhe4}}-{{word:bian1}}"],
  tts: ["这里", "这边"],
  literal: "this side",
  fit: "natural",
  topics: ["here-there-everywhere"],
  isA: ["place-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:zhe4}}-{{word:bian1}}.",
      hanzi: "我在这边。",
      en: "I'm here.",
      ru: "Я здесь.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yao4}} {{word:zai4}} {{word:zhe4}}-{{word:bian1}} {{word:ma}}?",
      hanzi: "你要在这边吗？",
      en: "Do you want to be here?",
      ru: "Ты хочешь быть здесь?",
    },
  ],
});
