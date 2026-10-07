import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 199,
  phase: 1,
  zh: "纸",
  py: "zhǐ",
  en: "paper",
  ru: "бумага",
  pos: "noun",
  hsd: ["{{word:xie3}}-{{word:de}} {{word:mian4}}r"],
  tts: ["写的面儿"],
  literal: "the surface you write on",
  fit: "plain",
  examples: [
    {
      pinyin: "{{Word:gei3}} {{word:wo3}} {{word:yi1}}-{{light:ge4}} {{word:xie3}}-{{word:de}} {{word:mian4}}r.",
      hanzi: "给我一个写的面儿。",
      en: "Give me a sheet of paper.",
      ru: "Дай мне лист бумаги.",
    },
    {
      pinyin: "{{Word:xie3}}-{{word:de}} {{word:mian4}}r-{{word:shang4}} {{word:you3}} {{word:zi4}}.",
      hanzi: "写的面儿上有字。",
      en: "There's writing on the paper.",
      ru: "На бумаге что-то написано.",
    },
  ],
});
