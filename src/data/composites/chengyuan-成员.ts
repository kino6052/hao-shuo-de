import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1096,
  phase: 3,
  zh: "成员",
  py: "chéngyuán",
  en: "member",
  ru: "член (группы)",
  pos: "noun",
  hsd: ["{{word:shi4}} X {{word:ren2}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}"],
  tts: ["是X人的一部分"],
  literal: "be a part of X's people",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:shi4}} {{word:wo3}}-{{word:men}} {{word:ren2}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "他是我们人的一部分。",
      en: "He is a member of ours.",
      ru: "Он наш член.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shi4}} {{word:ta1}}-{{word:men}} {{word:ren2}}-{{word:de}} {{word:yi1}} {{word:bu4}}-{{light:fen1}}.",
      hanzi: "我是他们人的一部分。",
      en: "I am a member of theirs.",
      ru: "Я их член.",
    },
  ],
});
