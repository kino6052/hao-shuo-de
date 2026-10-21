import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 349,
  phase: 1,
  zh: "今年",
  py: "jīnnián",
  en: "this year",
  ru: "в этом году",
  pos: "noun",
  hsd: ["{{word:jin1}}-{{word:nian2}}", "{{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:nian2}}"],
  tts: ["今年", "现在的年"],
  literal: "the year of now",
  fit: "natural",
  kinds: ["spelled", "built"],
  topics: ["calendar"],
  isA: ["time-point"],
  examples: [
    {
      pinyin: "{{Word:jin1}}-{{word:nian2}} {{word:wo3}} {{word:er4}}-{{word:shi2}}.",
      hanzi: "今年我二十。",
      en: "I'm twenty this year.",
      ru: "В этом году мне двадцать.",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:nian2}} {{word:hen3}} {{word:re4}}.",
      hanzi: "今年很热。",
      en: "It's hot this year.",
      ru: "В этом году жарко.",
    },
  ],
});
