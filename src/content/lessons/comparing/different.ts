// To say things are different, say they're not the same: bù yī-yàng.
// Pattern: Things + bù yī-yàng / bù-yī-yàng-de + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "different",
  words: [
    {
      word: "bie2",
      en: "other; {{word:bie2}}-{{word:de}}: other",
      ru: "другой; {{word:bie2}}-{{word:de}} — другой",
    },
    {
      word: "tong2",
      en: "same; {{word:bu4}}-{{word:tong2}}: different",
      ru: "одинаковый; {{word:bu4}}-{{word:tong2}} — разный",
    },
  ],
  prose: {
    en: [
      "**To say things are different**, say they're not the same: {{word:bu4}} {{word:yi1}}-{{word:yang4}}.",
      "",
      "**Things + {{word:bu4}} {{word:yi1}}-{{word:yang4}} / {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} + noun**",
      "",
      "For another one, or something else, use {{word:bie2}}-{{word:de}} (other): {{Word:wo3}} {{word:yao4}} {{word:bie2}}-{{word:de}}, I want something else.",
      "{{word:bu4}}-{{word:tong2}} (not the same) says different in one word.",
    ],
    ru: [
      "**Чтобы сказать, что вещи разные**, скажите, что они не одинаковые: {{word:bu4}} {{word:yi1}}-{{word:yang4}}.",
      "",
      "**Вещи + {{word:bu4}} {{word:yi1}}-{{word:yang4}} / {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} + существительное**",
      "",
      "Чтобы сказать «другой» или «что-то ещё», используйте {{word:bie2}}-{{word:de}} (другой): {{Word:wo3}} {{word:yao4}} {{word:bie2}}-{{word:de}} — мне нужно что-то другое.",
      "{{word:bu4}}-{{word:tong2}} («не одинаковый») — «разный» одним словом.",
    ],
    tldr: {
      en: "{{word:bu4}} {{word:yi1}}-{{word:yang4}} means different. {{word:bie2}}-{{word:de}} means other: {{word:bie2}}-{{word:de}} {{word:ren2}}, other people.",
      ru: "{{word:bu4}} {{word:yi1}}-{{word:yang4}} значит «разный». {{word:bie2}}-{{word:de}} — «другой»: {{word:bie2}}-{{word:de}} {{word:ren2}} — другие люди.",
    },
    necessity: {
      en: "Now you can say two things don't match, and ask for another.",
      ru: "Теперь вы можете сказать, что вещи не совпадают, и попросить другую.",
    },
  },
  info: {
    items: [
      {
        en: "{{word:bu4}} {{word:yi1}}-{{word:yang4}}, different: {{Word:wo3}} {{word:yao4}} {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:yi1fu}}. (I want different clothes.)",
        ru: "{{word:bu4}} {{word:yi1}}-{{word:yang4}} — разный: {{Word:wo3}} {{word:yao4}} {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:yi1fu}}. (Мне нужна другая одежда.)",
      },
      {
        en: "{{word:bie2}}-{{word:de}}, other: {{Word:wo3}} {{word:yao4}} {{word:bie2}}-{{word:de}}. (I want something else.)",
        ru: "{{word:bie2}}-{{word:de}} — другой: {{Word:wo3}} {{word:yao4}} {{word:bie2}}-{{word:de}}. (Мне нужно что-то другое.)",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "它们不一样。",
      en: "They're different.",
      ru: "Они разные.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:yi1fu}}.",
      hanzi: "我要不一样的衣服。",
      en: "I want different clothes.",
      ru: "Мне нужна другая одежда.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:di4}}-{{light:fang1}} {{word:hen3}} {{word:bu4}} {{word:yi1}}-{{word:yang4}}.",
      hanzi: "这个地方很不一样。",
      en: "This place is very different.",
      ru: "Это место совсем не такое.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:bie2}}-{{word:de}}.",
      hanzi: "我要别的。",
      en: "I want something else.",
      ru: "Мне нужно что-то другое.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:bie2}}-{{word:de}} {{word:yi1fu}} {{word:ma}}?",
      hanzi: "你有别的衣服吗？",
      en: "Do you have other clothes?",
      ru: "У тебя есть другая одежда?",
    },
    {
      pinyin: "{{Word:bie2}}-{{word:de}} {{word:ren2}} {{word:bi3}} {{word:wo3}} {{word:da4}}.",
      hanzi: "别的人比我大。",
      en: "The other people are bigger than me.",
      ru: "Другие люди больше меня.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:hen3}} {{word:bu4}}-{{word:tong2}}.",
      hanzi: "他们很不同。",
      en: "They're very different.",
      ru: "Они очень разные.",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:men}}-{{word:de}} {{word:jia1}} {{word:bu4}}-{{word:tong2}}.",
      hanzi: "我们的家不同。",
      en: "Our homes are different.",
      ru: "Наши дома разные.",
    },
  ],
  exercises: [
    {
      en: "I want a different box.",
      ru: "Мне нужна другая коробка.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:bu4}}-{{word:yi1}}-{{word:yang4}}-{{word:de}} {{word:he2zi}}.",
      hanzi: "我要不一样的盒子。",
    },
    {
      en: "I want something else.",
      ru: "Мне нужно что-то другое.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:bie2}}-{{word:de}}.",
      hanzi: "我要别的。",
    },
    {
      en: "These are very different.",
      ru: "Эти очень разные.",
      answer: "{{Word:zhe4}}-{{word:xie1}} {{word:hen3}} {{word:bu4}}-{{word:tong2}}.",
      hanzi: "这些很不同。",
    },
  ],
  faq: [
    // bù yī-yàng vs bié-de
    {
      question: {
        en: "What's the difference between {{word:bu4}} {{word:yi1}}-{{word:yang4}} and {{word:bie2}}-{{word:de}}?",
        ru: "Чем {{word:bu4}} {{word:yi1}}-{{word:yang4}} отличается от {{word:bie2}}-{{word:de}}?",
      },
      en: "{{word:bu4}} {{word:yi1}}-{{word:yang4}} compares: these aren't the same. {{word:bie2}}-{{word:de}} picks another one: {{Word:wo3}} {{word:yao4}} {{word:bie2}}-{{word:de}} (I want something else).",
      ru: "{{word:bu4}} {{word:yi1}}-{{word:yang4}} сравнивает: эти вещи не одинаковые. {{word:bie2}}-{{word:de}} выбирает другую: {{Word:wo3}} {{word:yao4}} {{word:bie2}}-{{word:de}} (Мне нужно что-то другое).",
    },
  ],
});
