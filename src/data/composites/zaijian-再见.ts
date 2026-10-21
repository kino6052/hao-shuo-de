import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 254,
  phase: 1,
  zh: "再见",
  py: "zàijiàn",
  en: "goodbye",
  ru: "до свидания",
  pos: "verb",
  hsd: ["\"bai-bai\"", "{{word:zai4}}-{{word:jian4}}"],
  tts: ["拜拜", "再见"],
  fit: "natural",
  topics: ["meeting-and-parting"],
  isA: ["set-phrase"],
  note: "Goodbye is the sound \"bai-bai\", written in quotes like names and animal sounds (Lesson 1). Zài-jiàn (see you again) says the same thing with words.",
  examples: [
    { pinyin: "\"bai-bai\"!", hanzi: "拜拜！", en: "Goodbye!", ru: "До свидания!" },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:jian4}}, \"bai-bai\"!",
      hanzi: "明天见，拜拜！",
      en: "See you tomorrow, bye!",
      ru: "До завтра, пока!",
    },
  ],
});
