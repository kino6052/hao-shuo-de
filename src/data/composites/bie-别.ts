import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 502,
  phase: 2,
  zh: "别",
  py: "bié",
  en: "don't",
  ru: "не надо",
  pos: "adverb",
  hsd: ["{{word:bie2}}"],
  tts: ["别"],
  fit: "word",
  note: "Lesson {{lesson:greetings-and-feelings}}: bù yào xiào!",
  examples: [
    { pinyin: "{{Word:bie2}} {{word:zou3}}!", hanzi: "别走！", en: "Don't go!", ru: "Не уходи!" },
    {
      pinyin: "{{Word:bie2}} {{word:pa4}}.",
      hanzi: "别怕。",
      en: "Don't be afraid.",
      ru: "Не бойся.",
    },
  ],
});
