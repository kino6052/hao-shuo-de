// To say what color something is, put shì before the color, and -de after it.
// Pattern: Thing + shì + color-de
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "is-color",
  prose: {
    en: [
      "**To say what color something is**, put {{word:shi4}} before the color, and -{{word:de}} after it.",
      "",
      "**Thing + {{word:shi4}} + color-{{word:de}}**",
      "",
      "Blue, green and yellow have no word of their own. Name a thing that has the color: {{word:tian1}}-{{word:de}} {{word:yan2se4}} (the color of the sky) is blue, {{word:zhi2wu4}}-{{word:de}} {{word:yan2se4}} (the color of plants) is green, and {{word:jin1}}-{{word:de}} {{word:yan2se4}} (the color of gold) is yellow.",
    ],
    ru: [
      "**Чтобы сказать, какого цвета что-то**, поставьте {{word:shi4}} перед цветом, а -{{word:de}} — после него.",
      "",
      "**Вещь + {{word:shi4}} + цвет-{{word:de}}**",
      "",
      "У синего, зелёного и жёлтого нет своих слов. Назовите вещь такого цвета: {{word:tian1}}-{{word:de}} {{word:yan2se4}} (цвет неба) — синий, {{word:zhi2wu4}}-{{word:de}} {{word:yan2se4}} (цвет растений) — зелёный, а {{word:jin1}}-{{word:de}} {{word:yan2se4}} (цвет золота) — жёлтый.",
    ],
    tldr: {
      en: "Thing + {{word:shi4}} + color-{{word:de}}: {{Word:shui3}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}, the water is blue.",
      ru: "Вещь + {{word:shi4}} + цвет-{{word:de}}: {{Word:shui3}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}-{{word:de}} — вода синяя.",
    },
    necessity: { en: "Now you can describe what you see.", ru: "Теперь вы можете описать то, что видите." },
  },
  info: {
    en: "Thing + {{word:shi4}} + color-{{word:de}}: {{Word:bao1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}. (The bag is red.)",
    ru: "Вещь + {{word:shi4}} + цвет-{{word:de}}: {{Word:bao1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}. (Сумка красная.)",
  },
  examples: [
    {
      pinyin: "{{Word:bao1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "包是红色的。",
      en: "The bag is red.",
      ru: "Сумка красная.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:bai2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "我的衣服是白色的。",
      en: "My clothes are white.",
      ru: "Моя одежда белая.",
    },
    {
      pinyin: "{{Word:di4}}-{{word:shang4}}-{{word:de}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:shi4}} {{word:hei1}}-{{word:se4}}-{{word:de}}.",
      hanzi: "地上的长的东西是黑色的。",
      en: "The stick on the floor is black.",
      ru: "Палка на полу чёрная.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:shen1ti3}} {{word:shi4}} {{word:jin1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}.",
      hanzi: "这个动物的身体是金的颜色的。",
      en: "This animal's body is yellow.",
      ru: "Тело этого животного жёлтое.",
    },
    {
      pinyin: "{{Word:si4}}-ge {{word:dong4}}-{{word:wu4}} {{word:shi4}} {{word:bai2}}-{{word:se4}}-{{word:de}}, {{word:wu3}}-ge {{word:shi4}} {{word:hei1}}-{{word:se4}}-{{word:de}}.",
      hanzi: "四个动物是白色的，五个是黑色的。",
      en: "Four animals are white, and five are black.",
      ru: "Четыре животных белые, а пять — чёрные.",
    },
    {
      pinyin: "{{Word:qi1}}-ge {{word:bao1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}, {{word:ba1}}-ge {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}.",
      hanzi: "七个包是红色的，八个是天的颜色的。",
      en: "Seven bags are red, and eight are blue.",
      ru: "Семь сумок красные, а восемь — синие.",
    },
    {
      pinyin: "{{Word:you4}}-{{word:bian1}}-{{word:de}} {{word:bao1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "右边的包是红色的。",
      en: "The bag on the right is red.",
      ru: "Сумка справа красная.",
    },
    {
      pinyin: "{{Word:yi1}}-ge {{word:hei1}}-{{word:se4}}-{{word:de}} {{word:dong4}}-{{word:wu4}} {{word:fei1}}-{{word:jin4}}-{{word:lai2}} {{word:le}}.",
      hanzi: "一个黑色的动物飞进来了。",
      en: "A black animal flew in.",
      ru: "Залетело чёрное животное.",
    },
  ],
  exercises: [
    {
      en: "The bag is yellow.",
      ru: "Сумка жёлтая.",
      answer: "{{Word:bao1}} {{word:shi4}} {{word:jin1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}.",
      hanzi: "包是金的颜色的。",
    },
    {
      en: "The animal is black.",
      ru: "Животное чёрное.",
      answer: "{{Word:dong4}}-{{word:wu4}} {{word:shi4}} {{word:hei1}}-{{word:se4}}-{{word:de}}.",
      hanzi: "动物是黑色的。",
    },
    {
      en: "The bag is blue.",
      ru: "Сумка синяя.",
      answer: "{{Word:bao1}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}.",
      hanzi: "包是天的颜色的。",
    },
    {
      en: "Her eyes are blue.",
      ru: "У неё голубые глаза.",
      answer: "{{Word:ta1}}-{{word:de}} {{word:yan3jing}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}.",
      hanzi: "她的眼睛是天的颜色的。",
    },
    {
      en: "My car is red.",
      ru: "Моя машина красная.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:che1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "我的车是红色的。",
    },
    {
      en: "The bag is green.",
      ru: "Сумка зелёная.",
      answer: "{{Word:bao1}} {{word:shi4}} {{word:zhi2wu4}}-{{word:de}} {{word:yan2se4}}-{{word:de}}.",
      hanzi: "包是植物的颜色的。",
    },
    {
      en: "The water is blue.",
      ru: "Вода синяя.",
      answer: "{{Word:shui3}} {{word:shi4}} {{word:tian1}}-{{word:de}} {{word:yan2se4}}-{{word:de}}.",
      hanzi: "水是天的颜色的。",
    },
  ],
  faq: [
    // why are blue, green and yellow made of other words? (Hao-shuo-de choice)
    {
      question: {
        en: "Why is blue {{word:tian1}}-{{word:de}} {{word:yan2se4}}, not a word of its own?",
        ru: "Почему «синий» — это {{word:tian1}}-{{word:de}} {{word:yan2se4}}, а не отдельное слово?",
      },
      en: "In full Mandarin, blue, green and yellow each have a word. Hao-shuo-de keeps the list short, so it names these colors by a thing that has them: the sky, plants, gold. The same way works for any other color: say the color of a thing you both know.",
      ru: "В полном китайском у синего, зелёного и жёлтого есть свои слова. Hǎo-shuō-de держит список коротким и называет эти цвета через вещь, у которой они есть: небо, растения, золото. Так можно сказать о любом другом цвете: назовите цвет вещи, которую знаете вы оба.",
    },
    // why shì hóng-sè-de and not hěn hóng-sè?
    {
      question: {
        en: "Why is it {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}, not {{word:hen3}} {{word:hong2}}-{{word:se4}}?",
        ru: "Почему {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}, а не {{word:hen3}} {{word:hong2}}-{{word:se4}}?",
      },
      en: "Color words like {{word:hong2}}-{{word:se4}} work like nouns (\"the color red\"), so they don't take {{word:hen3}}. {{Word:bao1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}} is \"The bag is a red one\".",
      ru: "Слова цвета вроде {{word:hong2}}-{{word:se4}} работают как существительные («красный цвет»), поэтому {{word:hen3}} с ними не ставят. {{Word:bao1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}} — это «Сумка — красного цвета».",
    },
  ],
});
