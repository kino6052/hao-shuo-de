import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 867,
  phase: 2,
  zh: "班",
  py: "bān",
  en: "class, team",
  ru: "класс, группа",
  pos: "noun",
  hsd: ["{{word:yi1}}-{{word:qi3}}-{{word:xue2}}-{{word:de}} {{word:ren2}}"],
  tts: ["一起学的人"],
  literal: "the people who learn together",
  fit: "plain",
  topics: ["lessons-and-classes"],
  isA: ["group-of-people"],
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:shi4}} {{word:yi1}}-{{word:qi3}}-{{word:xue2}}-{{word:de}} {{word:ren2}}.",
      hanzi: "他们是一起学的人。",
      en: "They are in one class.",
      ru: "Они из одного класса.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:yi1}}-{{word:qi3}}-{{word:xue2}}-{{word:de}} {{word:ren2}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "我和一起学的人在这里。",
      en: "My classmates and I are here.",
      ru: "Мы с одноклассниками здесь.",
    },
  ],
});
