import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 608,
  phase: 2,
  zh: "传",
  py: "chuán",
  en: "pass on",
  ru: "передавать",
  pos: "verb",
  hsd: ["{{word:gei3}} {{word:bie2}}-{{word:de}} {{word:ren2}}"],
  tts: ["给别的人"],
  literal: "give to someone else",
  fit: "plain",
  topics: ["taking-and-holding"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我给别的人这个。",
      en: "I pass this on to someone else.",
      ru: "Я передаю это другому.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:gei3}} {{word:bie2}}-{{word:de}} {{word:ren2}} {{word:shu1}} {{word:ma}}?",
      hanzi: "你给别的人书吗？",
      en: "Are you passing the book on to someone else?",
      ru: "Ты передашь книгу другому?",
    },
  ],
});
