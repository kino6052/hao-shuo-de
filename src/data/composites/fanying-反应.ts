import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1053,
  phase: 3,
  zh: "反应",
  py: "fǎnyìng",
  en: "reaction",
  ru: "реакция",
  pos: "verb",
  hsd: ["{{word:kan4}}-{{word:dao4}} X {{word:hou4}} {{word:zuo4}}-{{word:de}}"],
  tts: ["看到X后做的"],
  literal: "what you do after seeing X",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:dao4}} {{word:ta1}} {{word:hou4}} {{word:zuo4}}-{{word:de}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "我看到他后做得很快。",
      en: "I reacted fast on seeing him.",
      ru: "Увидев его, я быстро среагировал.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:kan4}}-{{word:dao4}} {{word:ni3}} {{word:hou4}} {{word:zuo4}}-{{word:de}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他看到你后做得很好。",
      en: "He reacted well on seeing you.",
      ru: "Увидев тебя, он среагировал хорошо.",
    },
  ],
});
