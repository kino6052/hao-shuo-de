import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1342,
  phase: 3,
  zh: "提到",
  py: "tídào",
  en: "mention",
  ru: "упоминать",
  pos: "verb",
  hsd: ["{{word:shuo1}}-{{word:dao4}}"],
  tts: ["说到"],
  literal: "speak of",
  fit: "natural",
  topics: ["introducing-and-passing-on"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shuo1}}-{{word:dao4}} {{word:ni3}}.",
      hanzi: "他说到你。",
      en: "He mentioned you.",
      ru: "Он упомянул тебя.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shuo1}}-{{word:dao4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我说到这个。",
      en: "I mentioned this.",
      ru: "Я упомянул это.",
    },
  ],
});
