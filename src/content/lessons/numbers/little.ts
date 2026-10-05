// To say a little, say yī-diǎn: before a noun, or after an adjective for a
// bit more. Pattern: yī-diǎn + noun / adjective + yī-diǎn
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "little",
  prose: {
    en: [
      "**To say a little**, say {{word:yi1}}-{{word:dian3}} (a little).",
      "",
      "**{{word:yi1}}-{{word:dian3}} + noun / adjective + {{word:yi1}}-{{word:dian3}}**",
      "",
      "Before a noun, it's a little of it: {{word:yi1}}-{{word:dian3}} {{word:shui3}}, a little water. After an adjective, it's a bit more: {{word:da4}} {{word:yi1}}-{{word:dian3}}, a bit bigger. And {{word:you3}} {{word:yi1}}-{{word:dian3}} before an adjective is \"a bit\": {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:leng3}}, a bit cold.",
    ],
    ru: [
      "**Чтобы сказать «немного»**, говорите {{word:yi1}}-{{word:dian3}} (немного).",
      "",
      "**{{word:yi1}}-{{word:dian3}} + существительное / прилагательное + {{word:yi1}}-{{word:dian3}}**",
      "",
      "Перед существительным это «немного чего-то»: {{word:yi1}}-{{word:dian3}} {{word:shui3}} — немного воды. После прилагательного — «чуть больше»: {{word:da4}} {{word:yi1}}-{{word:dian3}} — чуть больше. А {{word:you3}} {{word:yi1}}-{{word:dian3}} перед прилагательным — «немного»: {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:leng3}} — немного холодно.",
    ],
    tldr: {
      en: "{{word:yi1}}-{{word:dian3}} is a little: {{word:yi1}}-{{word:dian3}} {{word:shui3}}, {{word:da4}} {{word:yi1}}-{{word:dian3}}.",
      ru: "{{word:yi1}}-{{word:dian3}} — немного: {{word:yi1}}-{{word:dian3}} {{word:shui3}}, {{word:da4}} {{word:yi1}}-{{word:dian3}}.",
    },
    necessity: {
      en: "Now you can say a little, or a bit more.",
      ru: "Теперь вы можете сказать «немного» или «чуть больше».",
    },
  },
  info: {
    en: "{{word:yi1}}-{{word:dian3}}, a little: {{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:dian3}} {{word:shui3}}. (I want a little water.) {{Word:zhe4}}-ge {{word:da4}} {{word:yi1}}-{{word:dian3}}. (This one is a bit bigger.)",
    ru: "{{word:yi1}}-{{word:dian3}} — немного: {{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:dian3}} {{word:shui3}}. (Я хочу немного воды.) {{Word:zhe4}}-ge {{word:da4}} {{word:yi1}}-{{word:dian3}}. (Этот чуть больше.)",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:dian3}} {{word:shui3}}.",
      hanzi: "我要一点水。",
      en: "I want a little water.",
      ru: "Я хочу немного воды.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:jin1}}.",
      hanzi: "我有一点金。",
      en: "I have a little money.",
      ru: "У меня немного денег.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:da4}} {{word:yi1}}-{{word:dian3}}.",
      hanzi: "这个大一点。",
      en: "This one is a bit bigger.",
      ru: "Этот чуть больше.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:leng3}}.",
      hanzi: "水有一点冷。",
      en: "The water is a bit cold.",
      ru: "Вода немного холодная.",
    },
    {
      pinyin: "{{Word:duo1}} {{word:chi1}} {{word:yi1}}-{{word:dian3}}!",
      hanzi: "多吃一点！",
      en: "Eat a bit more!",
      ru: "Ешь побольше!",
    },
  ],
  exercises: [
    {
      en: "This one is a bit smaller.",
      ru: "Этот чуть меньше.",
      answer: "{{Word:zhe4}}-ge {{word:xiao3}} {{word:yi1}}-{{word:dian3}}.",
      hanzi: "这个小一点。",
    },
    {
      en: "Take a little!",
      ru: "Возьми немного!",
      answer: "{{Word:na2}} {{word:yi1}}-{{word:dian3}}!",
      hanzi: "拿一点！",
    },
    {
      en: "I need a little time.",
      ru: "Мне нужно немного времени.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:dian3}} {{word:shi2}}-{{word:jian1}}.",
      hanzi: "我要一点时间。",
    },
  ],
});
