// To say something is in the middle, use zhōng-jiān (middle + between).
// Pattern: Thing + zài + zhōng-jiān / X-de zhōng-jiān
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "middle",
  words: [
    {
      word: "zhong1",
      en: "middle",
      ru: "середина",
    },
    {
      word: "jian1",
      en: "between",
      ru: "между",
    },
  ],
  prose: {
    en: [
      "**To say something is in the middle**, use {{word:zhong1}}-{{word:jian1}} (middle + between).",
      "",
      "**Thing + {{word:zai4}} + {{word:zhong1}}-{{word:jian1}} / X-{{word:de}} {{word:zhong1}}-{{word:jian1}}**",
      "",
      "It works like {{word:qian2}}-{{word:mian4}} and {{word:pang2bian1}}: {{word:zai4}} {{word:wo3}}-{{word:men}} {{word:zhong1}}-{{word:jian1}}, between us.",
    ],
    ru: [
      "**Чтобы сказать, что что-то посередине**, используйте {{word:zhong1}}-{{word:jian1}} (середина + между).",
      "",
      "**Вещь + {{word:zai4}} + {{word:zhong1}}-{{word:jian1}} / X-{{word:de}} {{word:zhong1}}-{{word:jian1}}**",
      "",
      "Оно работает как {{word:qian2}}-{{word:mian4}} и {{word:pang2bian1}}: {{word:zai4}} {{word:wo3}}-{{word:men}} {{word:zhong1}}-{{word:jian1}} — между нами.",
    ],
    tldr: {
      en: "{{word:zhong1}}-{{word:jian1}} is the middle: {{word:zai4}} {{word:zhong1}}-{{word:jian1}}, in the middle.",
      ru: "{{word:zhong1}}-{{word:jian1}} — середина: {{word:zai4}} {{word:zhong1}}-{{word:jian1}} — посередине.",
    },
    necessity: {
      en: "Now you can say what's in the middle, or between two things.",
      ru: "Теперь вы можете сказать, что находится посередине или между двумя вещами.",
    },
  },
  info: {
    en: "{{word:zai4}} {{word:zhong1}}-{{word:jian1}}, in the middle: {{Word:he2zi}} {{word:zai4}} {{word:zhong1}}-{{word:jian1}}. (The box is in the middle.)",
    ru: "{{word:zai4}} {{word:zhong1}}-{{word:jian1}} — посередине: {{Word:he2zi}} {{word:zai4}} {{word:zhong1}}-{{word:jian1}}. (Коробка посередине.)",
  },
  examples: [
    {
      pinyin: "{{Word:he2zi}} {{word:zai4}} {{word:zhong1}}-{{word:jian1}}.",
      hanzi: "盒子在中间。",
      en: "The box is in the middle.",
      ru: "Коробка посередине.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:zai4}} {{word:wo3}}-{{word:men}} {{word:zhong1}}-{{word:jian1}}.",
      hanzi: "他在我们中间。",
      en: "He's between us.",
      ru: "Он между нами.",
    },
    {
      pinyin: "{{Word:zhong1}}-{{word:jian1}}-{{word:de}} {{word:he2zi}} {{word:hen3}} {{word:da4}}.",
      hanzi: "中间的盒子很大。",
      en: "The box in the middle is big.",
      ru: "Коробка посередине большая.",
    },
    {
      pinyin: "{{Word:jia1}}-{{word:de}} {{word:zhong1}}-{{word:jian1}} {{word:you3}} {{word:zhi2wu4}}.",
      hanzi: "家的中间有植物。",
      en: "There's a plant in the middle of the house.",
      ru: "Посреди дома есть растение.",
    },
  ],
  exercises: [
    {
      en: "Who is in the middle?",
      ru: "Кто посередине?",
      answer: "{{Word:shen2me}} {{word:ren2}} {{word:zai4}} {{word:zhong1}}-{{word:jian1}}?",
      hanzi: "什么人在中间？",
    },
    {
      en: "The box in the middle is small.",
      ru: "Коробка посередине маленькая.",
      answer: "{{Word:zhong1}}-{{word:jian1}}-{{word:de}} {{word:he2zi}} {{word:hen3}} {{word:xiao3}}.",
      hanzi: "中间的盒子很小。",
    },
  ],
});
