import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 90,
  phase: 1,
  zh: "晚上",
  py: "wǎnshang",
  en: "evening",
  ru: "вечер",
  pos: "noun",
  hsd: ["{{word:wan3}}-{{light:shang4}}", "{{word:yue4}}-{{word:de}} {{word:shi2}}-{{word:jian1}}"],
  tts: ["晚上", "月的时间"],
  literal: "moon time",
  fit: "natural",
  note: "Lesson {{lesson:when-it-happens}}.",
  examples: [
    {
      pinyin: "{{Word:wan3}}-{{light:shang4}} {{word:wo3}} {{word:kan4}} {{word:shu1}}.",
      hanzi: "晚上我看书。",
      en: "In the evening I read.",
      ru: "Вечером я читаю.",
    },
    {
      pinyin: "{{Word:ming2}}-{{word:tian1}} {{word:wan3}}-{{light:shang4}} {{word:ni3}} {{word:lai2}} {{word:ma}}?",
      hanzi: "明天晚上你来吗？",
      en: "Are you coming tomorrow evening?",
      ru: "Ты придёшь завтра вечером?",
    },
  ],
});
