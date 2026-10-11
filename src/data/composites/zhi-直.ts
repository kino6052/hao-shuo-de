import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 682,
  phase: 2,
  zh: "直",
  py: "zhí",
  en: "straight",
  ru: "прямой",
  pos: "adjective",
  hsd: [
    "{{word:he2}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:yi1}}-{{word:yang4}}",
  ],
  tts: ["和长的东西一样"],
  literal: "like a stick",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:lu4}} {{word:he2}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "这个路和长的东西一样。",
      en: "This road is straight.",
      ru: "Эта дорога прямая.",
    },
    {
      pinyin: "{{Word:na4}}-{{light:ge4}} {{word:lu4}} {{word:he2}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "那个路和长的东西一样。",
      en: "That road is straight.",
      ru: "Та дорога прямая.",
    },
  ],
});
