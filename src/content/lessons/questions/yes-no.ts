// To ask a yes-or-no question, put ma at the end. Pattern: sentence + ma?
import { lessonModule } from "../../../lib/lesson.ts";

export default lessonModule({
  id: "yes-no",
  words: [
    {
      word: "ma",
      en: "turns a sentence into a yes-or-no question",
      ru: "превращает предложение в вопрос «да или нет»",
    },
    {
      word: "gong1ju4",
      en: "tool",
      ru: "инструмент",
    },
    {
      word: "he2zi",
      en: "box",
      ru: "коробка",
    },
  ],
  prose: {
    en: [
      "**To ask a yes-or-no question**, put {{word:ma}} at the end.",
      "",
      "**sentence + {{word:ma}}?**",
      "",
      "Or say the verb, then {{word:bu4}}, then the verb again: {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? For {{word:you3}}: {{word:you3}}-{{word:mei2}}-{{word:you3}}.",
    ],
    ru: [
      "**Чтобы задать вопрос «да или нет»**, поставьте {{word:ma}} в конце.",
      "",
      "**предложение + {{word:ma}}?**",
      "",
      "Или скажите глагол, потом {{word:bu4}}, потом снова глагол: {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? Для {{word:you3}}: {{word:you3}}-{{word:mei2}}-{{word:you3}}.",
    ],
    tldr: {
      en: "Put {{word:ma}} at the end to ask a yes-or-no question.",
      ru: "Поставьте {{word:ma}} в конце, чтобы задать вопрос «да или нет».",
    },
    necessity: {
      en: "Now you can check if something is true.",
      ru: "Теперь вы можете проверить, правда ли что-то.",
    },
  },
  info: {
    items: [
      {
        en: "sentence + {{word:ma}}?, yes or no: {{Word:ni3}} {{word:you3}} {{word:gong1ju4}} {{word:ma}}? (Do you have a tool?)",
        ru: "предложение + {{word:ma}}? — да или нет: {{Word:ni3}} {{word:you3}} {{word:gong1ju4}} {{word:ma}}? (У тебя есть инструмент?)",
      },
      {
        en: "verb-{{word:bu4}}-verb?, yes or no: {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? (Do you listen?)",
        ru: "глагол-{{word:bu4}}-глагол? — да или нет: {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? (Ты слушаешь?)",
      },
    ],
  },
  examples: [
    {
      pinyin: "{{Word:ni3}} {{word:you3}} {{word:gong1ju4}} {{word:ma}}?",
      hanzi: "你有工具吗？",
      en: "Do you have a tool?",
      ru: "У тебя есть инструмент?",
    },
    {
      pinyin: "{{Word:zhe4}} {{word:shi4}} {{word:he2zi}} {{word:ma}}?",
      hanzi: "这是盒子吗？",
      en: "Is this a box?",
      ru: "Это коробка?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:he1}} {{word:shui3}} {{word:ma}}?",
      hanzi: "他喝水吗？",
      en: "Does he drink water?",
      ru: "Он пьёт воду?",
    },
    {
      pinyin: "{{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:fu4mu3}}?",
      hanzi: "你听不听父母？",
      en: "Do you listen to your parents?",
      ru: "Ты слушаешься родителей?",
    },
    {
      pinyin: "{{Word:ta1}} {{word:you3}}-{{word:mei2}}-{{word:you3}} {{word:jin1}}?",
      hanzi: "她有没有金？",
      en: "Does she have money?",
      ru: "У неё есть деньги?",
    },
  ],
  exercises: [
    {
      en: "Ask \"Does he listen?\" without {{word:ma}}.",
      ru: "Спросите «Он слушает?» без {{word:ma}}.",
      answer: "{{Word:ta1}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}?",
      hanzi: "他听不听？",
    },
    {
      en: "Is the tool small?",
      ru: "Инструмент маленький?",
      answer: "{{Word:gong1ju4}} {{word:xiao3}} {{word:ma}}?",
      hanzi: "工具小吗？",
    },
    {
      en: "Is that your box?",
      ru: "Это твоя коробка?",
      answer: "{{Word:na4}} {{word:shi4}} {{word:ni3}}-{{word:de}} {{word:he2zi}} {{word:ma}}?",
      hanzi: "那是你的盒子吗？",
    },
  ],
  faq: [
    // can ma and verb-bù-verb go together? (no -- pick one)
    {
      question: {
        en: "Can I use {{word:ma}} and verb-{{word:bu4}}-verb together?",
        ru: "Можно ли использовать {{word:ma}} и глагол-{{word:bu4}}-глагол вместе?",
      },
      en: [
        "No, pick one. {{Word:ni3}} {{word:ting1}} {{word:ma}}? and {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? both work, but {{word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:ma}}? is wrong.",
        "Both ask the same thing. {{word:ma}} works with any sentence, so it's the easy one to start with.",
      ],
      ru: [
        "Нет, выберите одно. {{Word:ni3}} {{word:ting1}} {{word:ma}}? и {{Word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}}? — оба правильные, а {{word:ni3}} {{word:ting1}}-{{word:bu4}}-{{word:ting1}} {{word:ma}}? — ошибка.",
        "Оба вопроса спрашивают одно и то же. {{word:ma}} подходит к любому предложению, так что с него проще начать.",
      ],
    },
    // why yǒu-méi-yǒu, not yǒu-bù-yǒu? (yǒu's "not" is méi)
    {
      question: {
        en: "Why is it {{word:you3}}-{{word:mei2}}-{{word:you3}}, not {{word:you3}}-{{word:bu4}}-{{word:you3}}?",
        ru: "Почему {{word:you3}}-{{word:mei2}}-{{word:you3}}, а не {{word:you3}}-{{word:bu4}}-{{word:you3}}?",
      },
      en: "{{word:you3}} never takes {{word:bu4}}. Its \"not\" is {{word:mei2}}: {{word:mei2}}-{{word:you3}}. So the question uses {{word:mei2}} too.",
      ru: "{{word:you3}} никогда не берёт {{word:bu4}}. Его «не» — это {{word:mei2}}: {{word:mei2}}-{{word:you3}}. Поэтому и в вопросе стоит {{word:mei2}}.",
    },
  ],
});
