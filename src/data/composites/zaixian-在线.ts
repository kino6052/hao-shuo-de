import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 629,
  phase: 2,
  zh: "在线",
  py: "zàixiàn",
  en: "online",
  ru: "онлайн",
  pos: "verb",
  hsd: [
    "{{word:zai4}}-{{word:xian4}}",
    "{{word:wang3}}-{{word:shang4}}",
    "{{word:zai4}} {{word:wang3}}-{{word:shang4}}",
  ],
  tts: ["在线", "网上", "在网上"],
  literal: "on the line / on the net",
  fit: "natural",
  kinds: ["built", "built", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:zai4}} {{word:wang3}}-{{word:shang4}}.",
      hanzi: "我在网上。",
      en: "I'm online.",
      ru: "Я в сети.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:zai4}} {{word:wang3}}-{{word:shang4}} {{word:ma}}?",
      hanzi: "你在网上吗？",
      en: "Are you online?",
      ru: "Ты в сети?",
    },
  ],
});
