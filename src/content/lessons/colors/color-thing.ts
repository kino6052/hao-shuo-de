// To say a thing's color, put the color and -de before it. Pattern: color-de
// + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "color-thing",
  words: [
    {
      word: "bai2se4",
      en: "white",
      ru: "белый",
    },
    {
      word: "hei1se4",
      en: "black",
      ru: "чёрный",
    },
    {
      word: "hong2se4",
      en: "red",
      ru: "красный",
    },
    {
      word: "huang2se4",
      en: "yellow",
      ru: "жёлтый",
    },
  ],
  prose: {
    en: [
      "**To say a thing's color**, put the color and -{{word:de}} before it.",
      "",
      "**color-{{word:de}} + noun**",
    ],
    ru: [
      "**Чтобы назвать цвет вещи**, поставьте перед ней цвет и -{{word:de}}.",
      "",
      "**цвет-{{word:de}} + существительное**",
    ],
    tldr: {
      en: "color-{{word:de}} + noun: {{word:hong2se4}}-{{word:de}} {{word:he2zi}}, a red box.",
      ru: "цвет-{{word:de}} + существительное: {{word:hong2se4}}-{{word:de}} {{word:he2zi}} — красная коробка.",
    },
    necessity: {
      en: "Now you can tell things apart by color.",
      ru: "Теперь вы можете различать вещи по цвету.",
    },
  },
  info: {
    en: "color-{{word:de}} + noun: {{word:hong2se4}}-{{word:de}} {{word:he2zi}} (a red box)",
    ru: "цвет-{{word:de}} + существительное: {{word:hong2se4}}-{{word:de}} {{word:he2zi}} (красная коробка)",
  },
  examples: [
    {
      pinyin: "{{Word:hong2se4}}-{{word:de}} {{word:he2zi}}.",
      hanzi: "红色的盒子。",
      en: "A red box.",
      ru: "Красная коробка.",
    },
    {
      pinyin: "{{Word:bai2se4}}-{{word:de}} {{word:yi1fu}}.",
      hanzi: "白色的衣服。",
      en: "White clothes.",
      ru: "Белая одежда.",
    },
    {
      pinyin: "{{Word:hei1se4}}-{{word:de}} {{word:dong4wu4}}.",
      hanzi: "黑色的动物。",
      en: "A black animal.",
      ru: "Чёрное животное.",
    },
    {
      pinyin: "{{Word:huang2se4}}-{{word:de}} {{word:zhi2wu4}}.",
      hanzi: "黄色的植物。",
      en: "A yellow plant.",
      ru: "Жёлтое растение.",
    },
    {
      pinyin: "{{Word:ba3}} {{word:hong2se4}}-{{word:de}} {{word:yi1fu}} {{word:fang4}} {{word:zai4}} {{word:zhe4}}-{{word:li3}}.",
      hanzi: "把红色的衣服放在这里。",
      en: "Put the red clothes here.",
      ru: "Положи красную одежду сюда.",
    },
    {
      pinyin: "{{Word:na2}} {{word:hong2se4}}-{{word:de}}.",
      hanzi: "拿红色的。",
      en: "Take the red one.",
      ru: "Возьми красную.",
    },
  ],
  exercises: [
    {
      en: "a white box",
      ru: "белая коробка",
      answer: "{{Word:bai2se4}}-{{word:de}} {{word:he2zi}}.",
      hanzi: "白色的盒子。",
    },
    {
      en: "I want red clothes.",
      ru: "Я хочу красную одежду.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:hong2se4}}-{{word:de}} {{word:yi1fu}}.",
      hanzi: "我要红色的衣服。",
    },
  ],
});
