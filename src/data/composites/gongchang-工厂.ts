import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1321,
  phase: 3,
  zh: "工厂",
  py: "gōngchǎng",
  en: "factory",
  ru: "фабрика",
  pos: "noun",
  hsd: ["{{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}"],
  tts: ["做东西的地方"],
  literal: "a place where things are made",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ba4ba}} {{word:zai4}} {{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:gong1}}-{{word:zuo4}}.",
      hanzi: "我爸爸在做东西的地方工作。",
      en: "My dad works in a factory.",
      ru: "Мой папа работает на заводе.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:zai4}} {{word:zuo4}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:di4}}-{{light:fang1}}.",
      hanzi: "他们在做东西的地方。",
      en: "They are at the factory.",
      ru: "Они на заводе.",
    },
  ],
});
