// To say things are the same, use yī-yàng. Pattern: Things + yī-yàng /
// yī-yàng-de + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "same",
  words: [
    {
      word: "yang4",
      en: "look, way; {{word:yi1}}-{{word:yang4}}: the same",
      ru: "вид; {{word:yi1}}-{{word:yang4}} — одинаковый",
    },
  ],
  prose: {
    en: [
      "**To say things are the same**, use {{word:yi1}}-{{word:yang4}}.",
      "",
      "**Things + {{word:yi1}}-{{word:yang4}} / {{word:yi1}}-{{word:yang4}}-{{word:de}} + noun**",
    ],
    ru: [
      "**Чтобы сказать, что вещи одинаковые**, используйте {{word:yi1}}-{{word:yang4}}.",
      "",
      "**Вещи + {{word:yi1}}-{{word:yang4}} / {{word:yi1}}-{{word:yang4}}-{{word:de}} + существительное**",
    ],
    tldr: {
      en: "{{word:yi1}}-{{word:yang4}} means the same. {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:he2zi}} is the same box.",
      ru: "{{word:yi1}}-{{word:yang4}} значит «одинаковый». {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:he2zi}} — такая же коробка.",
    },
    necessity: {
      en: "Now you can say two things match.",
      ru: "Теперь вы можете сказать, что две вещи совпадают.",
    },
  },
  info: {
    en: "{{word:yi1}}-{{word:yang4}}, the same: {{Word:ta1}}-{{word:men}} {{word:yi1}}-{{word:yang4}}. (They're the same.)",
    ru: "{{word:yi1}}-{{word:yang4}} — одинаковый: {{Word:ta1}}-{{word:men}} {{word:yi1}}-{{word:yang4}}. (Они одинаковые.)",
  },
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "他们一样。",
      en: "They're the same.",
      ru: "Они одинаковые.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}}-{{word:de}} {{word:yi1fu}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "我们的衣服一样。",
      en: "Our clothes are the same.",
      ru: "У нас одинаковая одежда.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:xian4}}.",
      hanzi: "我要一样的线。",
      en: "I want the same thread.",
      ru: "Мне нужна такая же нитка.",
    },
  ],
  exercises: [
    {
      en: "Their homes are the same.",
      ru: "Их дома одинаковые.",
      answer: "{{Word:ta1}}-{{word:men}}-{{word:de}} {{word:jia1}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "他们的家一样。",
    },
  ],
});
