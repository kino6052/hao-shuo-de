// To say one thing is more than another, put bǐ (than) between them, then the
// adjective. Pattern: A + bǐ + B + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "than",
  words: [
    {
      word: "bi3",
      en: "than",
      ru: "чем (при сравнении)",
    },
    {
      word: "ying4",
      en: "hard",
      ru: "твёрдый",
    },
    {
      word: "yuan2",
      en: "round",
      ru: "круглый",
    },
    {
      word: "xian4",
      en: "line, rope, thread",
      ru: "линия, верёвка, нитка",
    },
    {
      word: "chang2",
      en: "long",
      ru: "длинный",
    },
  ],
  prose: {
    en: [
      "**To say one thing is more than another**, put {{word:bi3}} (than) between them, then the adjective.",
      "",
      "**A + {{word:bi3}} + B + adjective**",
      "",
      "Don't put {{word:hen3}} in these sentences: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}, not {{word:hen3}} {{word:da4}}.",
      "{{word:chang2}} is long; a stick is {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, a long thing.",
    ],
    ru: [
      "**Чтобы сказать, что одно больше другого**, поставьте между ними {{word:bi3}} (чем), а потом прилагательное.",
      "",
      "**A + {{word:bi3}} + B + прилагательное**",
      "",
      "Прилагательное не меняется: в русском «большой» становится «больше», а в китайском остаётся {{word:da4}}.",
      "Не ставьте {{word:hen3}} в такие предложения: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}, а не {{word:hen3}} {{word:da4}}.",
      "{{word:chang2}} — длинный; палка — {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}}, длинная вещь.",
    ],
    tldr: {
      en: "A {{word:bi3}} B + adjective: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}, I'm bigger than you.",
      ru: "A {{word:bi3}} B + прилагательное: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}} — я больше тебя.",
    },
    necessity: { en: "Now you can compare two things.", ru: "Теперь вы можете сравнить две вещи." },
  },
  info: {
    en: "A {{word:bi3}} B + adjective: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}. (I'm bigger than you.) No {{word:hen3}} here.",
    ru: "A {{word:bi3}} B + прилагательное: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}. (Я больше тебя.) Без {{word:hen3}}.",
  },
  examples: [
    {
      pinyin: "{{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}}.",
      hanzi: "我比你大。",
      en: "I'm bigger than you.",
      ru: "Я больше тебя.",
    },
    {
      pinyin: "{{Word:shen2me}} {{word:bi3}} {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:ying4}}?",
      hanzi: "什么比长的东西硬？",
      en: "What is harder than a stick?",
      ru: "Что твёрже палки?",
    },
    {
      pinyin: "{{Word:wo3}}-{{word:de}} {{word:jin1}} {{word:bi3}} {{word:ni3}}-{{word:de}} {{word:shao3}}.",
      hanzi: "我的金比你的少。",
      en: "I have less money than you.",
      ru: "У меня меньше денег, чем у тебя.",
    },
    {
      pinyin: "{{Word:na4}}-ge {{word:di4}}-{{light:fang1}} {{word:bi3}} {{word:jia1}} {{word:yuan3}}.",
      hanzi: "那个地方比家远。",
      en: "That place is farther than home.",
      ru: "То место дальше, чем дом.",
    },
    {
      pinyin: "{{Word:ren2}} {{word:bi3}} {{word:jin1}} {{word:you3}} {{word:jia4zhi2}}.",
      hanzi: "人比金有价值。",
      en: "People are worth more than money.",
      ru: "Люди ценнее денег.",
    },
    {
      pinyin: "{{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:lao3}}.",
      hanzi: "他比我老。",
      en: "He's older than me.",
      ru: "Он старше меня.",
    },
    {
      pinyin: "{{Word:zhe4}}-ge {{word:lu4}} {{word:bi3}} {{word:na4}}-ge {{word:yuan3}}.",
      hanzi: "这个路比那个远。",
      en: "This way is farther than that one.",
      ru: "Эта дорога длиннее той.",
    },
    {
      pinyin: "{{Word:you4}}-{{word:bian1}}-{{word:de}} {{word:he2zi}} {{word:bi3}} {{word:zuo3}}-{{word:bian1}}-{{word:de}} {{word:da4}}.",
      hanzi: "右边的盒子比左边的大。",
      en: "The box on the right is bigger than the one on the left.",
      ru: "Коробка справа больше той, что слева.",
    },
  ],
  exercises: [
    {
      en: "This stick is harder than that one.",
      ru: "Эта палка твёрже той.",
      answer: "{{Word:zhe4}}-ge {{word:chang2}}-{{word:de}} {{word:dong1}}-{{light:xi1}} {{word:bi3}} {{word:na4}}-ge {{word:ying4}}.",
      hanzi: "这个长的东西比那个硬。",
    },
    {
      en: "You're bigger than me.",
      ru: "Ты больше меня.",
      answer: "{{Word:ni3}} {{word:bi3}} {{word:wo3}} {{word:da4}}.",
      hanzi: "你比我大。",
    },
    {
      en: "He's older than me.",
      ru: "Он старше меня.",
      answer: "{{Word:ta1}} {{word:bi3}} {{word:wo3}} {{word:lao3}}.",
      hanzi: "他比我老。",
    },
    {
      en: "My country is bigger than yours.",
      ru: "Моя страна больше твоей.",
      answer: "{{Word:wo3}}-{{word:de}} {{word:guo2}} {{word:bi3}} {{word:ni3}}-{{word:de}} {{word:da4}}.",
      hanzi: "我的国比你的大。",
    },
    {
      en: "Writing is harder than speaking.",
      ru: "Писать труднее, чем говорить.",
      answer: "{{Word:xie3}} {{word:bi3}} {{word:shuo1}} {{word:nan2}}.",
      hanzi: "写比说难。",
    },
    {
      en: "The box on this side is bigger than the one on that side.",
      ru: "Коробка с этой стороны больше, чем с той.",
      answer: "{{Word:zhe4}}-{{word:bian1}}-{{word:de}} {{word:he2zi}} {{word:bi3}} {{word:na4}}-{{word:bian1}}-{{word:de}} {{word:da4}}.",
      hanzi: "这边的盒子比那边的大。",
    },
  ],
  faq: [
    // how do I say "much bigger"? (adjective + hěn duō)
    {
      question: { en: "How do I say \"much bigger\"?", ru: "Как сказать «намного больше»?" },
      en: "Put {{word:hen3}} {{word:duo1}} after the adjective: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}} {{word:hen3}} {{word:duo1}} (I'm much bigger than you).",
      ru: "Поставьте {{word:hen3}} {{word:duo1}} после прилагательного: {{Word:wo3}} {{word:bi3}} {{word:ni3}} {{word:da4}} {{word:hen3}} {{word:duo1}} (Я намного больше тебя).",
    },
    // how do I say "not as big as"? (méi-yǒu)
    {
      question: { en: "How do I say \"not as big as\"?", ru: "Как сказать «не такой большой, как»?" },
      en: "Use {{word:mei2}}-{{word:you3}} in place of {{word:bi3}}: {{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:ni3}} {{word:da4}} (I'm not as big as you).",
      ru: "Используйте {{word:mei2}}-{{word:you3}} вместо {{word:bi3}}: {{Word:wo3}} {{word:mei2}}-{{word:you3}} {{word:ni3}} {{word:da4}} (Я не такой большой, как ты).",
    },
  ],
});
