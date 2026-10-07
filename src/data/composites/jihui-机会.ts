import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 317,
  phase: 1,
  zh: "机会",
  py: "jīhuì",
  en: "opportunity",
  ru: "возможность",
  pos: "noun",
  hsd: ["{{word:ji1}}-{{word:hui4}}", "X-{{word:de}} {{word:ke3}}-{{word:neng2}}"],
  tts: ["机会", "X的可能"],
  literal: "machine-will / the maybe of X",
  fit: "natural",
  note: "Put what you could do first: qù-de kě-néng, a chance to go.",
  examples: [
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:yi1}}-{{light:ge4}} {{word:hao3}} {{word:ji1}}-{{word:hui4}}.",
      hanzi: "这是一个好机会。",
      en: "This is a good opportunity.",
      ru: "Это хорошая возможность.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:qu4}} \"Zhōngguó\"-{{word:de}} {{word:ke3}}-{{word:neng2}}.",
      hanzi: "我有去中国的可能。",
      en: "I have a chance to go to China.",
      ru: "У меня есть возможность поехать в Китай.",
    },
  ],
});
