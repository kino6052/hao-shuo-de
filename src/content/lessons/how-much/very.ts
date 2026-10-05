// To say very, put hěn before the adjective. Pattern: Thing + hěn + adjective
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "very",
  words: [
    {
      word: "zhen1",
      en: "really",
      ru: "правда, по-настоящему",
    },
    {
      word: "re4",
      en: "hot",
      ru: "горячий, жаркий",
    },
    {
      word: "leng3",
      en: "cold",
      ru: "холодный",
    },
    {
      word: "tian2",
      en: "sweet",
      ru: "сладкий",
    },
    {
      word: "wei4",
      sense: "taste",
      en: "taste (in {{word:wei4}}-{{word:dao4}})",
      ru: "вкус (в {{word:wei4}}-{{word:dao4}})",
    },
    {
      word: "dao4",
      sense: "way",
      en: "way (in {{word:wei4}}-{{word:dao4}}: taste)",
      ru: "путь (в {{word:wei4}}-{{word:dao4}} — вкус)",
    },
    {
      word: "qi2guai4",
      en: "strange",
      ru: "странный",
    },
    {
      word: "shen1ti3",
      en: "body; health",
      ru: "тело; здоровье",
    },
    {
      word: "jia4zhi2",
      en: "value, worth",
      ru: "ценность, стоимость",
    },
    {
      word: "kuai4",
      en: "fast, quick",
      ru: "быстрый",
    },
  ],
  prose: {
    en: [
      "**To say very**, put {{word:hen3}} before the adjective.",
      "",
      "**Thing + {{word:hen3}} + adjective**",
      "",
      "Words that say how much, like {{word:hen3}}, {{word:zhen1}}, and {{word:bu4}}, are called adverbs.",
      "{{word:hen3}} {{word:you3}} {{word:jia4zhi2}} (\"has a lot of value\") means valuable.",
      "Before a verb, {{word:kuai4}} (fast) means quickly: {{Word:kuai4}} {{word:lai2}}!",
      "{{word:wei4}}-{{word:dao4}} is taste, good or not: {{Word:wei4}}-{{word:dao4}} {{word:hen3}} {{word:hao3}}, it tastes very good. {{Word:wei4}}-{{word:dao4}} {{word:bu4}} {{word:hao3}}, it doesn't taste good.",
    ],
    ru: [
      "**Чтобы сказать «очень»**, поставьте {{word:hen3}} перед прилагательным.",
      "",
      "**Вещь + {{word:hen3}} + прилагательное**",
      "",
      "Слова, которые говорят «насколько», такие как {{word:hen3}}, {{word:zhen1}} и {{word:bu4}}, называются наречиями.",
      "{{word:hen3}} {{word:you3}} {{word:jia4zhi2}} («имеет много ценности») значит «ценный».",
      "Перед глаголом {{word:kuai4}} (быстрый) значит «быстро»: {{Word:kuai4}} {{word:lai2}}!",
      "{{word:wei4}}-{{word:dao4}} — это вкус, хороший или нет: {{Word:wei4}}-{{word:dao4}} {{word:hen3}} {{word:hao3}} — очень вкусно. {{Word:wei4}}-{{word:dao4}} {{word:bu4}} {{word:hao3}} — невкусно.",
    ],
    tldr: {
      en: "{{word:hen3}} before an adjective means very.",
      ru: "{{word:hen3}} перед прилагательным значит «очень».",
    },
    necessity: { en: "Now you can say how something is.", ru: "Теперь вы можете сказать, какое что-то." },
  },
  info: {
    items: [
      {
        en: "{{word:hen3}} + adjective, very: {{Word:shui3}} {{word:hen3}} {{word:re4}}. (The water is very hot.)",
        ru: "{{word:hen3}} + прилагательное — очень: {{Word:shui3}} {{word:hen3}} {{word:re4}}. (Вода очень горячая.)",
      },
      {
        en: "{{word:hen3}} {{word:you3}} {{word:jia4zhi2}}, valuable: {{Word:zhe4}}-ge {{word:gong1}}-{{word:ju4}} {{word:hen3}} {{word:you3}} {{word:jia4zhi2}}. (This tool is very valuable.)",
        ru: "{{word:hen3}} {{word:you3}} {{word:jia4zhi2}} — ценный: {{Word:zhe4}}-ge {{word:gong1}}-{{word:ju4}} {{word:hen3}} {{word:you3}} {{word:jia4zhi2}}. (Этот инструмент очень ценный.)",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:zhe4}}-ge {{word:gong1}}-{{word:ju4}} {{word:hen3}} {{word:you3}} {{word:jia4zhi2}}.",
      hanzi: "这个工具很有价值。",
      en: "This tool is very valuable.",
      ru: "Этот инструмент очень ценный.",
    },
    {
      pinyin: "{{Word:shui3}}-{{word:de}} {{word:jia4zhi2}} {{word:hen3}} {{word:da4}}.",
      hanzi: "水的价值很大。",
      en: "Water's value is great.",
      ru: "Ценность воды велика.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:hen3}} {{word:re4}}.",
      hanzi: "水很热。",
      en: "The water is very hot.",
      ru: "Вода очень горячая.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "我很冷。",
      en: "I'm very cold.",
      ru: "Мне очень холодно.",
    },
    {
      pinyin: "{{Word:shui3}} {{word:hen3}} {{word:tian2}}.",
      hanzi: "水很甜。",
      en: "The water is very sweet.",
      ru: "Вода очень сладкая.",
    },
    {
      pinyin: "{{Word:ta1}}-{{word:de}} {{word:shen1ti3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "他的身体很好。",
      en: "He is in good health.",
      ru: "У него хорошее здоровье.",
    },
    {
      pinyin: "{{Word:wo3}} {{word:kan4}}-{{word:guo4}} {{word:hen3}} {{word:qi2guai4}}-{{word:de}} {{word:dong4}}-{{word:wu4}}.",
      hanzi: "我看过很奇怪的动物。",
      en: "I've seen a very strange animal.",
      ru: "Я видел очень странное животное.",
    },
    {
      pinyin: "{{Word:na4}}-ge {{word:dong4}}-{{word:wu4}} {{word:hen3}} {{word:kuai4}}.",
      hanzi: "那个动物很快。",
      en: "That animal is very fast.",
      ru: "То животное очень быстрое.",
    },
  ],
  exercises: [
    {
      en: "Water has great value.",
      ru: "Ценность воды велика.",
      answer: "{{Word:shui3}}-{{word:de}} {{word:jia4zhi2}} {{word:hen3}} {{word:da4}}.",
      hanzi: "水的价值很大。",
    },
    {
      en: "I'm very cold.",
      ru: "Мне очень холодно.",
      answer: "{{Word:wo3}} {{word:hen3}} {{word:leng3}}.",
      hanzi: "我很冷。",
    },
    {
      en: "She is in good health.",
      ru: "У неё хорошее здоровье.",
      answer: "{{Word:ta1}}-{{word:de}} {{word:shen1ti3}} {{word:hen3}} {{word:hao3}}.",
      hanzi: "她的身体很好。",
    },
  ],
  faq: [
    // is this hěn the same as in Lesson {{lesson:modifying-nouns}}? (yes; stress it, or use zhēn)
    {
      question: {
        en: "Is this {{word:hen3}} the same as in Lesson {{lesson:modifying-nouns}}?",
        ru: "Это то же {{word:hen3}}, что в уроке {{lesson:modifying-nouns}}?",
      },
      en: "Yes. Said lightly, {{word:hen3}} mostly joins the thing to the adjective. To really mean \"very\", say it a little louder, or use {{word:zhen1}} (really).",
      ru: "Да. Если сказать его легко, {{word:hen3}} в основном просто связывает вещь с прилагательным. Чтобы действительно сказать «очень», произнесите его чуть громче или используйте {{word:zhen1}} (правда).",
    },
  ],
});
