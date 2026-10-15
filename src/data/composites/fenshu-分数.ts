import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 616,
  phase: 2,
  zh: "分数",
  py: "fēnshù",
  en: "score, grade",
  ru: "оценка",
  pos: "noun",
  hsd: ["{{word:fen1}}-{{word:shu4}}", "{{word:hao3}}-{{word:huai4}}-{{word:de}} {{word:shu4}}"],
  tts: ["分数", "好坏的数"],
  literal: "the good-or-bad number",
  fit: "natural",
  kinds: ["built", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:hao3}}-{{word:huai4}}-{{word:de}} {{word:shu4}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "我的好坏的数很高。",
      en: "My score is high.",
      ru: "У меня высокая оценка.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:hao3}}-{{word:huai4}}-{{word:de}} {{word:shu4}} {{word:shi4}} {{word:ba1}}-{{word:shi2}}.",
      hanzi: "他的好坏的数是八十。",
      en: "His score is eighty.",
      ru: "У него восемьдесят баллов.",
    },
  ],
});
