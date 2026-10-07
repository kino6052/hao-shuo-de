import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 343,
  phase: 1,
  zh: "上课",
  py: "shàngkè",
  en: "attend class",
  ru: "идти на урок",
  pos: "verb",
  hsd: ["{{word:qu4}} {{word:xue2}}"],
  tts: ["去学"],
  literal: "go learn",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:qu4}} {{word:xue2}} {{word:le}}.",
      hanzi: "我要去学了。",
      en: "I have to go to class.",
      ru: "Мне пора на урок.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:ni3}} {{word:qu4}} {{word:xue2}} {{word:ma}}?",
      hanzi: "明天你去学吗？",
      en: "Are you going to class tomorrow?",
      ru: "Ты завтра идёшь на занятия?",
    },
  ],
});
