import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 363,
  phase: 1,
  zh: "危险",
  py: "wēixiǎn",
  en: "dangerous",
  ru: "опасный",
  pos: "adjective",
  hsd: ["{{word:ke3}}-{{word:neng2}} {{word:hui4}} {{word:si3}}"],
  tts: ["可能会死"],
  literal: "you might die",
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:bie2}} {{word:qu4}} {{word:na4}}-{{word:li3}}, {{word:ke3}}-{{word:neng2}} {{word:hui4}} {{word:si3}}!",
      hanzi: "别去那里，可能会死！",
      en: "Don't go there, it's dangerous!",
      ru: "Не ходи туда, это опасно!",
    },
    {
      pinyin: "{{Word:zai4}} {{word:lu4}} {{word:zhong1}}-{{word:jian1}} {{word:wan2r}}, {{word:ke3}}-{{word:neng2}} {{word:hui4}} {{word:si3}}.",
      hanzi: "在路中间玩儿，可能会死。",
      en: "Playing in the road is dangerous.",
      ru: "Играть на дороге опасно.",
    },
  ],
});
