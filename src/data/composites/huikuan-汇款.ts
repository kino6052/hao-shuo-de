import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 9091,
  phase: 4,
  zh: "汇款",
  py: "huìkuǎn",
  en: "remit money; remittance",
  ru: "переводить деньги; денежный перевод",
  pos: "verb",
  hsd: [
    "{{word:gei3}} {{word:yuan3}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:ren2}} {{word:jin1}}",
    "{{word:ba3}} {{word:jin1}} {{word:gei3}} {{word:bie2}}-{{word:de}} {{word:di4}}-{{light:fang1}}-{{word:de}} {{word:ren2}}",
  ],
  tts: ["给远的地方的人金", "把金给别的地方的人"],
  literal: "give money to a person in a far place / give money to a person in another place",
  fit: "plain",
  topics: ["bank-and-post"],
  isA: ["trade-action"],
  proposed: true,
});
