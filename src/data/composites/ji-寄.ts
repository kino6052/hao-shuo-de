import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1484,
  phase: 3,
  zh: "寄",
  py: "jì",
  en: "send, mail",
  ru: "отправлять (почтой)",
  pos: "verb",
  hsd: ["{{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}}"],
  tts: ["给远的人"],
  literal: "give to someone far away",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["trade-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}} {{word:shu1}}.",
      hanzi: "我给远的人书。",
      en: "I mail a book to someone far away.",
      ru: "Я отправляю книгу далёкому человеку.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:ren2}} {{word:yi1fu}}.",
      hanzi: "他给远的人衣服。",
      en: "He mails clothes to someone far away.",
      ru: "Он отправляет одежду далёкому человеку.",
    },
  ],
});
