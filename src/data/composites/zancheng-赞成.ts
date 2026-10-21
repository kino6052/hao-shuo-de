import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1419,
  phase: 3,
  zh: "赞成",
  py: "zànchéng",
  en: "approve, agree",
  ru: "одобрять",
  pos: "verb",
  hsd: ["{{word:jue2}}-{{light:de2}} {{word:yi1}}-{{word:yang4}}"],
  tts: ["觉得一样"],
  literal: "feel the same",
  fit: "plain",
  topics: ["agreeing-and-allowing"],
  isA: ["speaking-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jue2}}-{{word:de2}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "我觉得一样。",
      en: "I agree.",
      ru: "Я согласен.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:he2}} {{word:ta1}} {{word:jue2}}-{{word:de2}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "我和他觉得一样。",
      en: "He and I agree.",
      ru: "Мы с ним согласны.",
    },
  ],
});
