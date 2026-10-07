import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 55,
  phase: 1,
  zh: "就",
  py: "jiù",
  en: "just, then",
  ru: "сразу, как раз",
  pos: "adverb",
  hsd: ["{{word:jiu4}}"],
  tts: ["就"],
  fit: "word",
  note: "Lesson {{lesson:linking-sentences}}: rúguǒ nǐ lái, wǒ jiù děng nǐ.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jiu4}} {{word:yao4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我就要这个。",
      en: "I just want this one.",
      ru: "Мне нужно только это.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:lai2}} {{word:le}}, {{word:wo3}} {{word:jiu4}} {{word:zou3}}.",
      hanzi: "他来了，我就走。",
      en: "Once he comes, I'll leave.",
      ru: "Как только он придёт, я уйду.",
    },
  ],
});
