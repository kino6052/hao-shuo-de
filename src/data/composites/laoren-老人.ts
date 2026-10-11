import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 457,
  phase: 1,
  zh: "老人",
  py: "lǎorén",
  en: "old person",
  ru: "пожилой человек",
  pos: "noun",
  hsd: ["{{word:lao3}}-{{word:ren2}}"],
  tts: ["老人"],
  literal: "old person",
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:bang1}} {{word:lao3}}-{{word:ren2}} {{word:na2}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "帮老人拿东西。",
      en: "Help the old person carry things.",
      ru: "Помоги пожилому человеку донести вещи.",
    },
    {
      pinyin: "{{Word:lao3}}-{{word:ren2}} {{word:ai4}} {{word:zai4}} {{word:gong1}}-{{word:yuan2}} {{word:zou3}}-{{word:lu4}}.",
      hanzi: "老人爱在公园走路。",
      en: "Old people love walking in the park.",
      ru: "Пожилые люди любят гулять в парке.",
    },
  ],
});
