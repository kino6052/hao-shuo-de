import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 249,
  phase: 1,
  zh: "不要",
  py: "búyào",
  en: "don't",
  ru: "не надо",
  pos: "adverb",
  hsd: ["{{word:bu4}} {{word:yao4}}"],
  tts: ["不要"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:bu4}} {{word:yao4}} {{word:shuo1}}!",
      hanzi: "不要说！",
      en: "Don't say it!",
      ru: "Не говори!",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:yao4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我不要这个。",
      en: "I don't want this.",
      ru: "Мне это не нужно.",
    },
  ],
});
