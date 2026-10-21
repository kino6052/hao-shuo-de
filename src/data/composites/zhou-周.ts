import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 627,
  phase: 2,
  zh: "周",
  py: "zhōu",
  en: "week",
  ru: "неделя",
  pos: "noun",
  hsd: ["{{word:qi1}}-{{word:tian1}}"],
  tts: ["七天"],
  literal: "seven days",
  fit: "natural",
  transparent: true,
  topics: ["weeks-months-and-deadlines"],
  isA: ["time-span"],
  note: "Same as 星期.",
  examples: [
    {
      pinyin: "{{Word:qi1}}-{{word:tian1}} {{word:hou4}}, {{word:wo3}} {{word:hui2}}-{{word:jia1}}.",
      hanzi: "七天后，我回家。",
      en: "In a week I'll be home.",
      ru: "Через неделю я буду дома.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:qi1}}-{{word:tian1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "他七天不来。",
      en: "He's not coming for a week.",
      ru: "Его не будет неделю.",
    },
  ],
});
