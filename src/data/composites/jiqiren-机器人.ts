import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1516,
  phase: 3,
  zh: "机器人",
  py: "jīqìrén",
  en: "robot",
  ru: "робот",
  pos: "noun",
  hsd: [
    "{{word:ji1}}-{{word:qi4}}-{{word:ren2}}",
    "{{word:neng2}}-{{word:zuo4}}-{{word:ren2}}-{{word:zuo4}}-{{word:de}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:gong1}}-{{word:ju4}}",
  ],
  tts: ["机器人", "能做人做的东西的工具"],
  literal: "a tool that can do what people do",
  fit: "natural",
  topics: ["farms-and-factories"],
  isA: ["machine"],
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:ji1}}-{{word:qi4}}-{{word:ren2}}.",
      hanzi: "这是机器人。",
      en: "This is a robot.",
      ru: "Это робот.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:neng2}}-{{word:zuo4}}-{{word:ren2}}-{{word:zuo4}}-{{word:de}}-{{word:dong1}}-{{light:xi1}}-{{word:de}} {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我有能做人做的东西的工具。",
      en: "I have a robot.",
      ru: "У меня есть робот.",
    },
  ],
});
