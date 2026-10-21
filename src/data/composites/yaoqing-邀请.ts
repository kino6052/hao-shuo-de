import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1432,
  phase: 3,
  zh: "邀请",
  py: "yāoqǐng",
  en: "invite",
  ru: "приглашать",
  pos: "verb",
  hsd: ["{{word:jiao4}} X {{word:lai2}}"],
  tts: ["叫X来"],
  literal: "ask X to come",
  fit: "plain",
  topics: ["parties-and-gifts"],
  isA: ["social-action"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:jiao4}} {{word:ni3}} {{word:lai2}}.",
      hanzi: "我叫你来。",
      en: "I invite you.",
      ru: "Я приглашаю тебя.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jiao4}} {{word:wo3}}-{{word:men}} {{word:lai2}}.",
      hanzi: "他叫我们来。",
      en: "He invites us.",
      ru: "Он приглашает нас.",
    },
  ],
});
