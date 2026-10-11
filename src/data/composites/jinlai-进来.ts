import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 548,
  phase: 2,
  zh: "进来",
  py: "jìnlái",
  en: "come in",
  ru: "входить",
  pos: "verb",
  hsd: ["{{word:jin4}}-{{word:lai2}}"],
  tts: ["进来"],
  fit: "natural",
  note: "Lesson {{lesson:direction-and-result}}.",
  examples: [
    {
      pinyin: "{{Word:kuai4}} {{word:jin4}}-{{word:lai2}}!",
      hanzi: "快进来！",
      en: "Come in quickly!",
      ru: "Заходи скорее!",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jin4}}-{{word:lai2}} {{word:le}}.",
      hanzi: "他进来了。",
      en: "He came in.",
      ru: "Он вошёл.",
    },
  ],
});
