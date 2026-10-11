import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 591,
  phase: 2,
  zh: "根据",
  py: "gēnjù",
  en: "according to",
  ru: "согласно",
  pos: "verb",
  hsd: ["{{word:yong4}} X"],
  tts: ["用X"],
  literal: "using X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:yong4}} {{word:ni3}}-{{word:de}} {{word:hua4}}, {{word:wo3}} {{word:zhi1dao4}} {{word:ta1}} {{word:bu4}} {{word:lai2}}.",
      hanzi: "用你的话，我知道他不来。",
      en: "From what you said, I know he isn't coming.",
      ru: "По твоим словам я знаю, что он не придёт.",
    },
    {
      pinyin: "{{Word:yong4}} {{word:zhe4}}-{{light:ge4}}, {{word:wo3}} {{word:zhi1dao4}} {{word:ta1}} {{word:zai4}} {{word:jia1}}.",
      hanzi: "用这个，我知道他在家。",
      en: "From this, I know he's at home.",
      ru: "По этому я знаю, что он дома.",
    },
  ],
});
