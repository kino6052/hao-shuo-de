// To count out loud, say the numbers in order. Pattern: yī, èr, sān, sì, wǔ …
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "aloud",
  words: [
    {
      term: "{{word:yi1}}",
      hanzi: "一",
      en: "one",
      ru: "один",
    },
    {
      term: "{{word:er4}}",
      hanzi: "二",
      en: "two (counting, number two, 12, 20)",
      ru: "два (при счёте, номер два, 12, 20)",
    },
    {
      term: "{{word:san1}}",
      hanzi: "三",
      en: "three",
      ru: "три",
    },
    {
      term: "{{word:si4}}",
      hanzi: "四",
      en: "four",
      ru: "четыре",
    },
    {
      term: "{{word:wu3}}",
      hanzi: "五",
      en: "five",
      ru: "пять",
    },
    {
      term: "{{word:liu4}}",
      hanzi: "六",
      en: "six",
      ru: "шесть",
    },
    {
      term: "{{word:qi1}}",
      hanzi: "七",
      en: "seven",
      ru: "семь",
    },
    {
      term: "{{word:ba1}}",
      hanzi: "八",
      en: "eight",
      ru: "восемь",
    },
    {
      term: "{{word:jiu3}}",
      hanzi: "九",
      en: "nine",
      ru: "девять",
    },
    {
      term: "{{word:shi2}}",
      hanzi: "十",
      en: "ten",
      ru: "десять",
    },
  ],
  prose: {
    en: [
      "**To count out loud**, say the numbers in order.",
      "",
      "**{{word:yi1}}, {{word:er4}}, {{word:san1}}, {{word:si4}}, {{word:wu3}} …**",
      "",
      "1 {{word:yi1}}, 2 {{word:er4}}, 3 {{word:san1}}, 4 {{word:si4}}, 5 {{word:wu3}}, 6 {{word:liu4}}, 7 {{word:qi1}}, 8 {{word:ba1}}, 9 {{word:jiu3}}, 10 {{word:shi2}}.",
    ],
    ru: [
      "**Чтобы считать вслух**, называйте числа по порядку.",
      "",
      "**{{word:yi1}}, {{word:er4}}, {{word:san1}}, {{word:si4}}, {{word:wu3}} …**",
      "",
      "1 {{word:yi1}}, 2 {{word:er4}}, 3 {{word:san1}}, 4 {{word:si4}}, 5 {{word:wu3}}, 6 {{word:liu4}}, 7 {{word:qi1}}, 8 {{word:ba1}}, 9 {{word:jiu3}}, 10 {{word:shi2}}.",
    ],
    tldr: {
      en: "Count {{word:yi1}}, {{word:er4}}, {{word:san1}} … {{word:shi2}}.",
      ru: "Считайте: {{word:yi1}}, {{word:er4}}, {{word:san1}} … {{word:shi2}}.",
    },
    necessity: { en: "Now you can count to ten.", ru: "Теперь вы можете считать до десяти." },
  },
  info: {
    en: "1 {{word:yi1}}, 2 {{word:er4}}, 3 {{word:san1}}, 4 {{word:si4}}, 5 {{word:wu3}}, 6 {{word:liu4}}, 7 {{word:qi1}}, 8 {{word:ba1}}, 9 {{word:jiu3}}, 10 {{word:shi2}}",
    ru: "1 {{word:yi1}}, 2 {{word:er4}}, 3 {{word:san1}}, 4 {{word:si4}}, 5 {{word:wu3}}, 6 {{word:liu4}}, 7 {{word:qi1}}, 8 {{word:ba1}}, 9 {{word:jiu3}}, 10 {{word:shi2}}",
  },
  examples: [
    {
      pinyin: "{{Word:yi1}}, {{word:er4}}, {{word:san1}}!",
      hanzi: "一，二，三！",
      en: "One, two, three!",
      ru: "Раз, два, три!",
    },
    {
      pinyin: "{{Word:si4}}, {{word:wu3}}, {{word:liu4}}.",
      hanzi: "四，五，六。",
      en: "Four, five, six.",
      ru: "Четыре, пять, шесть.",
    },
    {
      pinyin: "{{Word:qi1}}, {{word:ba1}}, {{word:jiu3}}, {{word:shi2}}.",
      hanzi: "七，八，九，十。",
      en: "Seven, eight, nine, ten.",
      ru: "Семь, восемь, девять, десять.",
    },
    {
      pinyin: "{{Word:san1}} {{word:bi3}} {{word:er4}} {{word:duo1}}.",
      hanzi: "三比二多。",
      en: "Three is more than two.",
      ru: "Три больше двух.",
    },
    {
      pinyin: "{{Word:shi2}} {{word:zui4}} {{word:da4}}.",
      hanzi: "十最大。",
      en: "Ten is the biggest.",
      ru: "Десять — самое большое.",
    },
  ],
  exercises: [
    {
      en: "Count from one to three.",
      ru: "Посчитайте от одного до трёх.",
      answer: "{{Word:yi1}}, {{word:er4}}, {{word:san1}}.",
      hanzi: "一，二，三。",
    },
  ],
});
