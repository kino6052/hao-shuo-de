import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 23,
  phase: 1,
  zh: "三",
  py: "sān",
  en: "three",
  ru: "три",
  pos: "number",
  hsd: ["{{word:san1}}"],
  tts: ["三"],
  fit: "word",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:san1}} {{word:tian1}} {{word:hou4}} {{word:hui2}}-{{word:lai2}}.",
      hanzi: "他三天后回来。",
      en: "He'll be back in three days.",
      ru: "Он вернётся через три дня.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:san1}}-{{light:ge4}} {{word:ren2}} {{word:yi1}}-{{word:qi3}} {{word:qu4}}.",
      hanzi: "我们三个人一起去。",
      en: "The three of us go together.",
      ru: "Мы втроём идём вместе.",
    },
  ],
});
