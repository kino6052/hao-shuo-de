import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 169,
  phase: 1,
  zh: "如果",
  py: "rúguǒ",
  en: "if",
  ru: "если",
  pos: "conjunction",
  hsd: ["{{word:ru2guo3}}"],
  tts: ["如果"],
  fit: "word",
  note: "Lesson {{lesson:linking-sentences}}.",
  examples: [
    {
      pinyin: "{{Word:ru2guo3}} {{word:ni3}} {{word:lai2}}, {{word:wo3}} {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "如果你来，我很开心。",
      en: "If you come, I'll be happy.",
      ru: "Если ты придёшь, я буду рад.",
    },
    {
      pinyin: "{{Word:ru2guo3}} {{word:ming2}}-{{word:tian1}} {{word:hen3}} {{word:leng3}}, {{word:wo3}} {{word:bu4}} {{word:qu4}}.",
      hanzi: "如果明天很冷，我不去。",
      en: "If it's cold tomorrow, I won't go.",
      ru: "Если завтра будет холодно, я не пойду.",
    },
  ],
});
