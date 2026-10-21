import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1232,
  phase: 3,
  zh: "专门",
  py: "zhuānmén",
  en: "specially",
  ru: "специально",
  pos: "adverb",
  hsd: ["{{word:jiu4}} {{word:zuo4}} {{word:zhe4}}-ge"],
  tts: ["就做这个"],
  literal: "just doing this",
  fit: "plain",
  topics: ["degree-words"],
  isA: ["adverb-word"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jiu4}} {{word:zuo4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我就做这个。",
      en: "I do only this.",
      ru: "Я занимаюсь только этим.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jiu4}} {{word:zuo4}} {{word:zhe4}}-{{light:ge4}}, {{word:bu4}} {{word:zuo4}} {{word:bie2}}-{{word:de}}.",
      hanzi: "他就做这个，不做别的。",
      en: "He does only this, nothing else.",
      ru: "Он делает только это, больше ничего.",
    },
  ],
});
