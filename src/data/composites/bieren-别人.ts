import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 227,
  phase: 1,
  zh: "别人",
  py: "biérén",
  en: "other people",
  ru: "другие люди",
  pos: "pronoun",
  hsd: ["{{word:bie2}}-{{word:ren2}}", "{{word:bie2}}-{{word:de}} {{word:ren2}}"],
  tts: ["别人", "别的人"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:bie2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}.",
      hanzi: "别人都知道。",
      en: "Everyone else knows.",
      ru: "Все остальные знают.",
    },
    {
      pinyin: "{{Word:bie2}} {{word:na2}} {{word:bie2}}-{{word:ren2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}.",
      hanzi: "别拿别人的东西。",
      en: "Don't take other people's things.",
      ru: "Не бери чужие вещи.",
    },
  ],
});
