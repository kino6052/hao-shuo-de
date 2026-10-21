import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 969,
  phase: 2,
  zh: "不好意思",
  py: "bù hǎoyìsi",
  en: "sorry, excuse me",
  ru: "извините",
  pos: "phrase",
  hsd: ["{{word:shi4}} {{word:wo3}} {{word:bu4}} {{word:hao3}}"],
  tts: ["是我不好"],
  literal: "it's my fault",
  fit: "plain",
  topics: ["manners"],
  isA: ["set-phrase"],
  note: "Same as 对不起.",
  examples: [
    {
      pinyin: "{{Word:shi4}} {{word:wo3}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "是我不好。",
      en: "Sorry.",
      ru: "Прости.",
    },
    {
      pinyin: "{{Word:shi4}} {{word:wo3}} {{word:bu4}} {{word:hao3}}, {{word:ni3}} {{word:bie2}} {{word:pa4}}.",
      hanzi: "是我不好，你别怕。",
      en: "Sorry, don't worry.",
      ru: "Прости, не бойся.",
    },
  ],
});
