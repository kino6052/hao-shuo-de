import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 112,
  phase: 1,
  zh: "七",
  py: "qī",
  en: "seven",
  ru: "семь",
  pos: "number",
  hsd: ["{{word:qi1}}"],
  tts: ["七"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:qi1}} {{word:dian3}} {{word:chi1}}-{{word:fan4}}.",
      hanzi: "我们七点吃饭。",
      en: "We eat at seven.",
      ru: "Мы едим в семь.",
    },
    {
      pinyin: "{{Word:qi1}} {{word:tian1}} {{word:hou4}} {{word:wo3}} {{word:hui2}}-{{word:lai2}}.",
      hanzi: "七天后我回来。",
      en: "I'll be back in seven days.",
      ru: "Я вернусь через семь дней.",
    },
  ],
});
