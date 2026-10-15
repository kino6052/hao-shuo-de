import { composite } from "../../lib/composite.ts";

export default composite({
  rank: 676,
  phase: 2,
  zh: "活动",
  py: "huódòng",
  en: "activity",
  ru: "мероприятие",
  pos: "verb",
  hsd: [
    "{{word:huo2}}-{{word:dong4}}",
    "{{word:yi1}}-{{word:qi3}} {{word:zuo4}}-{{word:de}} {{word:dong1}}-{{light:xi1}}",
  ],
  tts: ["活动", "一起做的东西"],
  literal: "live-move / something done together",
  fit: "natural",
  kinds: ["built", "built"],
  examples: [
    {
      pinyin: "{{Word:wo3}}-{{word:men}} {{word:yi1}}-{{word:qi3}} {{word:huo2}}-{{word:dong4}}.",
      hanzi: "我们一起活动。",
      en: "Let's be active together.",
      ru: "Давай подвигаемся вместе.",
    },
    {
      pinyin: "{{Word:xiao3}}-{{word:hai2}}-{{word:zi}} {{word:ai4}} {{word:huo2}}-{{word:dong4}}.",
      hanzi: "小孩子爱活动。",
      en: "Children love to be active.",
      ru: "Дети любят двигаться.",
    },
  ],
});
