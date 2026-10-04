// To say things are different, say they're not the same: bù yīyàng.
// Pattern: Things + bù yīyàng / bù-yīyàng-de + noun
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "different",
  words: [
    {
      word: "bie2de",
      en: "other, else",
      ru: "другой, ещё какой-то",
    },
  ],
  prose: {
    en: [
      "**To say things are different**, say they're not the same: {{word:bu4}} {{word:yi1yang4}}.",
      "",
      "**Things + {{word:bu4}} {{word:yi1yang4}} / {{word:bu4}}-{{word:yi1yang4}}-{{word:de}} + noun**",
      "",
      "For another one, or something else, use {{word:bie2de}} (other): {{Word:wo3}} {{word:yao4}} {{word:bie2de}}, I want something else.",
    ],
    ru: [
      "**Чтобы сказать, что вещи разные**, скажите, что они не одинаковые: {{word:bu4}} {{word:yi1yang4}}.",
      "",
      "**Вещи + {{word:bu4}} {{word:yi1yang4}} / {{word:bu4}}-{{word:yi1yang4}}-{{word:de}} + существительное**",
      "",
      "Чтобы сказать «другой» или «что-то ещё», используйте {{word:bie2de}} (другой): {{Word:wo3}} {{word:yao4}} {{word:bie2de}} — мне нужно что-то другое.",
    ],
    tldr: {
      en: "{{word:bu4}} {{word:yi1yang4}} means different. {{word:bie2de}} means other: {{word:bie2de}} {{word:ren2}}, other people.",
      ru: "{{word:bu4}} {{word:yi1yang4}} значит «разный». {{word:bie2de}} — «другой»: {{word:bie2de}} {{word:ren2}} — другие люди.",
    },
    necessity: {
      en: "Now you can say two things don't match, and ask for another.",
      ru: "Теперь вы можете сказать, что вещи не совпадают, и попросить другую.",
    },
  },
  info: {
    items: [
      {
        en: "{{word:bu4}} {{word:yi1yang4}}, different: {{Word:wo3}} {{word:yao4}} {{word:bu4}}-{{word:yi1yang4}}-{{word:de}} {{word:yi1fu}}. (I want different clothes.)",
        ru: "{{word:bu4}} {{word:yi1yang4}} — разный: {{Word:wo3}} {{word:yao4}} {{word:bu4}}-{{word:yi1yang4}}-{{word:de}} {{word:yi1fu}}. (Мне нужна другая одежда.)",
      },
      {
        en: "{{word:bie2de}}, other: {{Word:wo3}} {{word:yao4}} {{word:bie2de}}. (I want something else.)",
        ru: "{{word:bie2de}} — другой: {{Word:wo3}} {{word:yao4}} {{word:bie2de}}. (Мне нужно что-то другое.)",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:ta1}}-{{word:men}} {{word:bu4}} {{word:yi1yang4}}.",
      hanzi: "它们不一样。",
      en: "They're different.",
      ru: "Они разные.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:bu4}}-{{word:yi1yang4}}-{{word:de}} {{word:yi1fu}}.",
      hanzi: "我要不一样的衣服。",
      en: "I want different clothes.",
      ru: "Мне нужна другая одежда.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:di4fang1}} {{word:hen3}} {{word:bu4}} {{word:yi1yang4}}.",
      hanzi: "这个地方很不一样。",
      en: "This place is very different.",
      ru: "Это место совсем не такое.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:yao4}} {{word:bie2de}}.",
      hanzi: "我要别的。",
      en: "I want something else.",
      ru: "Мне нужно что-то другое.",
    },
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:bie2de}} {{word:yi1fu}} {{word:ma}}?",
      hanzi: "你有别的衣服吗？",
      en: "Do you have other clothes?",
      ru: "У тебя есть другая одежда?",
    },
    {
      pinyin: "{{Word:bie2de}} {{word:ren2}} {{word:bi3}} {{word:wo3}} {{word:da4}}.",
      hanzi: "别的人比我大。",
      en: "The other people are bigger than me.",
      ru: "Другие люди больше меня.",
    },
  ],
  exercises: [
    {
      en: "I want a different box.",
      ru: "Мне нужна другая коробка.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:bu4}}-{{word:yi1yang4}}-{{word:de}} {{word:he2zi}}.",
      hanzi: "我要不一样的盒子。",
    },
    {
      en: "I want something else.",
      ru: "Мне нужно что-то другое.",
      answer: "{{Word:wo3}} {{word:yao4}} {{word:bie2de}}.",
      hanzi: "我要别的。",
    },
  ],
  faq: [
    // bù yīyàng vs biéde
    {
      question: {
        en: "What's the difference between {{word:bu4}} {{word:yi1yang4}} and {{word:bie2de}}?",
        ru: "Чем {{word:bu4}} {{word:yi1yang4}} отличается от {{word:bie2de}}?",
      },
      en: "{{word:bu4}} {{word:yi1yang4}} compares: these aren't the same. {{word:bie2de}} picks another one: {{Word:wo3}} {{word:yao4}} {{word:bie2de}} (I want something else).",
      ru: "{{word:bu4}} {{word:yi1yang4}} сравнивает: эти вещи не одинаковые. {{word:bie2de}} выбирает другую: {{Word:wo3}} {{word:yao4}} {{word:bie2de}} (Мне нужно что-то другое).",
    },
  ],
});
