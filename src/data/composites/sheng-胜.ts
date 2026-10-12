import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1401,
  phase: 3,
  zh: "胜",
  py: "shèng",
  en: "win",
  ru: "побеждать",
  pos: "verb",
  hsd: [
    "{{word:na2}}-{{word:dao4}} {{word:bi3}} {{word:bie2}} {{word:ren2}} {{word:hao3}}-{{word:de}} {{word:jie2}}-{{word:guo3}}",
  ],
  tts: ["拿到比别人好的结果"],
  literal: "get a result better than other people's",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:na2}}-{{word:dao4}} {{word:bi3}} {{word:bie2}} {{word:ren2}} {{word:hao3}}-{{word:de}} {{word:jie2}}-{{word:guo3}} {{word:le}}.",
      hanzi: "我拿到比别人好的结果了。",
      en: "I won: my result is better than the others'.",
      ru: "Я победил: мой результат лучше, чем у других.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:na2}}-{{word:dao4}} {{word:bi3}} {{word:bie2}} {{word:ren2}} {{word:hao3}}-{{word:de}} {{word:jie2}}-{{word:guo3}}, {{word:hen3}} {{word:kai1}}-{{word:xin1}}.",
      hanzi: "他拿到比别人好的结果，很开心。",
      en: "He won and is very happy.",
      ru: "Он победил и очень рад.",
    },
  ],
});
