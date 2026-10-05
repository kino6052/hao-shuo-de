// To say everything, put shénme-dōu before the verb. Pattern: Who +
// shénme-dōu + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "everything",
  prose: {
    en: [
      "**To say everything**, put {{word:shen2me}}-{{word:dou1}} before the verb.",
      "",
      "**Who + {{word:shen2me}}-{{word:dou1}} + verb**",
      "",
      "With {{word:bu4}} or {{word:mei2}}, it means nothing: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:bu4}} {{word:yao4}}, I don't want anything.",
      "{{word:na3}}-{{word:li3}}-{{word:dou1}} means everywhere.",
    ],
    ru: [
      "**Чтобы сказать «всё»**, поставьте {{word:shen2me}}-{{word:dou1}} перед глаголом.",
      "",
      "**Кто + {{word:shen2me}}-{{word:dou1}} + глагол**",
      "",
      "С {{word:bu4}} или {{word:mei2}} это значит «ничего», как в русском «ничего не хочу»: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:bu4}} {{word:yao4}} — я ничего не хочу.",
      "{{word:na3}}-{{word:li3}}-{{word:dou1}} значит «везде».",
    ],
    tldr: {
      en: "{{word:shen2me}}-{{word:dou1}} + verb: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}, I eat everything.",
      ru: "{{word:shen2me}}-{{word:dou1}} + глагол: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}} — я ем всё.",
    },
    necessity: {
      en: "Now you can say everything, and nothing.",
      ru: "Теперь вы можете сказать «всё» и «ничего».",
    },
  },
  info: {
    en: "{{word:shen2me}}-{{word:dou1}} + verb, everything: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}. (I eat everything.) With {{word:bu4}}: nothing. {{word:na3}}-{{word:li3}}-{{word:dou1}}: everywhere.",
    ru: "{{word:shen2me}}-{{word:dou1}} + глагол — всё: {{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}. (Я ем всё.) С {{word:bu4}} — ничего. {{word:na3}}-{{word:li3}}-{{word:dou1}} — везде.",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}.",
      hanzi: "我什么都吃。",
      en: "I eat everything.",
      ru: "Я ем всё.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shen2me}}-{{word:dou1}} {{word:zhi1dao4}}.",
      hanzi: "他什么都知道。",
      en: "He knows everything.",
      ru: "Он всё знает.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:bu4}} {{word:yao4}}.",
      hanzi: "我什么都不要。",
      en: "I don't want anything.",
      ru: "Я ничего не хочу.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:shen2me}}-{{word:dou1}} {{word:mei2}} {{word:kan4}}-{{word:dao4}}.",
      hanzi: "他什么都没看到。",
      en: "He didn't see anything.",
      ru: "Он ничего не увидел.",
    },
    {
      pinyin: "{{Word:na3}}-{{word:li3}}-{{word:dou1}} {{word:you3}} {{word:kong1}}-{{word:qi4}}.",
      hanzi: "哪里都有空气。",
      en: "There's air everywhere.",
      ru: "Воздух есть везде.",
    },
  ],
  exercises: [
    {
      en: "I eat everything.",
      ru: "Я ем всё.",
      answer: "{{Word:wo3}} {{word:shen2me}}-{{word:dou1}} {{word:chi1}}.",
      hanzi: "我什么都吃。",
    },
  ],
});
