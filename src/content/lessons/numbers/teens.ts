// To say numbers above ten, put shí (ten) before or after the other number.
// Pattern: shí + number (11-19) / number + shí (20, 30 …)
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "teens",
  words: [
    {
      word: "ling2",
      en: "zero",
      ru: "ноль",
    },
  ],
  prose: {
    en: [
      "**To say numbers above ten**, put {{word:shi2}} (ten) before or after the other number.",
      "",
      "**{{word:shi2}} + number (11-19) / number + {{word:shi2}} (20, 30 …)**",
      "",
      "{{word:shi2}}-{{word:er4}} is 12 (ten and two). {{word:er4}}-{{word:shi2}} is 20 (two tens).",
      "Past ninety-nine, say the digits one by one, with {{word:ling2}} for zero: {{word:yi1}}-{{word:ling2}}-{{word:ling2}} is 100, {{word:er4}}-{{word:ling2}}-{{word:ling2}} is 200. Years are said the same way.",
    ],
    ru: [
      "**Чтобы назвать числа больше десяти**, поставьте {{word:shi2}} (десять) перед другим числом или после него.",
      "",
      "**{{word:shi2}} + число (11–19) / число + {{word:shi2}} (20, 30 …)**",
      "",
      "{{word:shi2}}-{{word:er4}} — это 12 (десять и два). {{word:er4}}-{{word:shi2}} — это 20 (два десятка).",
      "После девяноста девяти называйте цифры по одной, а ноль — {{word:ling2}}: {{word:yi1}}-{{word:ling2}}-{{word:ling2}} — это 100, {{word:er4}}-{{word:ling2}}-{{word:ling2}} — 200. Годы называют так же.",
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
      pinyin: "{{Word:san1}}-{{word:shi2}}-ge {{word:bao1}}.",
      hanzi: "三十个包。",
      en: "Thirty bags.",
      ru: "Тридцать сумок.",
    },
    {
      pinyin: "{{Word:er4}}-{{word:ling2}}-{{word:ling2}}.",
      hanzi: "二零零。",
      en: "Two hundred.",
      ru: "Двести.",
    },
    {
      pinyin: "{{Word:er4}}-{{word:ling2}}-{{word:er4}}-{{word:liu4}} {{word:nian2}}.",
      hanzi: "二零二六年。",
      en: "The year 2026.",
      ru: "2026 год.",
    },
  ],
  exercises: [
    {
      en: "twelve people",
      ru: "двенадцать человек",
      answer: "{{Word:shi2}}-{{word:er4}}-ge {{word:ren2}}.",
      hanzi: "十二个人。",
    },
    {
      en: "Three hundred (digit by digit).",
      ru: "Триста (по цифрам).",
      answer: "{{Word:san1}}-{{word:ling2}}-{{word:ling2}}.",
      hanzi: "三零零。",
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
