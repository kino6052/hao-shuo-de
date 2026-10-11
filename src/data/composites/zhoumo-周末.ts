import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 509,
  phase: 2,
  zh: "周末",
  py: "zhōumò",
  en: "weekend",
  ru: "выходные",
  pos: "noun",
  hsd: [
    "{{word:qi1}}-{{word:tian1}}-{{word:de}} {{word:zui4}}-{{word:hou4}} {{word:liang3}}-{{word:tian1}}",
  ],
  tts: ["七天的最后两天"],
  literal: "the last two of seven days",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:qi1}}-{{word:tian1}}-{{word:de}} {{word:zui4}}-{{word:hou4}} {{word:liang3}}-{{word:tian1}}, {{word:wo3}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "七天的最后两天，我在家。",
      en: "At the weekend I'm at home.",
      ru: "В выходные я дома.",
    },
    {
      pinyin: "{{Word:qi1}}-{{word:tian1}}-{{word:de}} {{word:zui4}}-{{word:hou4}} {{word:liang3}}-{{word:tian1}}, {{word:ni3}} {{word:qu4}} {{word:na3}}-{{word:li3}}?",
      hanzi: "七天的最后两天，你去哪里？",
      en: "Where are you going at the weekend?",
      ru: "Куда ты идёшь на выходных?",
    },
  ],
});
