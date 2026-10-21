import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1008,
  phase: 3,
  zh: "举行",
  py: "jǔxíng",
  en: "hold (an event)",
  ru: "проводить",
  pos: "verb",
  hsd: ["{{word:zuo4}}"],
  tts: ["做"],
  literal: "do",
  fit: "plain",
  topics: ["doing-and-carrying-out"],
  isA: ["making"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:zai4}} {{word:jia1}} {{word:zuo4}}.",
      hanzi: "我们在家做。",
      en: "We hold it at home.",
      ru: "Мы проводим это дома.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:zai4}} {{word:zhe4}}-{{word:li3}} {{word:zuo4}}.",
      hanzi: "他们在这里做。",
      en: "They hold it here.",
      ru: "Они проводят это здесь.",
    },
  ],
});
