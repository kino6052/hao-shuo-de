import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 555,
  phase: 2,
  zh: "呢",
  py: "ne",
  en: "(question particle)",
  ru: "частица ne",
  pos: "auxiliary",
  hsd: ["\"ne\""],
  tts: ["呢"],
  fit: "natural",
  note: "Leave it out; ask with ma or a question word.",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:hao3}}, {{word:ni3}} \"ne\"?",
      hanzi: "我很好，你呢？",
      en: "I'm fine, and you?",
      ru: "У меня всё хорошо, а у тебя?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:jia1}}, {{word:ni3}}-{{word:de}} {{word:ba4ba}} \"ne\"?",
      hanzi: "他在家，你的爸爸呢？",
      en: "He's at home; and your dad?",
      ru: "Он дома, а твой папа?",
    },
  ],
});
