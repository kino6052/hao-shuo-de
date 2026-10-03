// Russian text for numbers, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Числа"] },
  summary: {
    ru: [
      "В любом языке нужно уметь считать.",
      "В этом уроке вы научитесь считать, говорить «два животных», «номер два», «три часа» и «немного воды», а ещё складывать: «три и четыре вместе — семь».",
    ],
  },
  vocabYi: { ru: ["один"] },
  vocabEr: { ru: ["два (при счёте, номер два, 12, 20)"] },
  vocabSan: { ru: ["три"] },
  vocabSi: { ru: ["четыре"] },
  vocabWu: { ru: ["пять"] },
  vocabLiu: { ru: ["шесть"] },
  vocabQi: { ru: ["семь"] },
  vocabBa: { ru: ["восемь"] },
  vocabJiu: { ru: ["девять"] },
  vocabShi: { ru: ["десять"] },
  proseAloud: {
    ru: [
      "**Чтобы считать вслух**, называйте числа по порядку.",
      "",
      "**{{word:yi1}}, {{word:er4}}, {{word:san1}}, {{word:si4}}, {{word:wu3}} …**",
      "",
      "1 {{word:yi1}}, 2 {{word:er4}}, 3 {{word:san1}}, 4 {{word:si4}}, 5 {{word:wu3}}, 6 {{word:liu4}}, 7 {{word:qi1}}, 8 {{word:ba1}}, 9 {{word:jiu3}}, 10 {{word:shi2}}.",
    ],
    tldr: {
      ru: [
        "Считайте: {{word:yi1}}, {{word:er4}}, {{word:san1}} … {{word:shi2}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете считать до десяти."] },
  },
  exampleAloud1: { ru: ["Раз, два, три!"] },
  exampleAloud2: { ru: ["Четыре, пять, шесть."] },
  exampleAloud3: { ru: ["Семь, восемь, девять, десять."] },
  exampleAloud4: { ru: ["Три больше двух."] },
  exampleAloud5: { ru: ["Десять — самое большое."] },
  vocabLiang: { ru: ["два (перед gè)"] },
  proseCount: {
    ru: [
      "**Чтобы посчитать вещи**, назовите число, потом {{word:ge4}}, потом саму вещь.",
      "",
      "**число + {{word:ge4}} + существительное**",
      "",
      "Для двух вещей говорите {{word:liang3}}, а не {{word:er4}}: {{word:liang3}}-ge.",
      "Существительное не меняется: и «один человек», и «пять человек» — это {{word:ren2}}.",
    ],
    tldr: {
      ru: [
        "число + {{word:ge4}} + существительное: {{word:san1}}-ge {{word:ren2}} — три человека.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, сколько."] },
  },
  exampleCount1: { ru: ["Один человек."] },
  exampleCount2: { ru: ["Два животных."] },
  exampleCount3: { ru: ["Три коробки."] },
  exampleCount4: { ru: ["У меня четыре фрукта."] },
  exampleCount7: { ru: ["На полу семь палок."] },
  exampleCount9: { ru: ["Девять человек едят рис."] },
  exampleCount10: { ru: ["Десять растений."] },
  exampleCount24: { ru: ["Я покупаю три фрукта."] },
  proseCountAlone: {
    ru: [
      "**Чтобы не повторять существительное**, когда и так понятно, о чём речь, назовите только число и {{word:ge4}}.",
      "",
      "**число-{{word:ge4}}**",
      "",
      "{{Word:ta1}} {{word:yao4}} {{word:liu4}}-ge — «он хочет шесть»: шесть того, о чём вы говорите.",
    ],
    tldr: {
      ru: [
        "Когда вещь понятна, назовите только число и {{word:ge4}}: {{word:liu4}}-ge — шесть штук.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать «сколько», не повторяя существительное."] },
  },
  exampleCount6: { ru: ["Он хочет шесть."] },
  exampleCount12: { ru: ["Я хочу семь."] },
  exampleCount25: { ru: ["У меня три, а у него пять."] },
  proseCountKinds: {
    ru: [
      "**Чтобы посчитать виды, разы или части**, поставьте число перед {{word:zhong3}} (вид), {{word:ci4}} (раз) или {{word:bu4fen}} (часть) вместо {{word:ge4}}.",
      "",
      "**число-{{word:zhong3}} / число-{{word:ci4}} / число-{{word:bu4fen}}**",
    ],
    tldr: {
      ru: [
        "Виды считают с {{word:zhong3}}, разы — с {{word:ci4}}: {{word:san1}}-{{word:zhong3}}, {{word:san1}}-{{word:ci4}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, сколько видов и сколько раз."] },
  },
  exampleCount20: { ru: ["У меня три сорта фруктов."] },
  exampleCount21: { ru: ["Часть людей ушла."] },
  exampleCount23: { ru: ["Я был там три раза."] },
  proseTeens: {
    ru: [
      "**Чтобы назвать числа больше десяти**, поставьте {{word:shi2}} (десять) перед другим числом или после него.",
      "",
      "**{{word:shi2}} + число (11–19) / число + {{word:shi2}} (20, 30 …)**",
      "",
      "{{word:shi2}}-{{word:er4}} — это 12 (десять и два). {{word:er4}}-{{word:shi2}} — это 20 (два десятка).",
    ],
    tldr: {
      ru: [
        "{{word:shi2}}-{{word:er4}} — это 12. {{word:er4}}-{{word:shi2}} — это 20.",
      ],
    },
    necessity: { ru: ["Теперь вы можете считать дальше десяти."] },
  },
  exampleTeens1: { ru: ["Одиннадцать человек."] },
  exampleTeens2: { ru: ["У меня тринадцать инструментов."] },
  exampleTeens3: { ru: ["Здесь пятнадцать животных."] },
  exampleTeens4: { ru: ["Двенадцать фруктов."] },
  exampleTeens5: { ru: ["Двадцать человек."] },
  exampleTeens6: { ru: ["Тридцать коробок."] },
  vocabHao: { ru: ["номер (как в «номер два»)"] },
  proseLabel: {
    ru: [
      "**Чтобы сказать «номер один», «номер два»**, поставьте {{word:hao4}} после числа.",
      "",
      "**число + {{word:hao4}}**",
    ],
    tldr: {
      ru: [
        "число + {{word:hao4}}: {{word:er4}}-{{word:hao4}} — номер два.",
      ],
    },
    necessity: { ru: ["Теперь вы можете называть вещи по номерам."] },
  },
  exampleLabel1: { ru: ["Мой дом — номер пять."] },
  exampleLabel2: { ru: ["Где номер два?"] },
  exampleLabel3: { ru: ["Где номер три?"] },
  exampleLabel4: { ru: ["Ты номер один!"] },
  exampleLabel5: { ru: ["Номер пять передо мной."] },
  vocabDian: { ru: ["час (о времени); yī-diǎn: немного"] },
  proseClock: {
    ru: [
      "**Чтобы сказать, который час**, поставьте {{word:dian3}} (час) после числа.",
      "",
      "**число + {{word:dian3}}**",
      "",
      "Время ставится перед глаголом: {{Word:wo3}} {{word:shi2}}-{{word:er4}}-{{word:dian3}} {{word:chi1}}. Спрашивайте с {{word:shen2me}} {{word:shi2jian1}} (урок {{lesson:when-it-happens}}).",
    ],
    tldr: {
      ru: [
        "число + {{word:dian3}} — это время: {{word:san1}}-{{word:dian3}} — три часа.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, который час."] },
  },
  exampleClock1: { ru: ["Сейчас три часа."] },
  exampleClock2: { ru: ["Я ем в двенадцать часов."] },
  exampleClock3: { ru: ["Он ложится спать в десять."] },
  exampleClock4: { ru: ["Я иду домой в три."] },
  exampleClock5: { ru: ["Он ложится в десять."] },
  proseLittle: {
    ru: [
      "**Чтобы сказать «немного»**, говорите {{word:yi1}}-{{word:dian3}} (немного).",
      "",
      "**{{word:yi1}}-{{word:dian3}} + существительное / прилагательное + {{word:yi1}}-{{word:dian3}}**",
      "",
      "Перед существительным это «немного чего-то»: {{word:yi1}}-{{word:dian3}} {{word:shui3}} — немного воды. После прилагательного — «чуть больше»: {{word:da4}} {{word:yi1}}-{{word:dian3}} — чуть больше. А {{word:you3}} {{word:yi1}}-{{word:dian3}} перед прилагательным — «немного»: {{word:you3}} {{word:yi1}}-{{word:dian3}} {{word:leng3}} — немного холодно.",
    ],
    tldr: {
      ru: [
        "{{word:yi1}}-{{word:dian3}} — немного: {{word:yi1}}-{{word:dian3}} {{word:shui3}}, {{word:da4}} {{word:yi1}}-{{word:dian3}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать «немного» или «чуть больше»."] },
  },
  exampleLittle1: { ru: ["Я хочу немного воды."] },
  exampleLittle2: { ru: ["У меня немного денег."] },
  exampleLittle3: { ru: ["Этот чуть больше."] },
  exampleLittle4: { ru: ["Вода немного холодная."] },
  exampleLittle5: { ru: ["Ешь побольше!"] },
  vocabSuan: { ru: ["считать, вычислять"] },
  proseAddTake: {
    ru: [
      "**Чтобы сложить**, сложите числа вместе с помощью {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}. **Чтобы отнять**, используйте {{word:na2}} (взять).",
      "",
      "**A, B {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} C / {{word:cong2}} A {{word:li3}}-{{word:mian4}} {{word:na2}} B, {{word:shi4}} C**",
      "",
      "Чтобы спросить ответ, закончите словами {{word:shi4}} {{word:duo1}}-{{word:shao3}}? {{word:na2}} (взять) вы знаете из урока {{lesson:direction-and-result}}: {{Word:na2}} {{word:yi1}}-ge! (Возьми одну!)",
      "{{word:suan4}} — «посчитать»: {{Word:wo3}} {{word:suan4}} {{word:yi1xia4}} — дай-ка я посчитаю.",
    ],
    tldr: {
      ru: [
        "Сложить: соедините числа с {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}. Отнять: {{word:na2}}.",
      ],
    },
    necessity: { ru: ["Теперь вы можете складывать и вычитать."] },
  },
  exampleAddTake1: { ru: ["Три и четыре вместе — семь. (3 + 4 = 7)"] },
  exampleAddTake2: { ru: ["Пять и пять вместе — десять. (5 + 5 = 10)"] },
  exampleAddTake3: { ru: ["Возьми три из семи — будет четыре. (7 − 3 = 4)"] },
  exampleAddTake4: { ru: ["Возьми шесть из десяти — сколько будет? (10 − 6 = ?)"] },
  exampleAddTake5: { ru: ["Возьми одну!"] },
  exampleAddTake6: { ru: ["Дай-ка я посчитаю."] },
  exampleAddTake7: { ru: ["Ты можешь посчитать?"] },
  exampleAddTake8: { ru: ["Я посчитал: семь."] },
  proseTimesShare: {
    ru: [
      "**Чтобы умножить**, сложите число вместе много раз. **Чтобы разделить**, посмотрите, сколько раз его можно отнять.",
      "",
      "**{{word:ba3}} A {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} B-{{word:ci4}}, {{word:shi4}} C / {{word:cong2}} C {{word:li3}}-{{word:mian4}} {{word:na2}} A, {{word:neng2}} {{word:na2}} B-{{word:ci4}}**",
    ],
    tldr: {
      ru: [
        "Умножить: сложить вместе много раз. Разделить: посчитать, сколько раз можно отнять.",
      ],
    },
    necessity: { ru: ["Теперь вы можете умножать и делить."] },
  },
  exampleTimesShare1: { ru: ["Четыре, сложенные три раза, — двенадцать. (3 × 4 = 12)"] },
  exampleTimesShare2: { ru: ["Пять, сложенные два раза, — десять. (2 × 5 = 10)"] },
  exampleTimesShare3: { ru: ["Из двенадцати можно взять четыре три раза. (12 ÷ 4 = 3)"] },
  exampleTimesShare4: { ru: ["Сколько раз можно взять пять из десяти? (10 ÷ 5 = ?)"] },
  infoCounting: {
    title: { ru: ["Счёт"] },
    items: [
      {
        ru: [
          "1 {{word:yi1}}, 2 {{word:er4}}, 3 {{word:san1}}, 4 {{word:si4}}, 5 {{word:wu3}}, 6 {{word:liu4}}, 7 {{word:qi1}}, 8 {{word:ba1}}, 9 {{word:jiu3}}, 10 {{word:shi2}}",
        ],
      },
      {
        ru: [
          "число + {{word:ge4}} + существительное: {{Word:san1}}-ge {{word:ren2}} (три человека). Для двух вещей — {{word:liang3}}-ge.",
        ],
      },
      {
        ru: [
          "Больше десяти: {{word:shi2}}-{{word:er4}} (12), {{word:er4}}-{{word:shi2}} (20)",
        ],
      },
      {
        ru: [
          "число + {{word:hao4}} — номер: {{Word:er4}}-{{word:hao4}} (номер два)",
        ],
      },
      {
        ru: [
          "число + {{word:dian3}} — час: {{Word:xian4zai4}} {{word:shi4}} {{word:san1}}-{{word:dian3}}. (Сейчас три часа.)",
        ],
      },
      {
        ru: [
          "{{word:yi1}}-{{word:dian3}} — немного: {{Word:wo3}} {{word:yao4}} {{word:yi1}}-{{word:dian3}} {{word:shui3}}. (Я хочу немного воды.) {{Word:zhe4}}-ge {{word:da4}} {{word:yi1}}-{{word:dian3}}. (Этот чуть больше.)",
        ],
      },
      {
        ru: [
          "A, B {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} — сложить: {{Word:san1}}, {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:qi1}}. (3 + 4 = 7) {{word:cong2}} A {{word:li3}}-{{word:mian4}} {{word:na2}} B — отнять: {{Word:cong2}} {{word:qi1}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:san1}}, {{word:shi4}} {{word:si4}}. (7 − 3 = 4)",
        ],
      },
      {
        ru: [
          "{{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} B-{{word:ci4}} — умножить: {{Word:ba3}} {{word:si4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:san1}}-{{word:ci4}}, {{word:shi4}} {{word:shi2}}-{{word:er4}}. (3 × 4 = 12) {{word:na2}} A, {{word:neng2}} {{word:na2}} B-{{word:ci4}} — разделить: {{Word:cong2}} {{word:shi2}}-{{word:er4}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:si4}}, {{word:neng2}} {{word:na2}} {{word:san1}}-{{word:ci4}}. (12 ÷ 4 = 3)",
        ],
      },
    ],
  },
  exercise1: { ru: ["одна коробка"] },
  exercise2: { ru: ["два человека"] },
  exercise3: { ru: ["У меня три инструмента."] },
  exercise4: { ru: ["четыре растения"] },
  exercise5: { ru: ["Пять человек едят."] },
  exercise6: { ru: ["Я хочу шесть."] },
  exercise7: { ru: ["семь животных"] },
  exercise8: { ru: ["восемь палок"] },
  exercise9: { ru: ["девять фруктов"] },
  exercise10: { ru: ["десять человек"] },
  exercise11: { ru: ["Где номер четыре?"] },
  exercise12: { ru: ["двенадцать человек"] },
  exercise13: { ru: ["Посчитайте от одного до трёх."] },
  exercise14: { ru: ["Сейчас пять часов."] },
  exercise15: { ru: ["Этот чуть меньше."] },
  exercise16: { ru: ["Два и шесть вместе — восемь."] },
  exercise17: { ru: ["Возьми два из девяти — будет семь."] },
  exercise18: { ru: ["Три, сложенные три раза, — девять."] },
  exercise19: { ru: ["Возьми немного!"] },
  exercise20: { ru: ["Дай-ка я посчитаю."] },
  answer1: { ru: ["{{Word:yi1}}-ge {{word:he2zi}}."] },
  answer2: { ru: ["{{Word:liang3}}-ge {{word:ren2}}."] },
  answer3: {
    ru: [
      "{{Word:wo3}} {{word:you3}} {{word:san1}}-ge {{word:gong1ju4}}.",
    ],
  },
  answer4: { ru: ["{{Word:si4}}-ge {{word:zhi2wu4}}."] },
  answer5: { ru: ["{{Word:wu3}}-ge {{word:ren2}} {{word:chi1}}."] },
  answer6: { ru: ["{{Word:wo3}} {{word:yao4}} {{word:liu4}}-ge."] },
  answer7: { ru: ["{{Word:qi1}}-ge {{word:dong4wu4}}."] },
  answer8: { ru: ["{{Word:ba1}}-ge {{word:gun4zi}}."] },
  answer9: { ru: ["{{Word:jiu3}}-ge {{word:shui3guo3}}."] },
  answer10: { ru: ["{{Word:shi2}}-ge {{word:ren2}}."] },
  answer11: {
    ru: [
      "{{Word:si4}}-{{word:hao4}} {{word:zai4}} {{word:na3li3}}?",
    ],
  },
  answer12: { ru: ["{{Word:shi2}}-{{word:er4}}-ge {{word:ren2}}."] },
  answer13: { ru: ["{{Word:yi1}}, {{word:er4}}, {{word:san1}}."] },
  answer14: { ru: ["{{Word:xian4zai4}} {{word:shi4}} {{word:wu3}}-{{word:dian3}}."] },
  answer15: { ru: ["{{Word:zhe4}}-ge {{word:xiao3}} {{word:yi1}}-{{word:dian3}}."] },
  answer16: { ru: ["{{Word:er4}}, {{word:liu4}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}, {{word:shi4}} {{word:ba1}}."] },
  answer17: { ru: ["{{Word:cong2}} {{word:jiu3}} {{word:li3}}-{{word:mian4}} {{word:na2}} {{word:er4}}, {{word:shi4}} {{word:qi1}}."] },
  answer18: { ru: ["{{Word:ba3}} {{word:san1}} {{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}} {{word:san1}}-{{word:ci4}}, {{word:shi4}} {{word:jiu3}}."] },
  answer19: { ru: ["{{Word:na2}} {{word:yi1}}-{{word:dian3}}!"] },
  answer20: { ru: ["{{Word:wo3}} {{word:suan4}} {{word:yi1xia4}}."] },
  faqErInBigNumbers: {
    question: { ru: ["{{word:liang3}} говорят и в 12 или 20?"] },
    ru: [
      "Нет. Внутри большого числа говорите {{word:er4}}, даже с вещами: {{word:shi2}}-{{word:er4}}-ge {{word:ren2}} (12 человек). {{word:liang3}} — только для «два» самого по себе.",
    ],
  },
  faqHaoDays: {
    question: { ru: ["{{word:hao4}} — только для «номер два» и подобного?"] },
    ru: [
      "Ещё им называют числа месяца: {{word:wu3}}-{{word:hao4}} — пятое число.",
    ],
  },
  faqYiTone: {
    question: { ru: ["Почему {{word:yi1}}-ge звучит с другим тоном?"] },
    ru: [
      "Перед {{word:ge4}} {{word:yi1}} произносится восходящим (вторым) тоном. В книге всё равно пишется {{word:yi1}}. Когда так бывает, рассказано в приложении об изменениях тонов.",
    ],
  },
  faqPlusWords: {
    question: { ru: ["Есть ли слово «плюс»?"] },
    ru: [
      "В китайском есть слова для «плюс», «минус», «умножить» и «разделить». В Hǎo-shuō-de они не нужны: числа складывают вместе ({{word:fang4}} {{word:zai4}} {{word:yi1}}-{{word:qi3}}) или забирают ({{word:na2}}).",
    ],
  },
};

export default ru;
