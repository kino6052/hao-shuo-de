// To say numbers above ten, put shí (ten) before or after the other number.
// Pattern: shí + number (11-19) / number + shí (20, 30 …)
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "teens",
  prose: {
    en: [
      "**To say numbers above ten**, put {{word:shi2}} (ten) before or after the other number.",
      "",
      "**{{word:shi2}} + number (11-19) / number + {{word:shi2}} (20, 30 …)**",
      "",
      "{{word:shi2}}-{{word:er4}} is 12 (ten and two). {{word:er4}}-{{word:shi2}} is 20 (two tens).",
    ],
    ru: [
      "**Чтобы назвать числа больше десяти**, поставьте {{word:shi2}} (десять) перед другим числом или после него.",
      "",
      "**{{word:shi2}} + число (11–19) / число + {{word:shi2}} (20, 30 …)**",
      "",
      "{{word:shi2}}-{{word:er4}} — это 12 (десять и два). {{word:er4}}-{{word:shi2}} — это 20 (два десятка).",
    ],
    tldr: {
      en: "{{word:shi2}}-{{word:er4}} is 12. {{word:er4}}-{{word:shi2}} is 20.",
      ru: "{{word:shi2}}-{{word:er4}} — это 12. {{word:er4}}-{{word:shi2}} — это 20.",
    },
    necessity: { en: "Now you can count past ten.", ru: "Теперь вы можете считать дальше десяти." },
  },
  info: {
    en: "Above ten: {{word:shi2}}-{{word:er4}} (12), {{word:er4}}-{{word:shi2}} (20)",
    ru: "Больше десяти: {{word:shi2}}-{{word:er4}} (12), {{word:er4}}-{{word:shi2}} (20)",
  },
  examples: [
    {
      pinyin: "{{Word:shi2}}-{{word:yi1}}-ge {{word:ren2}}.",
      hanzi: "十一个人。",
      en: "Eleven people.",
      ru: "Одиннадцать человек.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:shi2}}-{{word:san1}}-ge {{word:gong1}}-{{word:ju4}}.",
      hanzi: "我有十三个工具。",
      en: "I have thirteen tools.",
      ru: "У меня тринадцать инструментов.",
    },
    {
      pinyin: "{{Word:shi2}}-{{word:wu3}}-ge {{word:dong4}}-{{word:wu4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "十五个动物在这里。",
      en: "Fifteen animals are here.",
      ru: "Здесь пятнадцать животных.",
    },
    {
      pinyin: "{{Word:shi2}}-{{word:er4}}-ge {{word:zhi2wu4}}.",
      hanzi: "十二个植物。",
      en: "Twelve plants.",
      ru: "Двенадцать растений.",
    },
    {
      pinyin: "{{Word:er4}}-{{word:shi2}}-ge {{word:ren2}}.",
      hanzi: "二十个人。",
      en: "Twenty people.",
      ru: "Двадцать человек.",
    },
    {
      pinyin: "{{Word:san1}}-{{word:shi2}}-ge {{word:he2zi}}.",
      hanzi: "三十个盒子。",
      en: "Thirty boxes.",
      ru: "Тридцать коробок.",
    },
  ],
  exercises: [
    {
      en: "twelve people",
      ru: "двенадцать человек",
      answer: "{{Word:shi2}}-{{word:er4}}-ge {{word:ren2}}.",
      hanzi: "十二个人。",
    },
  ],
  faq: [
    // èr in 12 and 20, even with things
    {
      question: {
        en: "Do I say {{word:liang3}} in 12 or 20 too?",
        ru: "{{word:liang3}} говорят и в 12 или 20?",
      },
      en: "No. Inside a bigger number, use {{word:er4}}, even with things: {{word:shi2}}-{{word:er4}}-ge {{word:ren2}} (12 people). {{word:liang3}} is only for two on its own.",
      ru: "Нет. Внутри большого числа говорите {{word:er4}}, даже с вещами: {{word:shi2}}-{{word:er4}}-ge {{word:ren2}} (12 человек). {{word:liang3}} — только для «два» самого по себе.",
    },
  ],
});
