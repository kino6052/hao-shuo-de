// To ask "what color?", say shénme yánsè where the color would go. Pattern:
// Thing + shì shénme yánsè?
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "what-color",
  words: [
    {
      term: "{{word:yan2se4}}",
      hanzi: "颜色",
      en: "color",
      ru: "цвет",
    },
  ],
  prose: {
    en: [
      "**To ask \"what color?\"**, say {{word:shen2me}} {{word:yan2se4}} where the color would go.",
      "",
      "**Thing + {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?**",
    ],
    ru: [
      "**Чтобы спросить «какого цвета?»**, скажите {{word:shen2me}} {{word:yan2se4}} там, где стоял бы цвет.",
      "",
      "**Вещь + {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?**",
    ],
    tldr: {
      en: "{{word:shen2me}} {{word:yan2se4}} means what color.",
      ru: "{{word:shen2me}} {{word:yan2se4}} значит «какого цвета».",
    },
    necessity: { en: "Now you can ask about colors.", ru: "Теперь вы можете спрашивать о цветах." },
  },
  info: {
    en: "{{word:shen2me}} {{word:yan2se4}}, what color: {{Word:ni3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}? (What color are your clothes?)",
    ru: "{{word:shen2me}} {{word:yan2se4}} — какого цвета: {{Word:ni3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}? (Какого цвета твоя одежда?)",
  },
  examples: [
    {
      pinyin: "{{Word:ni3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?",
      hanzi: "你的衣服是什么颜色？",
      en: "What color are your clothes?",
      ru: "Какого цвета твоя одежда?",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:shui3guo3}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?",
      hanzi: "这个水果是什么颜色？",
      en: "What color is this fruit?",
      ru: "Какого цвета этот фрукт?",
    },
    {
      pinyin: "{{Word:wo3}} {{word:ai4}} {{word:lan2se4}}.",
      hanzi: "我爱蓝色。",
      en: "I love blue.",
      ru: "Я люблю синий цвет.",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:liang3}}-ge {{word:he2zi}}-{{word:de}} {{word:yan2se4}} {{word:yi1yang4}}.",
      hanzi: "这两个盒子的颜色一样。",
      en: "These two boxes are the same color.",
      ru: "Эти две коробки одного цвета.",
    },
    {
      pinyin: "{{Word:liu4}}-{{word:hao4}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?",
      hanzi: "六号是什么颜色？",
      en: "What color is number six?",
      ru: "Какого цвета номер шесть?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:bie2de}} {{word:yan2se4}} {{word:ma}}?",
      hanzi: "你有别的颜色吗？",
      en: "Do you have other colors?",
      ru: "У тебя есть другие цвета?",
    },
    {
      pinyin: "{{Word:zhe4}}-{{word:zhong3}} {{word:yan2se4}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "这种颜色很好。",
      en: "This color is nice.",
      ru: "Это хороший цвет.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:yan2se4}} {{word:hao3}} {{word:yi1}}-{{word:dian3}}.",
      hanzi: "这个颜色好一点。",
      en: "This color is a bit better.",
      ru: "Этот цвет чуть лучше.",
    },
  ],
  exercises: [
    {
      en: "What color is the plant?",
      ru: "Какого цвета растение?",
      answer: "{{Word:zhi2wu4}} {{word:shi4}} {{word:shen2me}} {{word:yan2se4}}?",
      hanzi: "植物是什么颜色？",
    },
  ],
});
