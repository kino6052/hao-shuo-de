// Russian text for inside-a-sentence, matching shape.ts's keys. Typed as
// `PartialByKey<LessonShape>`.
import type { PartialByKey } from "../../../lib/chapter-shape-types.ts";
import type { LessonShape } from "./shape.ts";

const ru: PartialByKey<LessonShape> = {
  title: { ru: ["Связи 1 — Внутри предложения"] },
  summary: {
    ru: [
      "Нам часто нужно сказать, для кого что-то или чем мы это делаем.",
      "В этом уроке вы научитесь говорить «дай мне», «писать инструментом», «ты и я», «это или то» и «для меня».",
    ],
  },
  vocabGei: { ru: ["давать; кому, для"] },
  proseGive: {
    ru: [
      "**Чтобы сказать, что вы даёте что-то кому-то**, используйте {{word:gei3}}: сначала человек, потом вещь.",
      "",
      "**Кто + {{word:gei3}} + человек + вещь**",
      "",
      "{{word:gei3}} перед глаголом значит «для» или «кому»: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:xie3}} — я пишу тебе.",
      "",
      "{{word:mai3}} (покупать) вы знаете из урока {{lesson:questions}}. Рынок — это {{word:mai3}} {{word:dong1xi}}-{{word:de}} {{word:di4fang1}}, место, где покупают вещи.",
    ],
    tldr: {
      ru: [
        "{{word:gei3}} + человек + вещь: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}} — я даю тебе воду.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, кто что получает."] },
  },
  exampleGive1: { ru: ["Дай мне."] },
  exampleGive2: { ru: ["Я даю тебе воду."] },
  exampleGive3: { ru: ["Она даёт мне одежду."] },
  exampleGive5: { ru: ["Он даёт мне три, а я ему — четыре."] },
  exampleGive6: { ru: ["Он даёт мне часть."] },
  exampleGive7: { ru: ["Я иду за покупками."] },
  exampleGive8: { ru: ["Рынок поблизости."] },
  exampleGive9: { ru: ["Дай мне немного воды."] },
  vocabYong: { ru: ["использовать; с помощью"] },
  vocabMo: { ru: ["трогать"] },
  vocabDa: { ru: ["бить"] },
  proseWith: {
    ru: [
      "**Чтобы сказать, чем вы что-то делаете**, поставьте {{word:yong4}} и вещь перед глаголом.",
      "",
      "**Кто + {{word:yong4}} + вещь + глагол**",
      "",
      "В русском это показывает окончание («пишу ручкой»), а в китайском — слово {{word:yong4}} («использую»).",
    ],
    tldr: {
      ru: [
        "{{word:yong4}} + вещь + глагол: {{Word:wo3}} {{word:yong4}} {{word:gong1ju4}} {{word:xie3}} — я пишу инструментом.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, как вы что-то делаете."] },
  },
  exampleWith1: { ru: ["Я пишу инструментом."] },
  exampleWith2: { ru: ["Он ест руками."] },
  exampleWith4: { ru: ["Он бьёт палкой."] },
  exampleWith6: { ru: ["Не бей животное палкой."] },
  exampleWith8: { ru: ["Животное трогает мою руку носом."] },
  exampleWith9: { ru: ["Он делает это по-другому."] },
  exampleWith13: { ru: ["Я считаю с помощью инструмента."] },
  exampleWith14: { ru: ["Я трогаю рукой шерсть животного."] },
  vocabHe: { ru: ["и (между существительными)"] },
  vocabHuozhe: { ru: ["или"] },
  proseAndOr: {
    ru: [
      "**Чтобы соединить два существительных**, поставьте между ними {{word:he2}} (и) или {{word:huo4zhe3}} (или).",
      "",
      "**A + {{word:he2}} / {{word:huo4zhe3}} + B**",
      "",
      "{{word:he2}} соединяет только существительные, а не целые предложения.",
    ],
    tldr: {
      ru: [
        "{{word:he2}} — «и», {{word:huo4zhe3}} — «или»: {{word:ni3}} {{word:he2}} {{word:wo3}} — ты и я.",
      ],
    },
    necessity: { ru: ["Теперь вы можете говорить о двух вещах сразу."] },
  },
  exampleAndOr1: { ru: ["Ты и я."] },
  exampleAndOr2: { ru: ["Мы с ним идём на улицу."] },
  exampleAndOr3: { ru: ["Я хочу это или то."] },
  exampleAndOr4: { ru: ["Ешь фрукты или рис."] },
  exampleAndOr5: { ru: ["Я хочу красный или синий."] },
  exampleAndOr6: { ru: ["Шесть мужчин и семь женщин."] },
  exampleAndOr7: { ru: ["Я хочу восемь или девять."] },
  vocabDui: { ru: ["к, по отношению к, для"] },
  proseToward: {
    ru: [
      "**Чтобы сказать, как кто-то относится к кому-то**, поставьте {{word:dui4}} и человека перед прилагательным.",
      "",
      "**A + {{word:dui4}} + B + прилагательное**",
      "",
      "{{word:dui4}} X {{word:lai2}} {{word:shuo1}} значит «для X»: {{word:dui4}} {{word:wo3}} {{word:lai2}} {{word:shuo1}} — для меня.",
    ],
    tldr: {
      ru: [
        "{{word:dui4}} + человек + прилагательное: {{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:hao3}} — он ко мне хорошо относится.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, каково что-то для кого-то."] },
  },
  exampleToward1: { ru: ["Он ко мне хорошо относится."] },
  exampleToward2: { ru: ["Вода полезна для растений."] },
  exampleToward3: { ru: ["Для меня это хорошо."] },
  exampleToward4: { ru: ["Солнце вредно для кожи."] },
  vocabQun: { ru: ["группа"] },
  proseGroup: {
    ru: [
      "**Чтобы говорить о группе**, используйте {{word:qun2}} (группа) вместо {{word:ge4}}.",
      "",
      "**{{word:yi1}} / {{word:zhe4}} / {{word:na4}} + {{word:qun2}} + существительное**",
    ],
    tldr: {
      ru: [
        "{{word:yi1}}-{{word:qun2}} {{word:ren2}} — группа людей.",
      ],
    },
    necessity: { ru: ["Теперь вы можете говорить о многих сразу."] },
  },
  exampleGroup1: { ru: ["На улице группа людей."] },
  exampleGroup2: { ru: ["Та группа животных большая."] },
  exampleGroup3: { ru: ["Я даю той группе людей воду."] },
  exampleGroup4: { ru: ["Группа животных играет в грязи."] },
  vocabGuanxi: { ru: ["отношения, связь"] },
  proseRelation: {
    ru: [
      "**Чтобы сказать, как ладят двое**, используйте {{word:guan1xi}} (отношения).",
      "",
      "**A {{word:he2}} B-{{word:de}} {{word:guan1xi}} + {{word:hen3}} + прилагательное**",
      "",
      "{{Word:mei2}}-{{word:you3}} {{word:guan1xi}}! («нет связи») значит «ничего страшного» или «неважно».",
    ],
    tldr: {
      ru: [
        "{{word:guan1xi}} — отношения. {{word:mei2}}-{{word:you3}} {{word:guan1xi}} — ничего страшного.",
      ],
    },
    necessity: { ru: ["Теперь вы можете сказать, кто с кем ладит, и ответить «ничего страшного»."] },
  },
  exampleRelation1: { ru: ["У нас с ним хорошие отношения."] },
  exampleRelation2: { ru: ["У них плохие отношения."] },
  exampleRelation3: { ru: ["Ничего страшного!"] },
  exampleRelation4: { ru: ["Это как-то связано с тем?"] },
  infoInsideASentence: {
    title: { ru: ["Как связать слова в предложении"] },
    items: [
      {
        ru: [
          "{{word:gei3}} + человек + вещь — давать: {{Word:wo3}} {{word:gei3}} {{word:ni3}} {{word:shui3}}. (Я даю тебе воду.)",
        ],
      },
      {
        ru: [
          "{{word:yong4}} + вещь + глагол — чем: {{Word:wo3}} {{word:yong4}} {{word:gong1ju4}} {{word:xie3}}. (Я пишу инструментом.)",
        ],
      },
      {
        ru: [
          "A {{word:he2}} B — и (только для существительных): {{word:ni3}} {{word:he2}} {{word:wo3}} (ты и я)",
        ],
      },
      {
        ru: [
          "A {{word:huo4zhe3}} B — или: {{word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge (это или то)",
        ],
      },
      {
        ru: [
          "A {{word:dui4}} B + прилагательное — к кому / для кого: {{Word:ta1}} {{word:dui4}} {{word:wo3}} {{word:hen3}} {{word:hao3}}. (Он ко мне хорошо относится.)",
        ],
      },
      {
        ru: [
          "A {{word:he2}} B-{{word:de}} {{word:guan1xi}} — отношения: {{Word:wo3}} {{word:he2}} {{word:ta1}}-{{word:de}} {{word:guan1xi}} {{word:hen3}} {{word:hao3}}. (У нас с ним хорошие отношения.) {{Word:mei2}}-{{word:you3}} {{word:guan1xi}}! (Ничего страшного!)",
        ],
      },
    ],
  },
  exercise1: { ru: ["Дай мне коробку."] },
  exercise2: { ru: ["Она пишет палкой."] },
  exercise3: { ru: ["Я хочу фрукты и рис."] },
  exercise4: { ru: ["это или то"] },
  exercise5: { ru: ["Солнце полезно для растений."] },
  exercise6: { ru: ["группа животных"] },
  exercise7: { ru: ["Не бей его."] },
  exercise8: { ru: ["Можно мне потрогать?"] },
  exercise9: { ru: ["Ничего страшного!"] },
  exercise10: { ru: ["У меня с родителями хорошие отношения."] },
  answer1: { ru: ["{{Word:gei3}} {{word:wo3}} {{word:he2zi}}."] },
  answer2: {
    ru: [
      "{{Word:ta1}} {{word:yong4}} {{word:gun4zi}} {{word:xie3}}.",
    ],
  },
  answer3: {
    ru: [
      "{{Word:wo3}} {{word:yao4}} {{word:shui3guo3}} {{word:he2}} {{word:mi3fan4}}.",
    ],
  },
  answer4: {
    ru: ["{{Word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge."],
  },
  answer5: {
    ru: [
      "{{Word:ri4}} {{word:dui4}} {{word:zhi2wu4}} {{word:hen3}} {{word:hao3}}.",
    ],
  },
  answer6: { ru: ["{{Word:yi1}}-{{word:qun2}} {{word:dong4wu4}}."] },
  answer7: {
    ru: [
      "{{Word:bu4}} {{word:yao4}} {{word:da3}} {{word:ta1}}.",
    ],
  },
  answer8: {
    ru: [
      "{{Word:wo3}} {{word:neng2}} {{word:mo1}} {{word:ma}}?",
    ],
  },
  answer9: { ru: ["{{Word:mei2}}-{{word:you3}} {{word:guan1xi}}!"] },
  answer10: { ru: ["{{Word:wo3}} {{word:he2}} {{word:fu4mu3}}-{{word:de}} {{word:guan1xi}} {{word:hen3}} {{word:hao3}}."] },
  faqAndSentences: {
    question: { ru: ["Как сказать «и» между двумя предложениями?"] },
    ru: [
      "Поставьте их рядом через запятую: {{Word:wo3}} {{word:chi1}}, {{word:ta1}} {{word:shui4jiao4}} (Я ем, а он спит). Для «тоже» добавьте {{word:ye3}}: {{Word:wo3}} {{word:hen3}} {{word:leng3}}, {{word:ta1}} {{word:ye3}} {{word:hen3}} {{word:leng3}}.",
    ],
  },
  faqGeiForOrTo: {
    question: { ru: ["{{word:gei3}} {{word:ni3}} {{word:xie3}} — это «пишу тебе» или «пишу для тебя»?"] },
    ru: [
      "И то и другое. Что именно — понятно из ситуации.",
    ],
  },
  faqHuozheQuestion: {
    question: { ru: ["Можно ли использовать {{word:huo4zhe3}} в вопросе?"] },
    ru: [
      "Да, но тогда это вопрос «да или нет»: {{Word:ni3}} {{word:yao4}} {{word:zhe4}}-ge {{word:huo4zhe3}} {{word:na4}}-ge {{word:ma}}? спрашивает «Тебе нужно что-нибудь из этого?». Чтобы попросить выбрать, в полном китайском есть другое слово для «или».",
    ],
  },
};

export default ru;
