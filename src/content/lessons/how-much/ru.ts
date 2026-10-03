// Russian text for how-much, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Уточнения 1 — Насколько"] },
  summary: {
    ru: [
      "Нам часто хочется сказать, насколько: чуть-чуть или очень.",
      "В этом уроке вы научитесь говорить «правда жарко», «очень холодно», «не очень странно» и «Тебе холодно?»",
    ],
  },
  vocabZhen: { ru: ["правда, по-настоящему"] },
  vocabRe: { ru: ["горячий, жаркий"] },
  vocabLeng: { ru: ["холодный"] },
  vocabTian: { ru: ["сладкий"] },
  vocabWeidao: { ru: ["вкус"] },
  vocabQiguai: { ru: ["странный"] },
  vocabShenti: { ru: ["тело; здоровье"] },
  vocabJiazhi: { ru: ["ценность, стоимость"] },
  vocabKuai: { ru: ["быстрый"] },
  proseVery: {
    ru: [
      "**Чтобы сказать «очень»**, поставьте {{word:hen3}} перед прилагательным.",
      "",
      "**Вещь + {{word:hen3}} + прилагательное**",
      "",
      "Слова, которые говорят «насколько», такие как {{word:hen3}}, {{word:zhen1}} и {{word:bu4}}, называются наречиями.",
      "{{word:hen3}} {{word:you3}} {{word:jia4zhi2}} («имеет много ценности») значит «ценный».",
      "Перед глаголом {{word:kuai4}} (быстрый) значит «быстро»: {{Word:kuai4}} {{word:lai2}}!",
      "{{word:wei4dao4}} — это вкус, хороший или нет: {{Word:wei4dao4}} {{word:hen3}} {{word:hao3}} — очень вкусно. {{Word:wei4dao4}} {{word:bu4}} {{word:hao3}} — невкусно.",
    ],
    tldr: {
      ru: ["{{word:hen3}} перед прилагательным значит «очень»."],
    },
    necessity: { ru: ["Теперь вы можете сказать, какое что-то."] },
  },
  exampleVery1: { ru: ["Этот инструмент очень ценный."] },
  exampleVery2: { ru: ["Ценность воды велика."] },
  exampleVery3: { ru: ["Вода очень горячая."] },
  exampleVery4: { ru: ["Мне очень холодно."] },
  exampleVery5: { ru: ["Фрукт очень сладкий."] },
  exampleVery6: { ru: ["У него хорошее здоровье."] },
  exampleVery8: { ru: ["Я видел очень странное животное."] },
  exampleVery9: { ru: ["То животное очень быстрое."] },
  proseReally: {
    ru: [
      "**Чтобы сказать «правда, по-настоящему»**, поставьте {{word:zhen1}} перед прилагательным.",
      "",
      "**Вещь + {{word:zhen1}} + прилагательное**",
      "",
      "Само по себе это уже целое предложение: {{Word:zhen1}} {{word:re4}}! (Правда жарко!)",
    ],
    tldr: {
      ru: ["{{word:zhen1}} перед прилагательным значит «правда, по-настоящему»."],
    },
    necessity: {
      ru: [
        "Теперь вы можете сказать, насколько сильно вы что-то чувствуете.",
      ],
    },
  },
  exampleReally1: { ru: ["Правда жарко!"] },
  exampleReally2: { ru: ["Она правда странная."] },
  exampleReally3: { ru: ["Этот фрукт правда сладкий!"] },
  exampleReally4: { ru: ["Ты правда быстрый!"] },
  exampleReally5: { ru: ["У этого фрукта правда хороший вкус!"] },
  proseNot: {
    ru: [
      "**Чтобы сказать «не» или «не очень»**, поставьте {{word:bu4}} или {{word:bu4}} {{word:hen3}} перед прилагательным.",
      "",
      "**Вещь + {{word:bu4}} (+ {{word:hen3}}) + прилагательное**",
    ],
    tldr: {
      ru: [
        "{{word:bu4}} перед прилагательным значит «не». {{word:bu4}} {{word:hen3}} — «не очень».",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, каким что-то не является."] },
  },
  exampleNot1: { ru: ["Вода не холодная."] },
  exampleNot2: { ru: ["Это не очень странно."] },
  exampleNot3: { ru: ["Рис не горячий."] },
  exampleNot4: { ru: ["Я не быстрый."] },
  exampleNot5: { ru: ["Невкусно."] },
  vocabLao: { ru: ["старый"] },
  proseAsk: {
    ru: [
      "**Чтобы спросить, какое что-то**, поставьте {{word:ma}} после прилагательного.",
      "",
      "**Вещь + прилагательное + {{word:ma}}?**",
      "",
      "{{word:lao3}} значит «старый» — о людях, животных и растениях. Чтобы сказать «молодой», говорите {{word:bu4}} {{word:lao3}}.",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:ma}} после прилагательного, чтобы спросить: {{Word:ni3}} {{word:leng3}} {{word:ma}}?",
      ],
    },
    necessity: { ru: ["Теперь вы можете спросить, как у кого-то дела."] },
  },
  exampleAsk1: { ru: ["Вода горячая?"] },
  exampleAsk2: { ru: ["Тебе холодно?"] },
  exampleAsk3: { ru: ["Ты здоров?"] },
  exampleAsk4: { ru: ["Твои родители старые?"] },
  exampleAsk5: { ru: ["То животное очень старое."] },
  exampleAsk6: { ru: ["Моё тело правда горячее."] },
  exampleAsk7: { ru: ["Это чего-нибудь стоит?"] },
  exampleAsk8: { ru: ["Вкусно?"] },
  infoHowMuch: {
    title: { ru: ["Насколько"] },
    items: [
      {
        ru: [
          "{{word:hen3}} + прилагательное — очень: {{Word:shui3}} {{word:hen3}} {{word:re4}}. (Вода очень горячая.)",
        ],
      },
      {
        ru: [
          "{{word:zhen1}} + прилагательное — правда: {{Word:zhen1}} {{word:re4}}! (Правда жарко!)",
        ],
      },
      {
        ru: [
          "{{word:bu4}} / {{word:bu4}} {{word:hen3}} + прилагательное — не / не очень: {{Word:shui3}} {{word:bu4}} {{word:leng3}}. (Вода не холодная.)",
        ],
      },
      {
        ru: [
          "прилагательное + {{word:ma}}? — вопрос: {{Word:ni3}} {{word:leng3}} {{word:ma}}? (Тебе холодно?)",
        ],
      },
      {
        ru: [
          "{{word:hen3}} {{word:you3}} {{word:jia4zhi2}} — ценный: {{Word:zhe4}}-ge {{word:gong1ju4}} {{word:hen3}} {{word:you3}} {{word:jia4zhi2}}. (Этот инструмент очень ценный.)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Ценность воды велика."] },
  exercise2: { ru: ["Рис правда горячий."] },
  exercise3: { ru: ["Мне очень холодно."] },
  exercise4: { ru: ["Фрукт сладкий?"] },
  exercise5: { ru: ["Тот человек правда странный."] },
  exercise6: { ru: ["Мои родители не старые."] },
  exercise7: { ru: ["У неё хорошее здоровье."] },
  exercise8: { ru: ["Вода не холодная."] },
  exercise9: { ru: ["Ты правда быстрый!"] },
  exercise10: { ru: ["То животное старое?"] },
  exercise11: { ru: ["Рис невкусный."] },
  answer1: {
    ru: [
      "{{Word:shui3}}-{{word:de}} {{word:jia4zhi2}} {{word:hen3}} {{word:da4}}.",
    ],
  },
  answer2: { ru: ["{{Word:mi3fan4}} {{word:zhen1}} {{word:re4}}."] },
  answer3: { ru: ["{{Word:wo3}} {{word:hen3}} {{word:leng3}}."] },
  answer4: { ru: ["{{Word:shui3guo3}} {{word:tian2}} {{word:ma}}?"] },
  answer5: {
    ru: [
      "{{Word:na4}}-ge {{word:ren2}} {{word:zhen1}} {{word:qi2guai4}}.",
    ],
  },
  answer6: {
    ru: [
      "{{Word:wo3}}-{{word:de}} {{word:fu4mu3}} {{word:bu4}} {{word:lao3}}.",
    ],
  },
  answer7: {
    ru: [
      "{{Word:ta1}}-{{word:de}} {{word:shen1ti3}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
  answer8: { ru: ["{{Word:shui3}} {{word:bu4}} {{word:leng3}}."] },
  answer9: { ru: ["{{Word:ni3}} {{word:zhen1}} {{word:kuai4}}!"] },
  answer10: { ru: ["{{Word:na4}}-ge {{word:dong4wu4}} {{word:lao3}} {{word:ma}}?"] },
  answer11: { ru: ["{{Word:mi3fan4}}-{{word:de}} {{word:wei4dao4}} {{word:bu4}} {{word:hao3}}."] },
  faqHenStress: {
    question: { ru: ["Это то же {{word:hen3}}, что в уроке {{lesson:modifying-nouns}}?"] },
    ru: [
      "Да. Если сказать его легко, {{word:hen3}} в основном просто связывает вещь с прилагательным. Чтобы действительно сказать «очень», произнесите его чуть громче или используйте {{word:zhen1}} (правда).",
    ],
  },
  faqBuHenOrder: {
    question: { ru: ["{{word:bu4}} {{word:hen3}} — то же самое, что {{word:hen3}} {{word:bu4}}?"] },
    ru: [
      "Нет, порядок важен, как и в русском. {{word:bu4}} {{word:hen3}} {{word:hao3}} — «не очень хорошо». {{word:hen3}} {{word:bu4}} {{word:hao3}} — «очень нехорошо», то есть совсем плохо.",
    ],
  },
  faqNoHenInQuestion: {
    question: { ru: ["Почему в {{word:shui3}} {{word:re4}} {{word:ma}} нет {{word:hen3}}?"] },
    ru: [
      "В вопросе оно не нужно: {{Word:shui3}} {{word:re4}} {{word:ma}}? спрашивает «Вода горячая?». С {{word:hen3}} получится «Вода очень горячая?».",
    ],
  },
};

export default ru;
