import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 757,
  phase: 2,
  zh: "按",
  py: "àn",
  en: "press; according to",
  ru: "нажимать; согласно",
  pos: "verb",
  hsd: ["{{word:yong4}} {{word:shou3}} {{word:zuo4}}", "{{word:yong4}} X"],
  tts: ["用手做", "用X"],
  literal: "work it with your hand / using X",
  fit: "plain",
  topics: ["pushing-and-pulling"],
  isA: ["handling-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yong4}} {{word:shou3}} {{word:zuo4}} {{word:zhe4}}-{{light:ge4}}.",
      hanzi: "我用手做这个。",
      en: "I press this.",
      ru: "Я нажимаю на это.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:yong4}} {{word:shou3}} {{word:zuo4}} {{word:na4}}-{{light:ge4}}.",
      hanzi: "你用手做那个。",
      en: "You press that.",
      ru: "Ты нажимаешь на то.",
    },
  ],
});
