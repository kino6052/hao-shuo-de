import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 673,
  phase: 2,
  zh: "正",
  py: "zhèng",
  en: "exactly, just",
  ru: "как раз",
  pos: "adverb",
  hsd: ["{{word:jiu4}}"],
  tts: ["就"],
  fit: "natural",
  topics: ["just-then-and-finally"],
  isA: ["adverb-word"],
  note: "jiù shì zhè-ge: that's exactly it.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:jiu4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "他就在这里。",
      en: "He's right here.",
      ru: "Он как раз здесь.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:jiu4}} {{word:yao4}} {{word:ni3}}.",
      hanzi: "我就要你。",
      en: "It's you I want.",
      ru: "Мне нужен именно ты.",
    },
  ],
});
