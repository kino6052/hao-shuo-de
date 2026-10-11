import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 579,
  phase: 2,
  zh: "吧",
  py: "ba",
  en: "(suggestion particle)",
  ru: "частица ba",
  pos: "auxiliary",
  hsd: ["\"ba\""],
  tts: ["吧"],
  fit: "natural",
  note: "For a suggestion, end with …, hǎo ma?",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qu4}} \"ba\".",
      hanzi: "我们去吧。",
      en: "Let's go.",
      ru: "Пойдём.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:lai2}} \"ba\".",
      hanzi: "你来吧。",
      en: "Come on.",
      ru: "Давай, приходи.",
    },
  ],
});
