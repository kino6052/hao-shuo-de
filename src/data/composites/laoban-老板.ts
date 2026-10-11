import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 458,
  phase: 1,
  zh: "老板",
  py: "lǎobǎn",
  en: "boss",
  ru: "начальник",
  pos: "noun",
  hsd: ["{{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:tou2}}"],
  tts: ["工作的头"],
  literal: "the head of the work",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}}-{{word:men}} {{word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:tou2}}.",
      hanzi: "他是我们工作的头。",
      en: "He's our boss.",
      ru: "Он наш начальник.",
    },
    {
      pinyin: "{{Word:gong1}}-{{word:zuo4}}-{{word:de}} {{word:tou2}} {{word:jin1}}-{{word:tian1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "工作的头今天不来。",
      en: "The boss isn't coming today.",
      ru: "Начальник сегодня не придёт.",
    },
  ],
});
