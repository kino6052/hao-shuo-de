import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 481,
  phase: 1,
  zh: "那样",
  py: "nàyàng",
  en: "like that",
  ru: "так",
  pos: "pronoun",
  hsd: ["{{word:na4}}-{{word:yang4}}", "{{word:na4}}-{{word:zhong3}}"],
  tts: ["那样", "那种"],
  literal: "that kind",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:bie2}} {{word:na4}}-{{word:yang4}} {{word:shuo1}}.",
      hanzi: "别那样说。",
      en: "Don't talk like that.",
      ru: "Не говори так.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:ai4}} {{word:na4}}-{{word:zhong3}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我不爱那种东西。",
      en: "I don't love that kind of thing.",
      ru: "Я не люблю такие вещи.",
    },
  ],
});
