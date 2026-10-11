import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 549,
  phase: 2,
  zh: "遇见",
  py: "yùjiàn",
  en: "meet",
  ru: "встретить",
  pos: "verb",
  hsd: ["{{word:mei2}} {{word:xiang3}}-{{word:dao4}} {{word:hui4}} {{word:kan4}}-{{word:dao4}}"],
  tts: ["没想到会看到"],
  literal: "didn't think I'd see",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:mei2}} {{word:xiang3}}-{{word:dao4}} {{word:hui4}} {{word:kan4}}-{{word:dao4}} {{word:ni3}}.",
      hanzi: "我没想到会看到你。",
      en: "I didn't expect to run into you.",
      ru: "Я не думал, что встречу тебя.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:mei2}} {{word:xiang3}}-{{word:dao4}} {{word:hui4}} {{word:kan4}}-{{word:dao4}} {{word:wo3}}-{{word:de}} {{word:ma1ma}}.",
      hanzi: "他没想到会看到我的妈妈。",
      en: "He didn't expect to run into my mom.",
      ru: "Он не думал, что встретит мою маму.",
    },
  ],
});
