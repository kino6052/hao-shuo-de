import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 123,
  phase: 1,
  zh: "所以",
  py: "suǒyǐ",
  en: "so, therefore",
  ru: "поэтому",
  pos: "conjunction",
  hsd: ["X, {{word:jiu4}} Y", "{{word:yin1wei4}} {{word:zhe4}}-{{light:ge4}}"],
  tts: ["X，就Y", "因为这个"],
  literal: "X, then Y / because of this",
  fit: "natural",
  note: "Mandarin often says so with 就 alone: tā lěng le, jiù huí jiā le.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:leng3}} {{word:le}}, {{word:jiu4}} {{word:hui2}} {{word:jia1}} {{word:le}}.",
      hanzi: "他冷了，就回家了。",
      en: "He got cold, so he went home.",
      ru: "Ему стало холодно, и он пошёл домой.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:bu4}} {{word:zhi1dao4}}, {{word:yin1wei4}} {{word:zhe4}}-{{light:ge4}} {{word:wo3}} {{word:wen4}} {{word:ta1}}.",
      hanzi: "我不知道，因为这个我问他。",
      en: "I didn't know, so I asked him.",
      ru: "Я не знал, поэтому спросил его.",
    },
  ],
});
