import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1033,
  phase: 3,
  zh: "使",
  py: "shǐ",
  en: "make, cause",
  ru: "заставлять, вызывать",
  pos: "verb",
  hsd: ["{{word:rang4}} X …"],
  tts: ["让X…"],
  literal: "let X do it",
  fit: "plain",
  topics: ["causes-and-results"],
  isA: ["cause-and-effect"],
  note: "Or bǎ X zuò + adjective.",
  examples: [
    {
      pinyin: "{{Word:ta1}} {{word:rang4}} {{word:wo3}} {{word:xiao4}}.",
      hanzi: "他让我笑。",
      en: "He makes me laugh.",
      ru: "Он заставляет меня смеяться.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:rang4}} {{word:wo3}} {{word:pa4}}.",
      hanzi: "这让我怕。",
      en: "This makes me afraid.",
      ru: "Это пугает меня.",
    },
  ],
});
