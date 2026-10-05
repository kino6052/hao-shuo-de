// To say what color something is, put shì before the color, and -de after it.
// Pattern: Thing + shì + color-de
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "is-color",
  words: [
    {
      word: "lan2",
      en: "blue",
      ru: "синий",
    },
  ],
  prose: {
    en: [
      "**To say what color something is**, put {{word:shi4}} before the color, and -{{word:de}} after it.",
      "",
      "**Thing + {{word:shi4}} + color-{{word:de}}**",
    ],
    ru: [
      "**Чтобы сказать, какого цвета что-то**, поставьте {{word:shi4}} перед цветом, а -{{word:de}} — после него.",
      "",
      "**Вещь + {{word:shi4}} + цвет-{{word:de}}**",
    ],
    tldr: {
      en: "Thing + {{word:shi4}} + color-{{word:de}}: {{Word:shui3}} {{word:shi4}} {{word:lan2}}-{{word:se4}}-{{word:de}}, the water is blue.",
      ru: "Вещь + {{word:shi4}} + цвет-{{word:de}}: {{Word:shui3}} {{word:shi4}} {{word:lan2}}-{{word:se4}}-{{word:de}} — вода синяя.",
    },
    necessity: { en: "Now you can describe what you see.", ru: "Теперь вы можете описать то, что видите." },
  },
  info: {
    en: "Thing + {{word:shi4}} + color-{{word:de}}: {{Word:he2zi}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}. (The box is red.)",
    ru: "Вещь + {{word:shi4}} + цвет-{{word:de}}: {{Word:he2zi}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}. (Коробка красная.)",
  },
  examples: [
    {
      pinyin: "{{Word:he2zi}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "盒子是红色的。",
      en: "The box is red.",
      ru: "Коробка красная.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:yi1fu}} {{word:shi4}} {{word:bai2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "我的衣服是白色的。",
      en: "My clothes are white.",
      ru: "Моя одежда белая.",
    },
    {
      pinyin: "{{Word:di4}}-{{word:shang4}}-{{word:de}} {{word:gun4zi}} {{word:shi4}} {{word:hei1}}-{{word:se4}}-{{word:de}}.",
      hanzi: "地上的棍子是黑色的。",
      en: "The stick on the floor is black.",
      ru: "Палка на полу чёрная.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:dong4}}-{{word:wu4}}-{{word:de}} {{word:shen1ti3}} {{word:shi4}} {{word:huang2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "这个动物的身体是黄色的。",
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
      pinyin: "{{Word:qi1}}-ge {{word:he2zi}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}, {{word:ba1}}-ge {{word:shi4}} {{word:lan2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "七个盒子是红色的，八个是蓝色的。",
      en: "Seven boxes are red, and eight are blue.",
      ru: "Семь коробок красные, а восемь — синие.",
    },
    {
      pinyin: "{{Word:you4}}-{{word:bian1}}-{{word:de}} {{word:he2zi}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "右边的盒子是红色的。",
      en: "The box on the right is red.",
      ru: "Коробка справа красная.",
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
      en: "The box is yellow.",
      ru: "Коробка жёлтая.",
      answer: "{{Word:he2zi}} {{word:shi4}} {{word:huang2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "盒子是黄色的。",
    },
    {
      en: "The animal is black.",
      ru: "Животное чёрное.",
      answer: "{{Word:dong4}}-{{word:wu4}} {{word:shi4}} {{word:hei1}}-{{word:se4}}-{{word:de}}.",
      hanzi: "动物是黑色的。",
    },
    {
      en: "The box is blue.",
      ru: "Коробка синяя.",
      answer: "{{Word:he2zi}} {{word:shi4}} {{word:lan2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "盒子是蓝色的。",
    },
    {
      en: "Her eyes are blue.",
      ru: "У неё голубые глаза.",
      answer: "{{Word:ta1}}-{{word:de}} {{word:yan3jing}} {{word:shi4}} {{word:lan2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "她的眼睛是蓝色的。",
    },
    {
      en: "My car is red.",
      ru: "Моя машина красная.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:che1}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "我的车是红色的。",
    },
    {
      en: "The sky is blue.",
      ru: "Небо синее.",
      answer: "{{Word:tian1}} {{word:shi4}} {{word:lan2}}-{{word:se4}}-{{word:de}}.",
      hanzi: "天是蓝色的。",
    },
  ],
  faq: [
    // why does lán-sè mean blue and green? (Hao-shuo-de choice; describe green)
    {
      question: {
        en: "Why does {{word:lan2}}-{{word:se4}} mean blue and green?",
        ru: "Почему {{word:lan2}}-{{word:se4}} значит и синий, и зелёный?",
      },
      en: "In full Mandarin, {{word:lan2}}-{{word:se4}} is blue, and green has its own word. Hao-shuo-de keeps the list short, so it uses {{word:lan2}}-{{word:se4}} for both. To make green clear, describe it: {{word:zhi2wu4}}-{{word:de}} {{word:yan2se4}} (the color of plants).",
      ru: "В полном китайском {{word:lan2}}-{{word:se4}} — это синий, а для зелёного есть своё слово. Hǎo-shuō-de держит список коротким, поэтому {{word:lan2}}-{{word:se4}} — это и синий, и голубой, и зелёный. Чтобы ясно сказать «зелёный», опишите его: {{word:zhi2wu4}}-{{word:de}} {{word:yan2se4}} (цвет растений).",
    },
    // why shì hóng-sè-de and not hěn hóng-sè?
    {
      question: {
        en: "Why is it {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}, not {{word:hen3}} {{word:hong2}}-{{word:se4}}?",
        ru: "Почему {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}}, а не {{word:hen3}} {{word:hong2}}-{{word:se4}}?",
      },
      en: "Color words like {{word:hong2}}-{{word:se4}} work like nouns (\"the color red\"), so they don't take {{word:hen3}}. {{Word:he2zi}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}} is \"The box is a red one\".",
      ru: "Слова цвета вроде {{word:hong2}}-{{word:se4}} работают как существительные («красный цвет»), поэтому {{word:hen3}} с ними не ставят. {{Word:he2zi}} {{word:shi4}} {{word:hong2}}-{{word:se4}}-{{word:de}} — это «Коробка — красного цвета».",
    },
  ],
});
