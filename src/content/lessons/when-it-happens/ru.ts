// Russian text for when-it-happens, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Время 1 — Когда это происходит"] },
  summary: {
    ru: [
      "Нам часто нужно уметь выразить время, когда что-то происходит.",
      "В этом уроке вы научитесь говорить «Я поел.», «Я как раз ем.», «Я буду есть.», «Я уже пробовал рис.» и «Ночью я сплю.»",
    ],
  },
  vocabLe: { ru: ["после глагола: сделано"] },
  vocabShuijiao: { ru: ["спать"] },
  vocabFasheng: { ru: ["происходить, случаться"] },
  proseDone: {
    ru: [
      "**Чтобы сказать, что что-то сделано**, поставьте {{word:le}} после глагола.",
      "",
      "**Кто + глагол + {{word:le}}**",
      "",
      "Глаголы никогда не меняются. Когда это было, показывают маленькие слова (частицы), такие как {{word:le}}.",
      "{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}? значит «Что случилось?» ({{word:fa1sheng1}} — «случаться»).",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:le}} после глагола, чтобы сказать, что это сделано.",
      ],
    },
    necessity: {
      ru: ["Теперь вы можете говорить о том, что уже случилось."],
    },
  },
  exampleDone1: { ru: ["Я поел."] },
  exampleDone2: { ru: ["Он лёг спать."] },
  exampleDone3: { ru: ["Ты это видел?"] },
  exampleDone4: { ru: ["Что случилось?"] },
  exampleDone5: { ru: ["Ты знаешь, что случилось?"] },
  vocabZai: { ru: ["перед глаголом: как раз сейчас"] },
  vocabXianzai: { ru: ["сейчас"] },
  proseNow: {
    ru: [
      "**Чтобы сказать, что что-то происходит прямо сейчас**, поставьте {{word:zai4}} перед глаголом.",
      "",
      "**Кто + {{word:zai4}} + глагол**",
      "",
      "Это как русское «как раз сейчас»: {{Word:wo3}} {{word:zai4}} {{word:chi1}} — «Я как раз ем».",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:zai4}} перед глаголом, чтобы сказать, что это происходит прямо сейчас.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, что происходит."] },
  },
  exampleNow1: { ru: ["Я как раз ем."] },
  exampleNow2: { ru: ["Она спит."] },
  exampleNow3: { ru: ["На что ты смотришь?"] },
  exampleNow4: { ru: ["Почему ты спишь?"] },
  exampleNow5: { ru: ["Он сейчас спит."] },
  exampleNow6: { ru: ["Он, может быть, спит."] },
  exampleNow7: { ru: ["Я сейчас учусь писать."] },
  vocabHui: { ru: ["будет (о том, что случится)"] },
  proseWill: {
    ru: [
      "**Чтобы сказать, что что-то случится**, поставьте {{word:hui4}} перед глаголом.",
      "",
      "**Кто + {{word:hui4}} + глагол**",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:hui4}} перед глаголом, чтобы сказать, что это случится.",
      ],
    },
    necessity: { ru: ["Теперь вы можете говорить о том, что будет дальше."] },
  },
  exampleWill1: { ru: ["Я буду есть."] },
  exampleWill2: { ru: ["Он подождёт."] },
  exampleWill3: { ru: ["Ты будешь спать?"] },
  vocabYue: { ru: ["луна, ночь"] },
  vocabGuo: { ru: ["после глагола: уже когда-то делал"] },
  proseBefore: {
    ru: [
      "**Чтобы сказать, что вы уже когда-то что-то делали**, поставьте {{word:guo4}} после глагола.",
      "",
      "**Кто + глагол-{{word:guo4}}**",
      "",
      "Присоедините его к глаголу через дефис: {{word:chi1}}-{{word:guo4}}.",
    ],
    tldr: {
      ru: [
        "Поставьте {{word:guo4}} после глагола, чтобы сказать, что уже когда-то это делали.",
      ],
    },
    necessity: {
      ru: ["Теперь вы можете говорить о том, что уже пробовали."],
    },
  },
  exampleBefore1: { ru: ["Я уже пробовал рис."] },
  exampleBefore2: { ru: ["Ты когда-нибудь смотрел на луну?"] },
  exampleBefore3: { ru: ["Он это уже говорил."] },
  exampleBefore4: { ru: ["Такое уже случалось."] },
  vocabShijian: { ru: ["время"] },
  vocabRi: { ru: ["солнце, день"] },
  proseTime: {
    ru: [
      "**Чтобы сказать, когда**, сначала назовите время, потом поставьте запятую, а потом всё остальное.",
      "",
      "**Время, кто + глагол**",
      "",
      "{{word:shi2jian1}} значит «время». {{word:ri4}} — это солнце или день. {{word:yue4}} — луна или ночь.",
      "{{word:yue4}}-{{word:de}} {{word:shi2jian1}} («лунное время») значит «ночью».",
      "{{word:xian4zai4}} значит «сейчас»: {{Word:xian4zai4}}, {{word:wo3}} {{word:yao4}} {{word:shui4jiao4}}.",
    ],
    tldr: {
      ru: [
        "Сначала назовите время: {{word:yue4}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:shui4jiao4}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, когда что-то происходит."] },
  },
  exampleTime1: { ru: ["Ночью я сплю."] },
  exampleTime2: { ru: ["Днём я ем."] },
  exampleTime3: { ru: ["Когда ты ешь?"] },
  exampleTime4: { ru: ["Я смотрю на солнце."] },
  exampleTime5: { ru: ["Я смотрю на луну."] },
  exampleTime6: { ru: ["Сейчас я хочу спать."] },
  exampleTime7: { ru: ["Который сейчас час?"] },
  infoWhenItHappens: {
    title: { ru: ["Когда это происходит"] },
    items: [
      {
        ru: [
          "глагол + {{word:le}} — сделано: {{Word:wo3}} {{word:chi1}} {{word:le}}. (Я поел.)",
        ],
      },
      {
        ru: [
          "{{word:zai4}} + глагол — как раз сейчас: {{Word:wo3}} {{word:zai4}} {{word:chi1}}. (Я как раз ем.)",
        ],
      },
      {
        ru: [
          "{{word:hui4}} + глагол — будет: {{Word:wo3}} {{word:hui4}} {{word:chi1}}. (Я буду есть.)",
        ],
      },
      {
        ru: [
          "глагол-{{word:guo4}} — уже когда-то делал: {{Word:wo3}} {{word:chi1}}-{{word:guo4}} {{word:mi3fan4}}. (Я уже пробовал рис.)",
        ],
      },
      {
        ru: [
          "Сначала время: {{Word:yue4}}-{{word:de}} {{word:shi2jian1}}, {{word:wo3}} {{word:shui4jiao4}}. (Ночью я сплю.) {{Word:xian4zai4}}, … (Сейчас …)",
        ],
      },
      {
        ru: [
          "{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}? (Что случилось?)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Что случилось?"] },
  exercise2: { ru: ["Сейчас я ем."] },
  exercise3: { ru: ["Я поспал."] },
  exercise4: { ru: ["Он как раз ждёт."] },
  exercise5: { ru: ["Ты будешь писать?"] },
  exercise6: { ru: ["Я это уже слышал."] },
  exercise7: { ru: ["Что ты ешь?"] },
  exercise8: { ru: ["Когда ты спишь?"] },
  exercise9: { ru: ["Солнце большое."] },
  exercise10: { ru: ["Луна маленькая."] },
  answer1: {
    ru: ["{{Word:fa1sheng1}} {{word:le}} {{word:shen2me}}?"],
  },
  answer2: {
    ru: ["{{Word:xian4zai4}}, {{word:wo3}} {{word:zai4}} {{word:chi1}}."],
  },
  answer3: { ru: ["{{Word:wo3}} {{word:shui4jiao4}} {{word:le}}."] },
  answer4: { ru: ["{{Word:ta1}} {{word:zai4}} {{word:deng3}}."] },
  answer5: {
    ru: ["{{Word:ni3}} {{word:hui4}} {{word:xie3}} {{word:ma}}?"],
  },
  answer6: { ru: ["{{Word:wo3}} {{word:ting1}}-{{word:guo4}}."] },
  answer7: {
    ru: ["{{Word:ni3}} {{word:zai4}} {{word:chi1}} {{word:shen2me}}?"],
  },
  answer8: {
    ru: [
      "{{Word:shen2me}} {{word:shi2jian1}} {{word:ni3}} {{word:shui4jiao4}}?",
    ],
  },
  answer9: { ru: ["{{Word:ri4}} {{word:hen3}} {{word:da4}}."] },
  answer10: { ru: ["{{Word:yue4}} {{word:hen3}} {{word:xiao3}}."] },
  faqLePast: {
    question: { ru: ["{{word:le}} значит, что это было в прошлом?"] },
    ru: [
      "Не совсем. {{word:le}} говорит, что действие завершено, — примерно как разница между «ел» и «поел». У китайских глаголов нет формы прошлого, и когда вы рассказываете о прошлом вообще, {{word:le}} часто совсем не нужно.",
    ],
  },
  faqLeOrGuo: {
    question: { ru: ["Чем {{word:le}} отличается от -{{word:guo4}}?"] },
    ru: [
      "{{word:le}} говорит, что дело сделано: {{Word:wo3}} {{word:chi1}} {{word:le}} (Я поел). -{{word:guo4}} говорит, что это хотя бы раз уже было когда-то раньше: {{Word:wo3}} {{word:chi1}}-{{word:guo4}} {{word:mi3fan4}} (Я уже пробовал рис).",
    ],
  },
  faqHuiKnowHow: {
    question: { ru: ["{{word:hui4}} значит только «будет»?"] },
    ru: [
      "В полном китайском {{word:hui4}} также значит «уметь»: {{word:hui4}} {{word:xie3}} — «умеет писать». В Hǎo-shuō-de для этого есть {{word:zhi1dao4}} {{word:zen3me}} (урок {{lesson:pre-verbs}}), так что здесь {{word:hui4}} значит просто «будет».",
    ],
  },
};

export default ru;
