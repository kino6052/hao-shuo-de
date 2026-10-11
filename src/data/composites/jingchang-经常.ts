import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 454,
  phase: 1,
  zh: "经常",
  py: "jīngcháng",
  en: "often",
  ru: "часто",
  pos: "adverb",
  hsd: ["{{word:chang2}}-{{word:chang2}}"],
  tts: ["常常"],
  literal: "often",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:chang2}}-{{word:chang2}} {{word:yi1}}-{{word:qi3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "我们常常一起吃饭。",
      en: "We often eat together.",
      ru: "Мы часто едим вместе.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:chang2}}-{{word:chang2}} {{word:qu4}} {{word:gong1}}-{{word:yuan2}}.",
      hanzi: "他常常去公园。",
      en: "He often goes to the park.",
      ru: "Он часто ходит в парк.",
    },
  ],
});
