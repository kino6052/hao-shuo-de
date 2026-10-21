import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1275,
  phase: 3,
  zh: "厂",
  py: "chǎng",
  en: "factory",
  ru: "завод",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["做东西的地方"],
  literal: "a place where things are made",
  fit: "plain",
  topics: ["farms-and-factories"],
  isA: ["building"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:zai4}} {{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "我爸爸在做东西的地方工作。",
      en: "My dad works in a factory.",
      ru: "Мой папа работает на заводе.",
    },
    {
      pinyin: "{{Word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "做东西的地方很大。",
      en: "The factory is big.",
      ru: "Завод большой.",
    },
  ],
});
