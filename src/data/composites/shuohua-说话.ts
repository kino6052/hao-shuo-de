import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 205,
  phase: 1,
  zh: "说话",
  py: "shuōhuà",
  en: "talk",
  ru: "говорить",
  pos: "verb",
  hsd: ["{{word:shuo1}}-{{word:hua4}}", "{{word:shuo1}}"],
  tts: ["说话", "说"],
  fit: "natural",
  examples: [
    {
      pinyin: "{{Word:bie2}} {{word:shuo1}}-{{word:hua4}}!",
      hanzi: "别说话！",
      en: "Don't talk!",
      ru: "Не разговаривай!",
    },
    {
      pinyin: "{{Word:ta1}} {{word:he2}} {{word:wo3}} {{word:shuo1}}-{{word:hua4}}.",
      hanzi: "他和我说话。",
      en: "He talks with me.",
      ru: "Он разговаривает со мной.",
    },
  ],
});
