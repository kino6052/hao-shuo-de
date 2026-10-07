import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 168,
  phase: 1,
  zh: "女人",
  py: "nǚrén",
  en: "woman",
  ru: "женщина",
  pos: "noun",
  hsd: ["{{word:nv3}}-{{word:ren2}}"],
  tts: ["女人"],
  fit: "natural",
  transparent: true,
  examples: [
    {
      pinyin: "{{Word:zhe4}}-{{light:ge4}} {{word:nv3}}-{{word:ren2}} {{word:hen3}} {{word:gao1}}.",
      hanzi: "这个女人很高。",
      en: "This woman is tall.",
      ru: "Эта женщина высокая.",
    },
    {
      pinyin: "{{Word:nv3}}-{{word:ren2}} {{word:he2}} {{word:nan2}}-{{word:ren2}} {{word:dou1}} {{word:lai2}} {{word:le}}.",
      hanzi: "女人和男人都来了。",
      en: "Both women and men came.",
      ru: "Пришли и женщины, и мужчины.",
    },
  ],
});
