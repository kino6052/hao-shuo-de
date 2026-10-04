// To say every, say a counting word or a few nouns twice, with dōu before the
// verb. Pattern: gè-gè / rén-rén + dōu + verb
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "every",
  prose: {
    en: [
      "**To say every**, say a counting word, or one of a few nouns, twice. Put {{word:dou1}} before the verb.",
      "",
      "**{{word:ge4}}-{{word:ge4}} / {{word:ren2}}-{{word:ren2}} + {{word:dou1}} + verb**",
      "",
      "{{word:ren2}}-{{word:ren2}} is everyone, {{word:jia1}}-{{word:jia1}} is every home, {{word:ge4}}-{{word:ge4}} is every one, and {{word:ci4}}-{{word:ci4}} is every time. Most nouns can't be doubled.",
    ],
    ru: [
      "**Чтобы сказать «каждый»**, скажите счётное слово или одно из немногих существительных два раза. Перед глаголом поставьте {{word:dou1}}.",
      "",
      "**{{word:ge4}}-{{word:ge4}} / {{word:ren2}}-{{word:ren2}} + {{word:dou1}} + глагол**",
      "",
      "{{word:ren2}}-{{word:ren2}} — все люди, {{word:jia1}}-{{word:jia1}} — каждый дом, {{word:ge4}}-{{word:ge4}} — каждый, а {{word:ci4}}-{{word:ci4}} — каждый раз. Большинство существительных удваивать нельзя.",
    ],
    tldr: {
      en: "Say {{word:ren2}} or {{word:ge4}} twice, with {{word:dou1}}, for every: {{word:ren2}}-{{word:ren2}} {{word:dou1}}.",
      ru: "Скажите {{word:ren2}} или {{word:ge4}} дважды, с {{word:dou1}}, — это «каждый»: {{word:ren2}}-{{word:ren2}} {{word:dou1}}.",
    },
    necessity: { en: "Now you can say every one of them.", ru: "Теперь вы можете сказать «каждый из них»." },
  },
  info: {
    en: "{{word:ren2}}-{{word:ren2}} / {{word:ge4}}-{{word:ge4}} + {{word:dou1}}, every: {{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}}. (Everyone needs water.)",
    ru: "{{word:ren2}}-{{word:ren2}} / {{word:ge4}}-{{word:ge4}} + {{word:dou1}} — каждый: {{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}}. (Всем людям нужна вода.)",
  },
  examples: [
    {
      pinyin: "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:yao4}} {{word:shui3}}.",
      hanzi: "人人都要水。",
      en: "Everyone needs water.",
      ru: "Всем людям нужна вода.",
    },
    {
      pinyin: "{{Word:ge4}}-{{word:ge4}} {{word:dou1}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "个个都很好。",
      en: "Every one of them is good.",
      ru: "Каждый из них хороший.",
    },
    {
      pinyin: "{{Word:jia1}}-{{word:jia1}} {{word:dou1}} {{word:you3}} {{word:huo3}}.",
      hanzi: "家家都有火。",
      en: "Every home has a fire.",
      ru: "В каждом доме есть огонь.",
    },
    {
      pinyin: "{{Word:ci4}}-{{word:ci4}} {{word:dou1}} {{word:yi1yang4}}.",
      hanzi: "次次都一样。",
      en: "It's the same every time.",
      ru: "Каждый раз одно и то же.",
    },
    {
      pinyin: "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:xiao4}} {{word:le}}.",
      hanzi: "人人都笑了。",
      en: "Everyone laughed.",
      ru: "Все засмеялись.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:jiao4}} {{word:shen2me}}? {{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:zhi1dao4}}.",
      hanzi: "他叫什么？人人都知道。",
      en: "What's his name? Everyone knows.",
      ru: "Как его зовут? Это все знают.",
    },
  ],
  exercises: [
    {
      en: "Everyone has money.",
      ru: "У всех есть деньги.",
      answer: "{{Word:ren2}}-{{word:ren2}} {{word:dou1}} {{word:you3}} {{word:jin1}}.",
      hanzi: "人人都有金。",
    },
    {
      en: "It's different every time.",
      ru: "Каждый раз по-другому.",
      answer: "{{Word:ci4}}-{{word:ci4}} {{word:dou1}} {{word:bu4tong2}}.",
      hanzi: "次次都不同。",
    },
  ],
});
