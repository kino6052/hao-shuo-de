import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 801,
  phase: 2,
  zh: "云",
  py: "yún",
  en: "cloud",
  ru: "облако",
  pos: "noun",
  hsd: [
    "{{word:tian1}}-{{word:shang4}}-{{word:de}} {{word:bai2}}-{{word:se4}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["天上的白色东西"],
  literal: "the white thing up in the sky",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:tian1}}-{{word:shang4}}-{{word:de}} {{word:bai2}}-{{word:se4}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:da4}}.",
      hanzi: "天上的白色东西很大。",
      en: "The cloud is big.",
      ru: "Облако большое.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:tian1}}-{{word:shang4}}-{{word:de}} {{word:bai2}}-{{word:se4}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "我看到天上的白色东西。",
      en: "I see a cloud.",
      ru: "Я вижу облако.",
    },
  ],
});
