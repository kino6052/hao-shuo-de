import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1162,
  phase: 3,
  zh: "社区",
  py: "shèqū",
  en: "community",
  ru: "сообщество, район",
  pos: "noun",
  hsd: ["{{word:jia1}} {{word:zai4}} {{word:fu4jin4}}-{{word:de}} {{word:ren2}}"],
  tts: ["家在附近的人"],
  literal: "people whose homes are nearby",
  fit: "plain",
  topics: ["groups-and-organisations"],
  isA: ["group-of-people"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:jia1}} {{word:zai4}} {{word:fu4jin4}}-{{word:de}} {{word:ren2}}.",
      hanzi: "我爱家在附近的人。",
      en: "I love my community.",
      ru: "Я люблю своё сообщество.",
    },
    {
      pinyin: "{{Word:jia1}} {{word:zai4}} {{word:fu4jin4}}-{{word:de}} {{word:ren2}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "家在附近的人很好。",
      en: "The community is nice.",
      ru: "Сообщество хорошее.",
    },
  ],
});
