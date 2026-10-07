import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 255,
  phase: 1,
  zh: "对不起",
  py: "duìbuqǐ",
  en: "sorry",
  ru: "извините",
  pos: "verb",
  hsd: [
    "{{word:dui4}}-{{word:bu4}}-{{word:qi3}}",
    "{{word:shi4}} {{word:wo3}} {{word:bu4}} {{word:hao3}}",
  ],
  tts: ["对不起", "是我不好"],
  literal: "facing, can't rise / it's my fault",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:dui4}}-{{word:bu4}}-{{word:qi3}}, {{word:wo3}} {{word:lai2}} {{word:wan3}} {{word:le}}.",
      hanzi: "对不起，我来晚了。",
      en: "Sorry I'm late.",
      ru: "Извини, я опоздал.",
    },
    {
      pinyin: "{{Word:shi4}} {{word:wo3}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "是我不好。",
      en: "It's my fault.",
      ru: "Это я виноват.",
    },
  ],
});
