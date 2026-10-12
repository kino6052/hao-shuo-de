import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 1081,
  phase: 3,
  zh: "平台",
  py: "píngtái",
  en: "platform",
  ru: "платформа",
  pos: "noun",
  hsd: [
    "{{word:zai4}}-{{word:wang3}}-{{word:shang4}}-{{word:de}} {{word:di4}}-{{light:fang1}}",
    "{{word:gao1}}-{{word:de}} {{word:di4}}",
  ],
  tts: ["在网上的地方", "高的地"],
  literal: "a place online / raised ground",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:zai4}} {{word:wang3}}-{{word:shang4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:kan4}}.",
      hanzi: "我们在网上的地方看。",
      en: "We watch on the platform.",
      ru: "Мы смотрим на платформе.",
    },
    {
      pinyin: "{{Word:zai4}} {{word:wang3}}-{{word:shang4}}-{{word:de}} {{word:di4}}-{{light:fang1}} {{word:you3}} {{word:hen3}} {{word:duo1}} {{word:ren2}}.",
      hanzi: "在网上的地方有很多人。",
      en: "There are many people on the platform.",
      ru: "На платформе много людей.",
    },
  ],
});
