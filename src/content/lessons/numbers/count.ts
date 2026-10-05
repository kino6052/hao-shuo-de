// To count things, put the number, then gè, then the thing. Pattern: number +
// gè + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "count",
  words: [
    {
      word: "liang3",
      en: "two (before gè)",
      ru: "два (перед gè)",
    },
  ],
  prose: {
    en: [
      "**To count things**, put the number, then {{word:ge4}}, then the thing.",
      "",
      "**number + {{word:ge4}} + noun**",
      "",
      "For two things, say {{word:liang3}}, not {{word:er4}}: {{word:liang3}}-ge.",
    ],
    ru: [
      "**Чтобы посчитать вещи**, назовите число, потом {{word:ge4}}, потом саму вещь.",
      "",
      "**число + {{word:ge4}} + существительное**",
      "",
      "Для двух вещей говорите {{word:liang3}}, а не {{word:er4}}: {{word:liang3}}-ge.",
      "Существительное не меняется: и «один человек», и «пять человек» — это {{word:ren2}}.",
    ],
    tldr: {
      en: "number + {{word:ge4}} + noun: {{word:san1}}-ge {{word:ren2}}, three people.",
      ru: "число + {{word:ge4}} + существительное: {{word:san1}}-ge {{word:ren2}} — три человека.",
    },
    necessity: { en: "Now you can say how many.", ru: "Теперь вы можете сказать, сколько." },
  },
  info: {
    en: "number + {{word:ge4}} + noun: {{Word:san1}}-ge {{word:ren2}} (three people). For two things, {{word:liang3}}-ge.",
    ru: "число + {{word:ge4}} + существительное: {{Word:san1}}-ge {{word:ren2}} (три человека). Для двух вещей — {{word:liang3}}-ge.",
  },
  examples: [
    {
      pinyin: "{{Word:yi1}}-ge {{word:ren2}}.",
      hanzi: "一个人。",
      en: "One person.",
      ru: "Один человек.",
    },
    {
      pinyin: "{{Word:liang3}}-ge {{word:dong4wu4}}.",
      hanzi: "两个动物。",
      en: "Two animals.",
      ru: "Два животных.",
    },
    {
      pinyin: "{{Word:san1}}-ge {{word:he2zi}}.",
      hanzi: "三个盒子。",
      en: "Three boxes.",
      ru: "Три коробки.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:you3}} {{word:si4}}-ge {{word:gong1ju4}}.",
      hanzi: "我有四个工具。",
      en: "I have four tools.",
      ru: "У меня четыре инструмента.",
    },
    {
      pinyin: "{{Word:qi1}}-ge {{word:gun4zi}} {{word:zai4}} {{word:di4}}-{{word:shang4}}.",
      hanzi: "七个棍子在地上。",
      en: "Seven sticks are on the floor.",
      ru: "На полу семь палок.",
    },
    {
      pinyin: "{{Word:jiu3}}-ge {{word:ren2}} {{word:chi1}} {{word:dong1xi}}.",
      hanzi: "九个人吃东西。",
      en: "Nine people are eating.",
      ru: "Девять человек едят.",
    },
    {
      pinyin: "{{Word:shi2}}-ge {{word:zhi2wu4}}.",
      hanzi: "十个植物。",
      en: "Ten plants.",
      ru: "Десять растений.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:mai3}} {{word:san1}}-ge {{word:he2zi}}.",
      hanzi: "我买三个盒子。",
      en: "I'm buying three boxes.",
      ru: "Я покупаю три коробки.",
    },
  ],
  exercises: [
    {
      en: "one box",
      ru: "одна коробка",
      answer: "{{Word:yi1}}-ge {{word:he2zi}}.",
      hanzi: "一个盒子。",
    },
    {
      en: "two people",
      ru: "два человека",
      answer: "{{Word:liang3}}-ge {{word:ren2}}.",
      hanzi: "两个人。",
    },
    {
      en: "I have three tools.",
      ru: "У меня три инструмента.",
      answer: "{{Word:wo3}} {{word:you3}} {{word:san1}}-ge {{word:gong1ju4}}.",
      hanzi: "我有三个工具。",
    },
    {
      en: "four plants",
      ru: "четыре растения",
      answer: "{{Word:si4}}-ge {{word:zhi2wu4}}.",
      hanzi: "四个植物。",
    },
    {
      en: "Five people eat.",
      ru: "Пять человек едят.",
      answer: "{{Word:wu3}}-ge {{word:ren2}} {{word:chi1}}.",
      hanzi: "五个人吃。",
    },
    {
      en: "seven animals",
      ru: "семь животных",
      answer: "{{Word:qi1}}-ge {{word:dong4wu4}}.",
      hanzi: "七个动物。",
    },
    {
      en: "eight sticks",
      ru: "восемь палок",
      answer: "{{Word:ba1}}-ge {{word:gun4zi}}.",
      hanzi: "八个棍子。",
    },
    {
      en: "nine plants",
      ru: "девять растений",
      answer: "{{Word:jiu3}}-ge {{word:zhi2wu4}}.",
      hanzi: "九个植物。",
    },
    {
      en: "ten people",
      ru: "десять человек",
      answer: "{{Word:shi2}}-ge {{word:ren2}}.",
      hanzi: "十个人。",
    },
    {
      en: "I've been to three countries.",
      ru: "Я был в трёх странах.",
      answer: "{{Word:wo3}} {{word:qu4}}-{{word:guo4}} {{word:san1}}-ge {{word:guo2}}.",
      hanzi: "我去过三个国。",
    },
  ],
  faq: [
    // yī changes tone before gè
    {
      question: {
        en: "Why does {{word:yi1}}-ge sound like it has a different tone?",
        ru: "Почему {{word:yi1}}-ge звучит с другим тоном?",
      },
      en: "Before {{word:ge4}}, {{word:yi1}} is said with a rising tone (the second tone). The book still writes {{word:yi1}}. The appendix on tone changes lists when this happens.",
      ru: "Перед {{word:ge4}} {{word:yi1}} произносится восходящим (вторым) тоном. В книге всё равно пишется {{word:yi1}}. Когда так бывает, рассказано в приложении об изменениях тонов.",
    },
  ],
});
