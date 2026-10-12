import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1017,
  phase: 3,
  zh: "人才",
  py: "réncái",
  en: "talented person",
  ru: "талантливый человек",
  pos: "noun",
  hsd: [
    "{{word:zuo4}} {{word:gong1}}-{{word:zuo4}} {{word:hen3}} {{word:hao3}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["做工作很好的人"],
  literal: "a person who works very well",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:zuo4}} {{word:gong1}}-{{word:zuo4}} {{word:hen3}} {{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他是做工作很好的人。",
      en: "He is a talented person.",
      ru: "Он талантливый человек.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:zhao3}} {{word:zuo4}} {{word:gong1}}-{{word:zuo4}} {{word:hen3}} {{word:hao3}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我要找做工作很好的人。",
      en: "I'm looking for a talented person.",
      ru: "Я ищу талантливого человека.",
    },
  ],
});
