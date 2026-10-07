import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 349,
  phase: 1,
  zh: "今年",
  py: "jīnnián",
  en: "this year",
  ru: "в этом году",
  pos: "noun",
  hsd: [
    "{{word:jin1}}-{{word:nian2}}",
    "{{word:xian4}}-{{word:zai4}}-{{word:de}} {{word:shi2}}-{{word:er4}}-ge {{word:yue4}}",
  ],
  tts: ["今年", "现在的十二个月"],
  literal: "the twelve months of now",
  fit: "natural",
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
