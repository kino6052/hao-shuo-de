import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 593,
  phase: 2,
  zh: "环境",
  py: "huánjìng",
  en: "environment",
  ru: "окружение",
  pos: "noun",
  hsd: [
    "{{word:zai4}} {{word:wo3}}-{{word:men}} {{word:pang2bian1}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["在我们旁边的东西"],
  literal: "the things around us",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zai4}} {{word:wo3}}-{{word:men}} {{word:pang2bian1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:hen3}} {{word:gan1jing4}}.",
      hanzi: "在我们旁边的东西很干净。",
      en: "The environment around us is clean.",
      ru: "Окружающая среда у нас чистая.",
    },
    {
      pinyin: "{{Word:zai4}} {{word:wo3}}-{{word:men}} {{word:pang2bian1}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bu4}} {{word:hao3}}.",
      hanzi: "在我们旁边的东西不好。",
      en: "The environment around us isn't good.",
      ru: "Окружающая среда у нас нехорошая.",
    },
  ],
});
