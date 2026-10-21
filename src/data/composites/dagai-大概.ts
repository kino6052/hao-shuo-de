import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 636,
  phase: 2,
  zh: "大概",
  py: "dàgài",
  en: "probably",
  ru: "вероятно",
  pos: "adjective",
  hsd: ["{{word:ke3}}-{{word:neng2}}"],
  tts: ["可能"],
  fit: "word",
  topics: ["degree-words"],
  isA: ["adverb-word"],
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:ke3}}-{{word:neng2}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "他可能在家。",
      en: "He's probably at home.",
      ru: "Он, наверное, дома.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:ke3}}-{{word:neng2}} {{word:leng3}}.",
      hanzi: "明天可能冷。",
      en: "Tomorrow it will probably be cold.",
      ru: "Завтра, вероятно, будет холодно.",
    },
  ],
});
