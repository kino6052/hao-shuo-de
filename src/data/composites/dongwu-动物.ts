import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 148,
  phase: 1,
  zh: "动物",
  py: "dòngwù",
  en: "animal",
  ru: "животное",
  pos: "noun",
  hsd: ["{{word:dong4}}-{{word:wu4}}"],
  tts: ["动物"],
  fit: "natural",
  transparent: true,
  role: "noun",
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:ai4}} {{word:shen2me}} {{word:dong4}}-{{word:wu4}}?",
      hanzi: "你爱什么动物？",
      en: "What animals do you love?",
      ru: "Каких животных ты любишь?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:dong4}}-{{word:wu4}} {{word:hen3}} {{word:da4}}.",
      hanzi: "这个动物很大。",
      en: "This animal is big.",
      ru: "Это животное большое.",
    },
  ],
});
