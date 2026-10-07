import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 164,
  phase: 1,
  zh: "太",
  py: "tài",
  en: "too",
  ru: "слишком",
  pos: "adverb",
  hsd: ["{{word:zhen1}}"],
  tts: ["真"],
  fit: "plain",
  note: "There's no word for \"too\" (§4d).",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:zhen1}} {{word:da4}}!",
      hanzi: "这个真大！",
      en: "This is so big!",
      ru: "Это такое большое!",
    },
    {
      pinyin: "{{Word:jin1}}-{{word:tian1}} {{word:zhen1}} {{word:re4}}.",
      hanzi: "今天真热。",
      en: "It's so hot today.",
      ru: "Сегодня так жарко.",
    },
  ],
});
