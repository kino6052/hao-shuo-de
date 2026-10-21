import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 8249,
  phase: 4,
  zh: "流量",
  py: "liúliàng",
  en: "flow (amount); traffic; data usage",
  ru: "поток; трафик",
  pos: "noun",
  hsd: [
    "{{word:dong4}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:you3}} {{word:duo1}}-{{word:shao3}}",
    "{{word:wang3}}-{{word:shang4}} {{word:yong4}}-{{word:le}} {{word:duo1}}-{{word:shao3}}",
  ],
  tts: ["动的东西有多少", "网上用了多少"],
  literal: "how much of the moving thing there is / how much was used on the net",
  fit: "plain",
  topics: ["internet-and-websites"],
  isA: ["how-much"],
  proposed: true,
});
