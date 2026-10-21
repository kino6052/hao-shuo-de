import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 961,
  phase: 2,
  zh: "随便",
  py: "suíbiàn",
  en: "as you like",
  ru: "как хочешь",
  pos: "verb",
  hsd: ["{{word:jiu4}} {{word:ke3}}-{{word:yi3}}"],
  tts: ["就可以"],
  literal: "then it's fine",
  fit: "natural",
  topics: ["describing-people"],
  isA: ["character-quality"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jiu4}} {{word:ke3}}-{{word:yi3}}.",
      hanzi: "我就可以。",
      en: "Whatever you like.",
      ru: "Как хочешь.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:xiang3}} {{word:qu4}}, {{word:wo3}} {{word:jiu4}} {{word:ke3}}-{{word:yi3}}.",
      hanzi: "你想去，我就可以。",
      en: "If you want to go, fine with me.",
      ru: "Если хочешь пойти, мне подходит.",
    },
  ],
});
